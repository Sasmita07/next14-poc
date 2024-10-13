import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Next.js POC',
    template: '%s | page'
  },
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header style={{backgroundColor: 'lightblue'}}>
          Website Home Header
        </header>
        {children}
        <footer style={{bottom:0, position:'absolute',
          backgroundColor: 'grey', paddingTop: '1pt', paddingBottom: '1pt', width:'100%'}}>
            <p>©Sas Next.js POC Home Footer</p>
        </footer>
      </body>
    </html>
  )
}
