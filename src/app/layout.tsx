import { ReactNode } from 'react';
import { getLocale } from 'next-intl/server';

type Props = {
  children: ReactNode;
};

export default async function RootLayout({ children }: Props) {
  const locale = await getLocale();
  
  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}
