import React from 'react';

import styles from '../landing.module.css';
import { TESTIMONIALS } from '../data/testimonials';

export function LandingTestimonials(): React.JSX.Element {
  return (
    <section className={styles.section}>
      <div className={styles.containerWide}>
        <h2 className={styles.sectionTitle}>
          What People Are <span className={styles.gradientText}>Saying</span>
        </h2>
        <p className={styles.sectionSub}>
          Real stories from real people using VERA every day.
        </p>

        <div className={styles.testimonialGrid}>
          {TESTIMONIALS.map((item, index) => (
            <div key={`${item.author}-${index}`} className={styles.testimonialCard}>
              <div className={styles.testimonialCardHeader}>
                <div className={`${styles.testimonialAvatar} ${item.green ? styles.testimonialAvatarGreen : ''}`}>
                  {item.author.charAt(0)}
                </div>
                <div className={styles.testimonialMeta}>
                  <span className={styles.testimonialName}>{item.author}</span>
                  <span className={styles.testimonialTime}>{item.timeAgo}</span>
                </div>
              </div>
              <div className={styles.testimonialStars}>
                {'★'.repeat(item.rating)}{'☆'.repeat(5 - item.rating)}
              </div>
              <p className={styles.testimonialText}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
