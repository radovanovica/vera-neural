import React from 'react';
import Link from 'next/link';

import styles from '../landing.module.css';
import { FOOTER_NAV, SOCIAL_LINKS } from '../data/footer';

export function LandingFooter(): React.JSX.Element {
  return (
    <footer className={styles.footer}>
      {/* Crisis Section */}
      <div className={styles.section} style={{ paddingTop: '4rem', paddingBottom: '2rem' }}>
        <div className={styles.footerCrisis}>
          <p className={styles.footerCrisisTitle}>If You&apos;re In Immediate Danger</p>
          <p className={styles.footerCrisisDesc}>
            VERA is not a crisis service. If you&apos;re in danger, please reach out for immediate help.
          </p>
          <div className={styles.footerCrisisActions}>
            <Link href="tel:988" className={`${styles.crisisBtn} ${styles.crisisBtnRed}`}>
              Call 988 Crisis Line
            </Link>
            <Link href="https://www.veteranscrisisline.net/" target="_blank" className={`${styles.crisisBtn} ${styles.crisisBtnPurple}`}>
              Veterans Crisis Line
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.footerBottom}>
        <div className={styles.footerLogo}>VERA</div>

        <div className={styles.footerNavLinks}>
          {FOOTER_NAV.map((link) => (
            <Link key={link.label} href={link.href} className={styles.footerNavLink}>
              {link.label}
            </Link>
          ))}
        </div>

        <div className={styles.footerRight}>
          <div className={styles.footerStores}>
            <Link href="https://apps.apple.com/us/app/veraneural/id6756195287" target="_blank" rel="noopener noreferrer">
              <img
                src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/white/en-us?size=250x83"
                alt="App Store"
                className={styles.footerStoreImg}
              />
            </Link>
            <Link href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                className={styles.footerStoreImg}
              />
            </Link>
          </div>

          <div className={styles.footerSocial}>
            {SOCIAL_LINKS.map((link) => (
              <Link key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className={styles.footerSocialLink}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className={styles.footerCopyright}>
        © 2026 VERA | Built with love, science, and lived experience &nbsp;·&nbsp;
        <Link href="/terms" className={styles.footerLink}>Terms & Conditions</Link>
        ·
        <Link href="/privacy" className={styles.footerLink}>Privacy Policy</Link>
      </div>
    </footer>
  );
}
