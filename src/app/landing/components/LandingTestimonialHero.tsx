import React from 'react';

import styles from '../landing.module.css';

export function LandingTestimonialHero(): React.JSX.Element {
  return (
    <section className={`${styles.section} ${styles.sectionCompact} ${styles.testimonialHeroSection}`}>
      {/* Background SVG — large, stuck to left */}
      <img src="/images/svg/page-1-1.svg" aria-hidden alt="" className={styles.testimonialHeroBgSvg} />
      <div className={styles.testimonialHeroLayout}>
        {/* Right: testimonial card */}
        <div className={styles.testimonialHeroCard}>
          <p className={styles.testimonialHeroLive}>
            <span className={styles.liveDot} />VERA is helping someone right now
          </p>
          <p className={styles.testimonialHeroText}>
            &ldquo;VERA understood my panic attack better than I did. She didn&apos;t tell me to just breath, she actually helped me understand what my body was doing and why.&rdquo;
          </p>
          <p className={styles.testimonialAuthorPurple} style={{ fontSize: '0.9rem', textAlign: 'right' }}>
            Combat veteran with PTSD
          </p>
        </div>
      </div>
    </section>
  );
}
