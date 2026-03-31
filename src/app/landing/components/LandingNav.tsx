import React from 'react';
import Link from 'next/link';

import styles from '../landing.module.css';

export function LandingNav(): React.JSX.Element {
  return (
    <div className={styles.navWrapper}>
      <nav className={styles.nav}>
        <div className={styles.navLogo}>VERA</div>

        <div className={styles.navLinks}>
          <Link href="#" className={`${styles.navLink} ${styles.navLinkActive}`}>Home</Link>
          <Link href="#individuals" className={styles.navLink}>Individuals</Link>
          <Link href="#therapists" className={styles.navLink}>Therapists</Link>
          <Link href="#pricing" className={styles.navLink}>Pricing</Link>
        </div>

        <div className={styles.navActions}>
          <Link
            href="/sign-up"
            className={`${styles.pillBtn} ${styles.pillBtnPrimary} ${styles.pillBtnSmall}`}
          >
            Get Started →
          </Link>
        </div>
      </nav>
    </div>
  );
}
