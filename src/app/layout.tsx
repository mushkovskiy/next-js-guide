import NextTopLoader from 'nextjs-toploader';
import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NextTopLoader showSpinner={false} />
        {children}
      </body>
    </html>

  );
}
