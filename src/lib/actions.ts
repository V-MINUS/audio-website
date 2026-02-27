'use server'

import { contactSchema } from '@/lib/validations'
import { sendContactEmail } from '@/lib/email'

const rateLimitMap = new Map<string, { count: number; resetAt: number }>()

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const windowMs = 60 * 1000
  const maxRequests = 5

  const entry = rateLimitMap.get(ip)
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + windowMs })
    return true
  }
  if (entry.count >= maxRequests) return false
  entry.count++
  return true
}

export async function submitContactForm(
  prevState: { success: boolean; error?: string } | null,
  formData: FormData
): Promise<{ success: boolean; error?: string }> {
  try {
    const ip = (formData.get('_ip') as string) || 'unknown'
    if (!checkRateLimit(ip)) {
      return { success: false, error: 'Too many requests. Please wait a minute before trying again.' }
    }

    const raw = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone') || undefined,
      service: formData.get('service'),
      eventType: formData.get('eventType'),
      eventDate: formData.get('eventDate') || undefined,
      message: formData.get('message'),
    }

    const parsed = contactSchema.safeParse(raw)
    if (!parsed.success) {
      const firstError = parsed.error.issues[0]?.message || 'Invalid input. Please check your details.'
      return { success: false, error: firstError }
    }

    await sendContactEmail(parsed.data)

    return { success: true }
  } catch (err) {
    console.error('Contact form error:', err)
    return {
      success: false,
      error: 'Failed to send message. Please try again or email us directly at info@teahansound.ie',
    }
  }
}
