'use client';

import { useTranslations } from 'next-intl';
import styles from './Navbar.module.css';

export default function Navbar() {
  const t = useTranslations('Navbar');
  
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <a href="#home" className={styles.link}>
          {t('home')}
        </a>
        <a href="#services" className={styles.link}>
          {t('services')}
        </a>
        <a href="#portfolio" className={styles.link}>
          {t('portfolio')}
        </a>
        <a href="#contact" className={styles.link}>
          {t('contact')}
        </a>
      </div>
    </nav>
  );
}

