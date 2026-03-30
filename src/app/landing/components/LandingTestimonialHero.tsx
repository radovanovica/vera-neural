import React from 'react';

import styles from '../landing.module.css';

export function LandingTestimonialHero(): React.JSX.Element {
  return (
    <section className={`${styles.section} ${styles.sectionCompact}`}>
      <div className={styles.containerSm}>
        <p className={`${styles.textCenter} ${styles.mb2}`} style={{ color: 'var(--green)', fontSize: '0.9rem' }}>
          <span className={styles.liveDot} />VERA is helping someone right now
        </p>
        <div className={styles.testimonialHero}>
          <p className={styles.testimonialHeroText}>
            "VERA understood my panic attack better than I did. She didn't tell me to just breathe -- she actually helped me understand what my body was doing and why."
          </p>
          <p className={styles.testimonialAuthorPurple} style={{ fontSize: '0.9rem' }}>Combat veteran with PTSD</p>
        </div>
      </div>
    </section>
  );
}
