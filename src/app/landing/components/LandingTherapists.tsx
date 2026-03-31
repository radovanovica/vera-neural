import React from 'react';
import Link from 'next/link';

import styles from '../landing.module.css';
import { THERAPIST_SKILLS, THERAPIST_STEPS } from '../data/therapists';

export function LandingTherapists(): React.JSX.Element {
  return (
    <section id="therapists" className={`${styles.section} ${styles.sectionAlt}`}>
      <div className={styles.containerWide}>
        <h2 className={styles.individualsTitle}>
          Your Clinical Presence,<br />
          <span className={styles.gradientText}>Between Every Session</span>
        </h2>
        <p className={styles.sectionSub}>
          VERA is the first AI a licensed therapist can actually direct.<br />
          You assign the clinical focus. VERA holds it — every day, every conversation.
        </p>

        {/* Step Cards — zigzag: even = num left / title right, odd = title left / num right */}
        <div className={styles.therapistStepList}>
          {THERAPIST_STEPS.map((item, index) => (
            <div
              key={item.step}
              className={styles.therapistStepRow}
              style={{ direction: index % 2 === 0 ? 'rtl' : 'ltr' }}
            >
              {/* Step image + label */}
              <div className={styles.therapistStepNumCard} style={{ direction: 'ltr' }}>
                <img src={item.stepImg} alt={`Step ${item.step}`} className={styles.therapistStepImg} />
                <span className={styles.therapistStepLabel}>{item.title}</span>
              </div>
              {/* Title + desc card */}
              <div className={styles.therapistStepContentCard} style={{ direction: 'ltr' }}>
                <h3 className={styles.therapistStepTitle}>{item.title}</h3>
                <p className={styles.stepDesc}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Clinical Skills */}
        <div className={styles.container}>
        <div className={styles.skillsBox}>
          <p className={styles.skillsLabel}>Clinical Skills You Can Assign</p>
          <div className={styles.skillsGrid}>
            {THERAPIST_SKILLS.map((skill) => (
              <span key={skill} className={styles.skillPill}>{skill}</span>
            ))}
          </div>
        </div>

        <div className={styles.textCenter}>
          <div className={styles.therapistActions}>
            <Link href="/therapist/signup" className={`${styles.pillBtn} ${styles.pillBtnPrimary}`}>
              Use VERA as a Therapist
            </Link>
            <Link href="/for-practitioners" className={`${styles.pillBtn} ${styles.pillBtnOutline}`}>
              Learn More →
            </Link>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
