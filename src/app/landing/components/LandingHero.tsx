import React from 'react';
import Link from 'next/link';

import styles from '../landing.module.css';

export function LandingHero(): React.JSX.Element {
  return (
    <section className={styles.hero}>
      {/* Ellipse rings background */}
      <img
        src="/images/svg/elipse.svg"
        alt=""
        aria-hidden="true"
        className={styles.heroEllipse}
      />

      <div className={styles.heroInner}>
        <div className={styles.heroContent}>
          {/* Tagline pill */}
          <div className={`${styles.heroTagline} ${styles.fadeUp1}`}>
            <span className={styles.heroTaglineIcon}>✓</span>
            <span>Take a breath. You are at the right place.</span>
          </div>

          {/* Title */}
          <h1 className={`${styles.heroTitle} ${styles.fadeUp2}`}>
            <span className={styles.heroTitleMain}>24/7</span>
            <span className={styles.heroTitleSub}>Nervous System Support</span>
          </h1>

          {/* Subtitle */}
          <p className={`${styles.heroSubtitle} ${styles.fadeUp3}`}>
            Support for the time between therapy sessions,<br />
            when real life actually happens.
          </p>

          {/* CTA Buttons */}
          <div className={`${styles.heroActions} ${styles.fadeUp3}`}>
            <Link href="/sign-up" className={styles.heroCtaPrimary}>
              Try it for Free. No Card Needed.
            </Link>
            <Link href="#therapists" className={styles.heroCtaOutline}>
              For Therapists →
            </Link>
          </div>
        </div>

        {/* Phones image stack — hero-img-2 & 3 float above hero-img-1 */}
        <div className={`${styles.heroPhones} ${styles.fadeUp4}`}>
          <img
            src="/images/hero-img-2.png"
            alt=""
            aria-hidden="true"
            className={styles.heroPhonesOverlay2}
          />
          <img
            src="/images/hero-img-3.png"
            alt=""
            aria-hidden="true"
            className={styles.heroPhonesOverlay3}
          />
          <img
            src="/images/hero-img-1.png"
            alt="VERA app on phones"
            className={styles.heroPhonesImg}
          />
        </div>

        {/* Store badges card — overlaps bottom of phones */}
        <div className={`${styles.heroStoreRow} ${styles.fadeUp4}`}>
          <div className={styles.heroStoreBtns}>
            <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className={styles.heroStoreBtn}>
              <svg width="22" height="27" viewBox="0 0 22 27" fill="none" aria-hidden="true">
                <path d="M18.05 14.3c-.03-3.1 2.53-4.6 2.65-4.67-1.45-2.11-3.69-2.4-4.49-2.43-1.9-.19-3.73 1.13-4.7 1.13-.98 0-2.47-1.1-4.07-1.07-2.08.03-4.01 1.22-5.08 3.07-2.18 3.77-.56 9.33 1.55 12.38 1.04 1.5 2.27 3.17 3.88 3.11 1.57-.06 2.15-1 4.04-1s2.42 1 4.07.97c1.68-.03 2.74-1.51 3.76-3.02 1.2-1.73 1.69-3.42 1.71-3.51-.04-.01-3.28-1.26-3.32-4.97zM14.9 4.9C15.77 3.84 16.36 2.4 16.2.9c-1.3.06-2.88.87-3.81 1.93-.83.94-1.56 2.45-1.37 3.89 1.45.11 2.93-.73 3.88-1.82z" fill="white"/>
              </svg>
              <span className={styles.heroStoreBtnText}>
                <span className={styles.heroStoreBtnSub}>Available on the</span>
                <span className={styles.heroStoreBtnMain}>App Store</span>
              </span>
            </a>
            <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" className={styles.heroStoreBtn}>
              <svg width="24" height="27" viewBox="0 0 24 27" fill="none" aria-hidden="true">
                <path d="M1.5.75 13.88 13.5 1.5 26.25A2 2 0 0 1 .5 24.5v-22a2 2 0 0 1 1-.75z" fill="#EA4335"/>
                <path d="M20.5 11.5l-3.5-2-4.5 4 4.5 4 3.6-2.1a1.75 1.75 0 0 0 0-3.9z" fill="#FBBC04"/>
                <path d="M1.5.75l12.9 7.45-3.52 3.52L1.5.75z" fill="#4285F4"/>
                <path d="M1.5 26.25l9.38-10.78 3.52 3.53L1.5 26.25z" fill="#34A853"/>
              </svg>
              <span className={styles.heroStoreBtnText}>
                <span className={styles.heroStoreBtnSub}>GET IT ON</span>
                <span className={styles.heroStoreBtnMain}>Google Play</span>
              </span>
            </a>
          </div>
          {/* Trust line */}
          <p className={styles.heroTrustLine}>
            Free to start
            <span className={styles.heroTrustDot}>·</span>
            Cancel anytime
            <span className={styles.heroTrustDot}>·</span>
            Your data stays yours
          </p>
        </div>
      </div>
    </section>
  );
}
