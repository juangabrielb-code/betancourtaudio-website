// This is the new root layout: src/app/layout.tsx
// It's a minimal layout that passes the `locale` param to the children.
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export default function RootLayout({ children, params }: Props) {
  return (
    <html lang={params.locale}>
      <body>{children}</body>
    </html>
  );
}
