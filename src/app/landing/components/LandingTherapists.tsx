import React from 'react';
import Link from 'next/link';

import styles from '../landing.module.css';
import { THERAPIST_SKILLS, THERAPIST_STEPS } from '../data/therapists';

export function LandingTherapists(): React.JSX.Element {
  return (
    <section id="therapists" className={`${styles.section} ${styles.sectionAlt}`} style={{ position: 'relative', overflow: 'hidden' }}>
      <div
        className={styles.ambient}
        style={{ width: 400, height: 400, background: 'rgba(74,222,128,0.04)', top: '10%', right: '-5%' }}
      />
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          Your Clinical Presence,<br />
          <span className={styles.gradientText}>Between Every Session</span>
        </h2>
        <p className={styles.sectionSub}>
          VERA is the first AI a licensed therapist can actually direct.<br className={styles.hideMobile} />
          You assign the clinical focus. VERA holds it — every day, every conversation.
        </p>

        {/* Step Cards — Figma shows alternating layout with step numbers */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '3rem' }}>
          {THERAPIST_STEPS.map((item, index) => (
            <div
              key={item.step}
              className={styles.card}
              style={{
                display: 'flex',
                flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
                alignItems: 'center',
                gap: '2rem',
                padding: '2rem 2.5rem',
              }}
            >
              <div style={{ flex: 1 }}>
                <div className={styles.stepNumber}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700 }}>Step</span>
                </div>
                <p className={styles.stepDesc}>{item.desc}</p>
              </div>
              <div style={{ flex: 1, textAlign: index % 2 === 0 ? 'right' : 'left' }}>
                <h3 style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: 'clamp(1.3rem, 3vw, 1.8rem)',
                  color: '#fff',
                  fontWeight: 400,
                  lineHeight: 1.3,
                }}>
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Clinical Skills */}
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
    </section>
  );
}
