import React from 'react';
import Link from 'next/link';

import styles from '../landing.module.css';

export function LandingHero(): React.JSX.Element {
  return (
    <section className={styles.hero}>
      <div className={styles.ambient} style={{ width: 500, height: 500, background: 'rgba(139,120,255,0.12)', top: '5%', left: '5%' }} />
      <div className={styles.ambient} style={{ width: 350, height: 350, background: 'rgba(100,70,180,0.08)', bottom: '10%', right: '8%' }} />

      <div className={styles.heroContent}>
        <div className={`${styles.orbContainer} ${styles.fadeUp1}`}>
          <div className={styles.orbRing} />
          <div className={styles.orb} />
        </div>

        <p className={`${styles.heroTagline} ${styles.fadeUp1}`}>
          Take a breath. You found the right place.
        </p>

        <h1 className={`${styles.heroTitle} ${styles.fadeUp2}`}>
          24/7 Nervous System Support.<br />
          <span className={styles.gradientText}>VERA already understands.</span>
        </h1>

        <p className={`${styles.heroSubtitle} ${styles.fadeUp3}`}>
          Support that reads what your nervous system is doing,<br className={styles.hideMobile} />
          senses where it's heading, and meets you before it overwhelms you.
        </p>

        <div className={`${styles.heroActions} ${styles.fadeUp3}`}>
          <Link href="/sign-up" className={`${styles.pillBtn} ${styles.pillBtnPrimary}`}>
            Start Free -- No Card Needed
          </Link>
          <Link href="#therapists" className={`${styles.pillBtn} ${styles.pillBtnOutline}`}>
            For Therapists &rarr;
          </Link>
        </div>

        <p className={styles.heroTrust}>
          <span className={styles.liveDot} />
          Free to start · Cancel anytime · Your data stays yours
        </p>

        <div className={`${styles.heroSecondaryActions} ${styles.fadeUp4}`}>
          <Link href="#individuals" className={`${styles.pillBtn} ${styles.pillBtnOutline} ${styles.pillBtnTiny}`}>
            For Individuals
          </Link>
          <Link href="#therapists" className={`${styles.pillBtn} ${styles.pillBtnGreen} ${styles.pillBtnTiny}`}>
            For Therapists
          </Link>
        </div>

        <div className={styles.fadeUp4}>
          <Link href="https://apps.apple.com/us/app/veraneural/id6756195287" target="_blank" rel="noopener noreferrer">
            <img
              src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/white/en-us?size=250x83"
              alt="Download VERA on the App Store"
              style={{ height: 42 }}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
