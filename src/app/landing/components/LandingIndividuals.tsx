import React from 'react';
import Link from 'next/link';

import styles from '../landing.module.css';
import { INDIVIDUALS_CARDS } from '../data/individuals';

export function LandingIndividuals(): React.JSX.Element {
  return (
    <section id="individuals" className={`${styles.section} ${styles.individualsSection}`}>
      <div className={styles.container}>
        <h2 className={styles.individualsTitle}>
          VERA Knows <span className={styles.gradientText}>The Difference</span>
        </h2>
        <p className={styles.sectionSub}>
          Between sessions, symptoms don&apos;t wait.<br />
          And generic advice can miss the moment or make it worse.<br />
          VERA listens your nervous system state and responds to what&apos;s happening now.
        </p>

        <div className={styles.cardGrid}>
          {INDIVIDUALS_CARDS.map((item) => (
            <div key={item.title} className={styles.individualsCard}>
              <div className={styles.individualsCardTop}>
                <div className={styles.individualsCardIcon}>
                  <span>{item.icon}</span>
                </div>
                <div>
                  <h3 className={styles.individualsCardTitle}>{item.title}</h3>
                  <p className={styles.cardDesc}>{item.desc}</p>
                </div>
              </div>
              <p className={styles.individualsCardResponse}>→ {item.response}</p>
            </div>
          ))}
        </div>

        <div className={styles.individualsStoreRow}>
          <Link href="https://apps.apple.com/us/app/veraneural/id6756195287" target="_blank" rel="noopener noreferrer" className={styles.individualsStoreBtn}>
            <svg width="22" height="27" viewBox="0 0 22 27" fill="none" aria-hidden="true">
              <path d="M18.05 14.3c-.03-3.1 2.53-4.6 2.65-4.67-1.45-2.11-3.69-2.4-4.49-2.43-1.9-.19-3.73 1.13-4.7 1.13-.98 0-2.47-1.1-4.07-1.07-2.08.03-4.01 1.22-5.08 3.07-2.18 3.77-.56 9.33 1.55 12.38 1.04 1.5 2.27 3.17 3.88 3.11 1.57-.06 2.15-1 4.04-1s2.42 1 4.07.97c1.68-.03 2.74-1.51 3.76-3.02 1.2-1.73 1.69-3.42 1.71-3.51-.04-.01-3.28-1.26-3.32-4.97zM14.9 4.9C15.77 3.84 16.36 2.4 16.2.9c-1.3.06-2.88.87-3.81 1.93-.83.94-1.56 2.45-1.37 3.89 1.45.11 2.93-.73 3.88-1.82z" fill="white"/>
            </svg>
            <span className={styles.individualsStoreBtnText}>
              <span className={styles.individualsStoreBtnSub}>Available on the</span>
              <span className={styles.individualsStoreBtnMain}>App Store</span>
            </span>
          </Link>
          <Link href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className={styles.individualsStoreBtn}>
            <svg width="24" height="27" viewBox="0 0 24 27" fill="none" aria-hidden="true">
              <path d="M1.5.75 13.88 13.5 1.5 26.25A2 2 0 0 1 .5 24.5v-22a2 2 0 0 1 1-.75z" fill="#EA4335"/>
              <path d="M20.5 11.5l-3.5-2-4.5 4 4.5 4 3.6-2.1a1.75 1.75 0 0 0 0-3.9z" fill="#FBBC04"/>
              <path d="M1.5.75l12.9 7.45-3.52 3.52L1.5.75z" fill="#4285F4"/>
              <path d="M1.5 26.25l9.38-10.78 3.52 3.53L1.5 26.25z" fill="#34A853"/>
            </svg>
            <span className={styles.individualsStoreBtnText}>
              <span className={styles.individualsStoreBtnSub}>GET IT ON</span>
              <span className={styles.individualsStoreBtnMain}>Google Play</span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
