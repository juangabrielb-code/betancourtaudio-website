import { ReactNode } from 'react';
import { Syne, Space_Grotesk } from 'next/font/google';

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html className={`${syne.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-background text-foreground antialiased">{children}</body>
    </html>
  );
}
