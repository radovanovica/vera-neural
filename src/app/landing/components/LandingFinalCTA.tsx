import React from 'react';
import Link from 'next/link';

import styles from '../landing.module.css';

export function LandingFinalCTA(): React.JSX.Element {
  return (
    <section className={`${styles.section} ${styles.sectionAlt} ${styles.textCenter}`}>
      <div className={styles.containerSm}>
        <p className={styles.sectionLabel}>Already Interested?</p>
        <h2 className={styles.sectionTitle}>
          You Don&apos;t Have To White-Knuckle<br />
          <span className={styles.gradientText}>Through Another Night</span>
        </h2>
        <p style={{
          color: 'var(--text-muted)', fontSize: '1.05rem',
          lineHeight: 1.8, margin: '1.5rem auto 2.5rem', maxWidth: 520
        }}>
          Right now, someone just like you is talking to VERA.<br />
          Right now, VERA is ready for you too.
        </p>
        <div className={styles.heroActions}>
          <Link href="/sign-up" className={`${styles.pillBtn} ${styles.pillBtnPrimary}`}>
            Download VERA
          </Link>
          <Link href="/therapist/signup" className={`${styles.pillBtn} ${styles.pillBtnGreen}`}>
            Therapeutics Access →
          </Link>
        </div>
        <div className={styles.mt2}>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-dim)' }}>
            Looking to deploy VERA for an organization?{' '}
            <Link href="/enterprise" style={{ color: 'var(--purple-light)', textDecoration: 'underline' }}>
              Explore Enterprise →
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
