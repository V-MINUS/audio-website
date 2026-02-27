import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const RATE_LIMIT_WINDOW = 60 * 1000
const RATE_LIMIT_MAX = 60

const ipRequestMap = new Map<string, { count: number; resetAt: number }>()

function getIp(request: NextRequest): string {
  return (
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    '127.0.0.1'
  )
}

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = ipRequestMap.get(ip)
  if (!entry || now > entry.resetAt) {
    ipRequestMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW })
    return false
  }
  if (entry.count >= RATE_LIMIT_MAX) return true
  entry.count++
  return false
}

export function proxy(request: NextRequest) {
  const ip = getIp(request)
  const { pathname } = request.nextUrl

  if (pathname.startsWith('/api/') && isRateLimited(ip)) {
    return new NextResponse(JSON.stringify({ error: 'Too many requests' }), {
      status: 429,
      headers: { 'Content-Type': 'application/json', 'Retry-After': '60' },
    })
  }

  const suspiciousPatterns = [/\.\.(\/|\\)/, /<script/i, /javascript:/i, /vbscript:/i]
  if (suspiciousPatterns.some((p) => p.test(request.url))) {
    return new NextResponse('Bad Request', { status: 400 })
  }

  const response = NextResponse.next()
  response.headers.delete('x-powered-by')
  response.headers.set('X-Frame-Options', 'SAMEORIGIN')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  return response
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'],
}
