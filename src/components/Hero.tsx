'use client';

import { useTranslations } from 'next-intl';
import styles from './Hero.module.css';

export default function Hero() {
  const t = useTranslations();

  return (
    <section className={styles.hero}>
      {/* Animated gradient blobs */}
      <div className={styles.blobs}>
        <div className={`${styles.blob} ${styles.blobIndigo}`} />
        <div className={`${styles.blob} ${styles.blobPurple}`} />
        <div className={`${styles.blob} ${styles.blobTeal}`} />
      </div>

      {/* Hero content */}
      <div className={styles.content}>
        <h1 className={styles.title}>
          {t('Hero.title')}
        </h1>
        <h2 className={styles.tagline}>
          {t('Hero.subtitle')}
        </h2>
      </div>
    </section>
  );
}
