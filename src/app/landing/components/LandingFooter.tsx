import React from 'react';
import Link from 'next/link';

import styles from '../landing.module.css';
import { FOOTER_NAV, SOCIAL_LINKS } from '../data/footer';

function SocialIcon({ label }: { label: string }) {
  if (label === 'Facebook') return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="12" fill="#9B83FC" />
      <path d="M16.5 12.05h-2.7v7.95h-3.3v-7.95H8.5V9.3h2v-1.6c0-2.05.87-3.27 3.27-3.27h2.01v2.85h-1.26c-.94 0-1 .35-1 1.01V9.3h2.29l-.31 2.75z" fill="#fff" />
    </svg>
  );
  if (label === 'Instagram') return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="6" fill="#9B83FC" />
      <rect x="5" y="5" width="14" height="14" rx="4" stroke="#fff" strokeWidth="1.5" fill="none" />
      <circle cx="12" cy="12" r="3.5" stroke="#fff" strokeWidth="1.5" fill="none" />
      <circle cx="16.5" cy="7.5" r="1" fill="#fff" />
    </svg>
  );
  if (label === 'TikTok') return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="6" fill="#9B83FC" />
      <path d="M15.2 7.6c.4 1 1.2 1.5 2 1.6v1.7c-.7-.1-1.4-.4-1.9-.8v3.4c0 1.7-1.3 3-3 3s-3-1.3-3-3 1.3-3 3-3c.2 0 .3 0 .5.1v1.7c-.2-.1-.3-.1-.5-.1-.8 0-1.4.6-1.4 1.4s.6 1.4 1.4 1.4 1.4-.6 1.4-1.4V7.6h1.5z" fill="#fff" />
    </svg>
  );
  if (label === 'YouTube') return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="6" fill="#9B83FC" />
      <path d="M10 15.5v-7l5.5 3.5-5.5 3.5z" fill="#fff" />
    </svg>
  );
  return null;
}

export function LandingFooter(): React.JSX.Element {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerCrisisSection}>
        <div className={styles.container}>
          <div className={styles.footerCrisis}>
            <p className={styles.footerCrisisTitle}>If You&apos;re In Immediate Danger</p>
            <p className={styles.footerCrisisDesc}>VERA is not a crisis service. Please reach out for immediate help.</p>
            <div className={styles.footerCrisisActions}>
              <Link href="tel:988" className={styles.crisisBtnGreen}>Call 988 (Crisis Line)</Link>
              <Link href="https://www.veteranscrisisline.net/" target="_blank" className={styles.crisisBtnPurple}>Veterans Crisis Line</Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerMain}>
        <div className={styles.footerLogo}>VERA</div>
        <div className={styles.footerCenter}>
          <nav className={styles.footerNavLinks}>
            {FOOTER_NAV.map((link, i) => (
              <Link key={link.label} href={link.href} className={`${styles.footerNavLink} ${i === 0 ? styles.footerNavLinkActive : ''}`}>{link.label}</Link>
            ))}
          </nav>
          <div className={styles.footerStores}>
            <Link href="https://apps.apple.com/us/app/veraneural/id6756195287" target="_blank" rel="noopener noreferrer" className={styles.individualsStoreBtn}>
              <svg width="22" height="27" viewBox="0 0 22 27" fill="none" aria-hidden="true">
                <path d="M18.05 14.3c-.03-3.1 2.53-4.6 2.65-4.67-1.45-2.11-3.69-2.4-4.49-2.43-1.9-.19-3.73 1.13-4.7 1.13-.98 0-2.47-1.1-4.07-1.07-2.08.03-4.01 1.22-5.08 3.07-2.18 3.77-.56 9.33 1.55 12.38 1.04 1.5 2.27 3.17 3.88 3.11 1.57-.06 2.15-1 4.04-1s2.42 1 4.07.97c1.68-.03 2.74-1.51 3.76-3.02 1.2-1.73 1.69-3.42 1.71-3.51-.04-.01-3.28-1.26-3.32-4.97zM14.9 4.9C15.77 3.84 16.36 2.4 16.2.9c-1.3.06-2.88.87-3.81 1.93-.83.94-1.56 2.45-1.37 3.89 1.45.11 2.93-.73 3.88-1.82z" fill="white" />
              </svg>
              <span className={styles.individualsStoreBtnText}>
                <span className={styles.individualsStoreBtnSub}>Available on the</span>
                <span className={styles.individualsStoreBtnMain}>App Store</span>
              </span>
            </Link>
            <Link href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className={styles.individualsStoreBtn}>
              <svg width="24" height="27" viewBox="0 0 24 27" fill="none" aria-hidden="true">
                <path d="M1.5.75 13.88 13.5 1.5 26.25A2 2 0 0 1 .5 24.5v-22a2 2 0 0 1 1-.75z" fill="#EA4335" />
                <path d="M20.5 11.5l-3.5-2-4.5 4 4.5 4 3.6-2.1a1.75 1.75 0 0 0 0-3.9z" fill="#FBBC04" />
                <path d="M1.5.75l12.9 7.45-3.52 3.52L1.5.75z" fill="#4285F4" />
                <path d="M1.5 26.25l9.38-10.78 3.52 3.53L1.5 26.25z" fill="#34A853" />
              </svg>
              <span className={styles.individualsStoreBtnText}>
                <span className={styles.individualsStoreBtnSub}>GET IT ON</span>
                <span className={styles.individualsStoreBtnMain}>Google Play</span>
              </span>
            </Link>
          </div>
        </div>
        <div className={styles.footerSocialCol}>
          <p className={styles.footerSocialLabel}>Social Links</p>
          <div className={styles.footerSocial}>
            {SOCIAL_LINKS.map((link) => (
              <Link key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className={styles.footerSocialLink} aria-label={link.label}>
                <SocialIcon label={link.label} />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.footerCopyright}>
        <span>&#169; 2026 VERA | Built with love, science, and lived experience</span>
        <div className={styles.footerLegalLinks}>
          <Link href="/terms" className={styles.footerLink}>&bull; Terms &amp; Conditions</Link>
          <Link href="/privacy" className={styles.footerLink}>&bull; Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
