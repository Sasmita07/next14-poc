import { NextResponse, type NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const themeReference = request.cookies.get('theme');
  if (!themeReference) {
    request.cookies.set('theme', 'dark');
  }

  response.headers.set('customHeader', 'customValue');
  return response;
  //   if (request.nextUrl.pathname === '/profile') {
  //     return NextResponse.redirect(new URL('/blog', request.url));
  //   }
  //   return NextResponse.redirect(new URL('/', request.url));
}

// export const config = {
//   matcher: '/profile',
// };
