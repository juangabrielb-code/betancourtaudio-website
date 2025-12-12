'use client';

import { useTranslations } from 'next-intl';
import styles from './Navbar.module.css';

export default function Navbar() {
  const t = useTranslations();

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <a href="#home" className={styles.link}>
          {t('Navbar.home')}
        </a>
        <a href="#services" className={styles.link}>
          {t('Navbar.services')}
        </a>
        <a href="#portfolio" className={styles.link}>
          {t('Navbar.portfolio')}
        </a>
        <a href="#contact" className={styles.link}>
          {t('Navbar.contact')}
        </a>
      </div>
    </nav>
  );
}
