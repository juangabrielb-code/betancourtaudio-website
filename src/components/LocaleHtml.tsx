'use client';

import { useEffect } from 'react';

type Props = {
  locale: string;
};

export default function LocaleHtml({ locale }: Props) {
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return null;
}

