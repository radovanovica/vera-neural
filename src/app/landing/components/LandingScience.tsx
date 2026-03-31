import React from 'react';

import styles from '../landing.module.css';
import { SCIENCE_CARDS } from '../data/science';

export function LandingScience(): React.JSX.Element {
  return (
    <section className={`${styles.section} ${styles.sectionAlt}`} style={{ position: 'relative' }}>
      <div
        className={styles.ambient}
        style={{ width: 500, height: 500, background: 'rgba(139,92,246,0.08)', top: '20%', left: '30%' }}
      />
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          Real-Time Nervous<br />
          <span className={styles.gradientText}>System Intelligence</span>
        </h2>
        <p className={styles.sectionSub}>
          Not advice. Not scripts. An AI that understands what your body is doing and supports<br className={styles.hideMobile} />
          your system exactly where you are, in real time.
        </p>

        {/* Orb visual */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '3rem' }}>
          <div className={styles.orbContainer}>
            <div className={styles.orbRing} />
            <div className={styles.orb} />
          </div>
        </div>

        <div className={styles.cardGrid}>
          {SCIENCE_CARDS.map((item) => (
            <div key={item.title} className={`${styles.card} ${styles.textCenter}`}>
              <div style={{
                width: 48, height: 48, borderRadius: '50%',
                background: 'rgba(139,92,246,0.15)',
                border: '1px solid rgba(139,92,246,0.25)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 1.25rem', fontSize: '1.3rem',
              }}>
                {item.icon}
              </div>
              <h3 className={`${styles.cardTitle} ${styles.cardTitleCenter} ${styles.cardTitlePurple}`}>
                {item.title}
              </h3>
              <p className={`${styles.cardDesc} ${styles.cardDescCenter}`}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
