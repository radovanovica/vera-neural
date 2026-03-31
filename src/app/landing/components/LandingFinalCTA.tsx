import React from 'react';
import Link from 'next/link';

import styles from '../landing.module.css';

export function LandingFinalCTA(): React.JSX.Element {
  return (
    <section className={`${styles.section} ${styles.textCenter}`}>
      <div className={styles.container}>
        <div className={styles.finalCtaCard}>
          <p className={styles.sectionLabel}>VERA Already Understands</p>
          <h2 className={styles.finalCtaTitle}>
            You Don&apos;t Have To White-Knuckle<br />
            Through Another Night
          </h2>
          <p className={styles.finalCtaDesc}>
            Right now, someone just like you is talking to VERA.<br />
            Right now, VERA is ready for you too.
          </p>
          <div className={styles.finalCtaActions}>
            <Link href="/sign-up" className={styles.heroCtaPrimary}>
              Download VERA
            </Link>
            <Link href="/therapist/signup" className={styles.finalCtaOutline}>
              Therapists Access &#8594;
            </Link>
          </div>
          <p className={styles.finalCtaEnterprise}>
            Looking to deploy VERA for an organization?{' '}
            <Link href="/enterprise" className={styles.finalCtaEnterpriseLink}>
              Explore Enterprise
            </Link>{' '}&#8594;
          </p>
        </div>
      </div>
    </section>
  );
}
