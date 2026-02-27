import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  service: z.enum(['audio', 'lighting', 'visual', 'stage', 'both', 'full'] as const, {
    message: 'Please select a service type',
  }),
  eventType: z.enum(['concert', 'festival', 'corporate', 'wedding', 'school', 'other'] as const, {
    message: 'Please select an event type',
  }),
  eventDate: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters').max(2000),
  hcaptchaToken: z.string().optional(),
})

export type ContactFormData = z.infer<typeof contactSchema>

export const newsletterSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
})

export type NewsletterFormData = z.infer<typeof newsletterSchema>
