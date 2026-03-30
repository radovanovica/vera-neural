import React from 'react';

import styles from '../landing.module.css';
import { TESTIMONIALS } from '../data/testimonials';

export function LandingTestimonials(): React.JSX.Element {
  return (
    <section className={`${styles.section} ${styles.sectionAlt}`}>
      <div className={styles.containerSm}>
        <p className={styles.sectionLabel}>Real People. Real Relief.</p>
        <h2 className={`${styles.sectionTitle} ${styles.mb2}`}>
          What people are saying
        </h2>

        {TESTIMONIALS.map((item, index) => (
          <div
            key={`${item.author}-${index}`}
            className={`${styles.testimonial} ${item.green ? styles.testimonialGreen : ''}`}
          >
            <p className={styles.testimonialText}>{item.text}</p>
            <p className={`${styles.testimonialAuthor} ${item.green ? styles.testimonialAuthorGreen : styles.testimonialAuthorPurple}`}>
              {item.author}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
