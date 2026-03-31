import React from 'react';
import Image from 'next/image';

import styles from '../landing.module.css';
import { SCIENCE_CARDS } from '../data/science';

export function LandingScience(): React.JSX.Element {
  return (
    <section className={`${styles.section} ${styles.sectionAlt}`}>
      <div className={styles.container}>
        <h2 className={styles.individualsTitle}>
          Real-Time Nervous<br />
          <span className={styles.gradientText}>System Intelligence</span>
        </h2>
        <p className={styles.sectionSub}>
          Not advice. Not scripts. An AI that understands what your body is doing and supports
          your system exactly where you are, in real time.
        </p>

        <div className={styles.cardGrid}>
          {SCIENCE_CARDS.map((item) => (
            <div key={item.title} className={styles.individualsCard}>
              <div className={styles.scienceCardIcon}>
                {item.image
                  ? <Image src={item.image} alt={item.title} width={64} height={64} style={{ objectFit: 'contain' }} />
                  : <span style={{ fontSize: '2rem' }}>{item.icon}</span>
                }
              </div>
              <h3 className={styles.individualsCardTitle}>{item.title}</h3>
              <p className={styles.individualsCardResponse}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
