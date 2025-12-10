import { NextIntlClientProvider, useMessages } from "next-intl";
import type { Metadata } from "next";
import { Geist_Sans } from "next/font/google";
import "../globals.css";

const geistSans = Geist_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Betancourt Audio",
  description: "Professional audio services and production",
};

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = useMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <body className={`${geistSans.variable} antialiased`}>{children}</body>
    </NextIntlClientProvider>
  );
}
