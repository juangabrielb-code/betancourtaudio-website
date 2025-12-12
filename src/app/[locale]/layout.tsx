import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import type { Metadata } from "next";
import { Syne, Space_Grotesk } from "next/font/google";
import LocaleHtml from "@/components/LocaleHtml";
import "../globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Betancourt Audio",
  description: "Professional audio services and production",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <LocaleHtml locale={locale} />
      <div className={`${syne.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
      </div>
    </NextIntlClientProvider>
  );
}
