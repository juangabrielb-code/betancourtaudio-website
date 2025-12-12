import { ReactNode } from 'react';
import { Crimson_Pro, Work_Sans } from 'next/font/google';
import './globals.css';

const crimsonPro = Crimson_Pro({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  variable: '--font-display',
  display: 'swap',
});

const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-body',
  display: 'swap',
});

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="es" className={`${crimsonPro.variable} ${workSans.variable}`}>
      <body className="bg-background text-foreground antialiased font-sans">{children}</body>
    </html>
  );
}
