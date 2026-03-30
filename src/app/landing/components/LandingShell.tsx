import React from 'react';

import styles from '../landing.module.css';

interface LandingShellProps {
  children: React.ReactNode;
}

export function LandingShell({ children }: LandingShellProps): React.JSX.Element {
  return (
    <main id="main-content" className={styles.shell} role="main">
      <div className={styles.content}>
        {children}
      </div>
    </main>
  );
}
