import React from 'react';
import Link from 'next/link';

import styles from '../landing.module.css';

export function LandingFinalCTA(): React.JSX.Element {
  return (
    <section className={`${styles.section} ${styles.textCenter}`}>
      <div className={styles.containerSm}>
        <div className={styles.orbSmall} />
        <h2 className={styles.sectionTitle}>
          You Don't Have to White-Knuckle<br />Through Another Night
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.8, margin: '1.5rem auto 2.5rem', maxWidth: 520 }}>
          Right now, someone just like you is talking to VERA.<br />
          Right now, VERA is ready for you too.
        </p>
        <div className={styles.heroActions}>
          <Link href="/sign-up" className={`${styles.pillBtn} ${styles.pillBtnPrimary}`}>
            Start Free -- No Card Needed
          </Link>
          <Link href="/therapist/signup" className={`${styles.pillBtn} ${styles.pillBtnGreen}`}>
            Therapist Access &rarr;
          </Link>
        </div>
        <div className={styles.mt1}>
          <Link href="https://apps.apple.com/us/app/veraneural/id6756195287" target="_blank" rel="noopener noreferrer">
            <img
              src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/white/en-us?size=250x83"
              alt="Download VERA on the App Store"
              style={{ height: 40 }}
            />
          </Link>
        </div>
        <p className={styles.mt2} style={{ fontSize: '0.9rem', color: 'var(--text-dim)' }}>
          Looking to deploy VERA for an organization?{' '}
          <Link href="/enterprise" style={{ color: 'var(--purple)', textDecoration: 'underline' }}>
            Explore Enterprise &rarr;
          </Link>
        </p>
      </div>
    </section>
  );
}
