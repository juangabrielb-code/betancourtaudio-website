import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import { useTranslations } from "next-intl";
import styles from './page.module.css';

export default function Home() {
  const t = useTranslations('HomePage');
  
  return (
    <>
      <Navbar />
      <Hero />
      <div className={styles.page} id="home">
        <main className={styles.main}>
          <div className={styles.content}>
            <h1 className={styles.title}>
              {t("title")}
            </h1>
            <p className={styles.subtitle}>
              {t("subtitle")}
            </p>
            <div className={styles.ctaContainer}>
              <a
                className={styles.ctaPrimary}
                href="#contact"
              >
                {t("ctaPrimary")}
              </a>
              <a
                className={styles.ctaSecondary}
                href="#services"
              >
                {t("ctaSecondary")}
              </a>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
