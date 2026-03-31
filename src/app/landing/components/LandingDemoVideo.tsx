'use client';

import React from 'react';

import styles from '../landing.module.css';

export function LandingDemoVideo(): React.JSX.Element {
  return (
    <section className={`${styles.section} ${styles.demoVideoSection}`}>
      <div className={styles.container}>
        <h2 className={styles.individualsTitle}>
          See <span className={styles.gradientText}>VERA in Action</span>
        </h2>
        <p className={styles.sectionSub}>
          Watch how VERA supports your nervous system &mdash; anytime, anywhere.
        </p>
        <div className={styles.demoVideoWrap}>
          <div className={styles.demoVideoGlow} />
          <div className={styles.demoVideoEmbed}>
            <iframe
              src="https://preview.vidalytics.com/vid/NxD76CfhaxmsSgHh"
              allow="autoplay; fullscreen"
              allowFullScreen
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

