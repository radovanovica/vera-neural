import React from 'react';
import Link from 'next/link';

import styles from '../landing.module.css';

export function LandingFloatingCTA(): React.JSX.Element {
  return (
    <div className={styles.floatingCta}>
      <Link
        href="/sign-up"
        className={`${styles.pillBtn} ${styles.pillBtnPrimary}`}
        style={{ boxShadow: '0 4px 24px rgba(139,120,255,0.5)' }}
      >
        <span className={styles.liveDot} />
        Start Free
      </Link>
    </div>
  );
}
