import React from 'react';
import Link from 'next/link';

import styles from '../landing.module.css';
import { THERAPIST_SKILLS, THERAPIST_STEPS } from '../data/therapists';

export function LandingTherapists(): React.JSX.Element {
  return (
    <section id="therapists" className={styles.section} style={{ position: 'relative', overflow: 'hidden' }}>
      <div className={styles.ambient} style={{ width: 400, height: 400, background: 'rgba(74,222,128,0.06)', top: '10%', right: '-5%' }} />
      <div className={styles.container}>
        <p className={`${styles.sectionLabel} ${styles.sectionLabelGreen}`}>
          For Therapists
        </p>
        <h2 className={styles.sectionTitle}>
          Your Clinical Presence,<br />Between Every Session
        </h2>
        <p className={styles.sectionSub}>
          VERA is the first AI a licensed therapist can actually direct.<br className={styles.hideMobile} />
          You assign the clinical focus. VERA holds it -- every day, every conversation.
        </p>

        <div className={styles.therapistSteps}>
          {THERAPIST_STEPS.map((item) => (
            <div key={item.step} className={`${styles.card} ${styles.cardGreen}`}>
              <p className={styles.stepLabel}>STEP {item.step}</p>
              <h3 className={styles.stepTitle}>{item.title}</h3>
              <p className={styles.stepDesc}>{item.desc}</p>
            </div>
          ))}
        </div>

        <div className={styles.skillsBox}>
          <p className={styles.skillsLabel}>Clinical Skills You Can Assign</p>
          <div className={styles.skillsGrid}>
            {THERAPIST_SKILLS.map((skill) => (
              <span key={skill} className={styles.skillPill}>{skill}</span>
            ))}
          </div>
        </div>

        <div className={styles.textCenter}>
          <p className={styles.therapistInfo}>
            $99/month after 14-day free trial. Earn 25% on referrals.
          </p>
          <div className={styles.therapistActions}>
            <Link href="/therapist/signup" className={`${styles.pillBtn} ${styles.pillBtnGreen}`}>
              Apply Now &rarr;
            </Link>
            <Link href="/for-practitioners" className={`${styles.pillBtn} ${styles.pillBtnOutline}`}>
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
