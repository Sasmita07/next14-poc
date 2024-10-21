import { type NextRequest } from 'next/server';
import { headers, cookies } from 'next/headers';

export async function GET(req: NextRequest) {
  const reqHeaders = new Headers(req.headers);
  console.log('NextRequest ===>', reqHeaders.get('Authorization'));
  const nextHeaders = headers();
  console.log('nextHeaders==>', nextHeaders.get('Authorization'));
  const theme = req.cookies.get('theme');
  console.log('theme==>', theme);
  cookies().set('refreshToken', '3456');

  return new Response('<h2>Profile Data</h2>', {
    headers: {
      'Content-Type': 'text/html',
      'Set-Cookie': 'theme=dark',
    },
  });
}
