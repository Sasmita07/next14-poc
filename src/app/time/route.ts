export const dynamic = 'force-dynamic';

export async function GET() {
  const time = new Date().toLocaleTimeString();
  return new Response(JSON.stringify({ time }));
}
