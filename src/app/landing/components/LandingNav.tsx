import React from 'react';
import Link from 'next/link';

import styles from '../landing.module.css';

export function LandingNav(): React.JSX.Element {
  return (
    <nav className={styles.nav}>
      <div className={styles.navLogo}>VERA</div>
      <div className={styles.navActions}>
        <Link href="/sign-in" className={styles.navLink}>
          Sign In
        </Link>
        <Link href="/sign-up" className={`${styles.pillBtn} ${styles.pillBtnPrimary} ${styles.pillBtnSmall}`}>
          Get Started Free
        </Link>
      </div>
    </nav>
  );
}
