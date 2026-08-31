import { NextRequest, NextResponse } from 'next/server'

const locales = ['id', 'en', 'fr']
const defaultLocale = 'id'

const isStaticAsset = (pathname: string) => {
  return (
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/public/') ||
    pathname === '/favicon.ico' ||
    /\.(?:png|jpe?g|gif|svg|webp|avif|ico|bmp|woff2?|ttf|otf|css|js|map)$/.test(pathname)
  )
}

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  if (isStaticAsset(pathname)) {
    return NextResponse.next()
  }

  // Check if pathname starts with a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) {
    return NextResponse.next()
  }

  // If no locale, redirect to default locale
  return NextResponse.redirect(
    new URL(`/${defaultLocale}${pathname}`, request.url)
  )
}

export const config = {
  matcher: ['/((?!_next|api|public|favicon.ico|.*\\.(?:png|jpe?g|gif|svg|webp|avif|ico|bmp|woff2?|ttf|otf|css|js|map)$).*)'],
}
