import React from 'react';

import styles from '../landing.module.css';
import { SCIENCE_CARDS } from '../data/science';

export function LandingScience(): React.JSX.Element {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.sectionLabel}>The Science</p>
        <h2 className={styles.sectionTitle}>Real-time nervous system intelligence</h2>
        <p className={styles.sectionSub}>Not advice. Not scripts. An AI that understands what your body is doing.</p>

        <div className={styles.cardGrid}>
          {SCIENCE_CARDS.map((item) => (
            <div key={item.title} className={`${styles.card} ${styles.textCenter}`}>
              <div className={styles.cardIconLarge} />
              <h3 className={`${styles.cardTitle} ${styles.cardTitlePurple}`}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
