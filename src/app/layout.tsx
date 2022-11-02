import 'src/styles/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <title>Next.js Template</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
