import React from 'react';
import Link from 'next/link';

import styles from '../landing.module.css';
import { FOOTER_LINKS } from '../data/footer';

export function LandingFooter(): React.JSX.Element {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerCrisis}>
        <p className={styles.footerCrisisTitle}>If you're in immediate danger:</p>
        <p className={styles.footerCrisisDesc}>
          VERA is not a crisis service. Please reach out for immediate help:
        </p>
        <div className={styles.footerCrisisActions}>
          <Link href="tel:988" className={`${styles.crisisBtn} ${styles.crisisBtnRed}`}>
            Call 988 (Crisis Line)
          </Link>
          <Link href="https://www.veteranscrisisline.net/" target="_blank" className={`${styles.crisisBtn} ${styles.crisisBtnPurple}`}>
            Veterans Crisis Line
          </Link>
        </div>
      </div>

      <div className={styles.footerSocial}>
        <Link href="https://www.instagram.com/vera.neural" target="_blank" rel="noopener noreferrer" className={styles.footerSocialLink}>Instagram</Link>
        <Link href="https://tiktok.com/@vera.neural" target="_blank" rel="noopener noreferrer" className={styles.footerSocialLink}>TikTok</Link>
        <Link href="https://www.youtube.com/@VERANeural" target="_blank" rel="noopener noreferrer" className={styles.footerSocialLink}>YouTube</Link>
        <Link href="https://www.facebook.com/people/VERA-Neural/61581850395799/" target="_blank" rel="noopener noreferrer" className={styles.footerSocialLink}>Facebook</Link>
      </div>

      <p className={styles.footerCopyright}>
        © 2026 VERA | Built with love, science, and lived experience<br />
        {FOOTER_LINKS.map((link) => (
          <Link key={link.href} href={link.href} className={styles.footerLink}>
            {link.label}
          </Link>
        ))}
      </p>
    </footer>
  );
}
