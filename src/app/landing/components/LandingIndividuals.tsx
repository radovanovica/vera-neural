import React from 'react';
import Link from 'next/link';

import styles from '../landing.module.css';
import { INDIVIDUALS_CARDS } from '../data/individuals';

export function LandingIndividuals(): React.JSX.Element {
  return (
    <section id="individuals" className={`${styles.section} ${styles.sectionAlt}`}>
      <div className={styles.container}>
        <p className={styles.sectionLabel}>For Individuals</p>
        <h2 className={styles.sectionTitle}>VERA Knows The Difference</h2>
        <p className={styles.sectionSub}>
          Most apps give generic advice. VERA reads your nervous system state in real time.
        </p>

        <div className={styles.cardGrid}>
          {INDIVIDUALS_CARDS.map((item) => (
            <div key={item.title} className={styles.card}>
              <div
                className={styles.cardIcon}
                style={{
                  background: `radial-gradient(circle at 35% 35%, ${item.color}aa, ${item.color})`,
                  boxShadow: `0 0 12px ${item.color}55`,
                }}
              />
              <h3 className={styles.cardTitle} style={{ color: item.color }}>
                {item.title}
              </h3>
              <p className={styles.cardDesc}>{item.desc}</p>
              <p className={styles.cardResponse}>&rarr; {item.response}</p>
            </div>
          ))}
        </div>

        <div className={`${styles.textCenter} ${styles.mt3}`}>
          <Link href="/sign-up" className={`${styles.pillBtn} ${styles.pillBtnPrimary}`}>
            Start Your Free Experience
          </Link>
        </div>
      </div>
    </section>
  );
}
