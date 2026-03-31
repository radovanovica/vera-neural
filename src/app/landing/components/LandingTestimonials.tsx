import React from 'react';

import styles from '../landing.module.css';
import { TESTIMONIALS } from '../data/testimonials';

function PlatformIcon({ platform }: { platform?: string }) {
  if (platform === 'facebook') {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="12" fill="#9B83FC" />
        <path d="M16.5 12.05h-2.7v7.95h-3.3v-7.95H8.5V9.3h2v-1.6c0-2.05.87-3.27 3.27-3.27h2.01v2.85h-1.26c-.94 0-1 .35-1 1.01V9.3h2.29l-.31 2.75z" fill="#fff" />
      </svg>
    );
  }
  if (platform === 'instagram') {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#9B83FC" />
        <rect x="5" y="5" width="14" height="14" rx="4" stroke="#fff" strokeWidth="1.5" fill="none" />
        <circle cx="12" cy="12" r="3.5" stroke="#fff" strokeWidth="1.5" fill="none" />
        <circle cx="16.5" cy="7.5" r="1" fill="#fff" />
      </svg>
    );
  }
  if (platform === 'youtube') {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#9B83FC" />
        <path d="M10 15.5v-7l5.5 3.5-5.5 3.5z" fill="#fff" />
      </svg>
    );
  }
  return null;
}

export function LandingTestimonials(): React.JSX.Element {
  const row1 = TESTIMONIALS.slice(0, 3);
  const row2 = TESTIMONIALS.slice(3, 6);

  return (
    <section className={`${styles.section} ${styles.testimonialSection}`}>
      <div className={styles.container}>
        <h2 className={styles.individualsTitle}>
          What People Are <span className={styles.gradientText}>Saying</span>
        </h2>
      </div>

      {/* Row 1 */}
      <div className={styles.testimonialRowWrap}>
        <div className={styles.testimonialScrollRow}>
          <div className={styles.testimonialScrollInner}>
            {row1.map((item, i) => (
              <div key={`r1-${i}`} className={styles.testimonialCard2}>
                <div className={styles.tc2Header}>
                  <PlatformIcon platform={item.platform} />
                  <span className={styles.tc2Date}>{item.timeAgo}</span>
                </div>
                <p className={styles.tc2Text}>{item.text}</p>
                <div className={styles.tc2Footer}>
                  <div className={styles.tc2Avatar}>
                    {item.author.charAt(0)}
                  </div>
                  <div className={styles.tc2AuthorInfo}>
                    <span className={styles.tc2Name}>{item.author}</span>
                    <span className={styles.tc2Role}>{item.role}</span>
                  </div>
                  <div className={styles.tc2Rating}>
                    <span className={styles.tc2Star}>&#9733;</span> 4.9
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Row 2 — shifted right */}
      <div className={styles.testimonialRowWrap}>
        <div className={styles.testimonialScrollRow}>
          <div className={`${styles.testimonialScrollInner} ${styles.testimonialScrollInnerShift}`}>
            {row2.map((item, i) => (
              <div key={`r2-${i}`} className={styles.testimonialCard2}>
                <div className={styles.tc2Header}>
                  <PlatformIcon platform={item.platform} />
                  <span className={styles.tc2Date}>{item.timeAgo}</span>
                </div>
                <p className={styles.tc2Text}>{item.text}</p>
                <div className={styles.tc2Footer}>
                  <div className={styles.tc2Avatar}>
                    {item.author.charAt(0)}
                  </div>
                  <div className={styles.tc2AuthorInfo}>
                    <span className={styles.tc2Name}>{item.author}</span>
                    <span className={styles.tc2Role}>{item.role}</span>
                  </div>
                  <div className={styles.tc2Rating}>
                    <span className={styles.tc2Star}>&#9733;</span> 4.9
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
