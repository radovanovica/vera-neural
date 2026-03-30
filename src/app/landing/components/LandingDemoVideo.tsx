import React from 'react';

import styles from '../landing.module.css';

export function LandingDemoVideo(): React.JSX.Element {
  return (
    <section className={`${styles.section} ${styles.sectionAlt} ${styles.sectionCompact}`}>
      <div className={`${styles.containerSm} ${styles.textCenter}`}>
        <p className={styles.sectionLabel}>See VERA</p>
        <h2 className={`${styles.sectionTitle} ${styles.mb1}`}>
          Watch how it actually works
        </h2>
        <p className={styles.sectionSub}>Not a demo reel. A real conversation.</p>
        <div className={styles.videoWrapper}>
          <video controls playsInline className={styles.video}>
            <source
              src="https://videos.files.wordpress.com/vVNTXPwx/vera-nervous-system-ai-coregulator.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </section>
  );
}
