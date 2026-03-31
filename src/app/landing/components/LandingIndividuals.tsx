import React from 'react';
import Link from 'next/link';

import styles from '../landing.module.css';
import { INDIVIDUALS_CARDS } from '../data/individuals';

export function LandingIndividuals(): React.JSX.Element {
  return (
    <section id="individuals" className={styles.section} style={{ position: 'relative', overflow: 'hidden' }}>
      <div
        className={styles.ambient}
        style={{ width: 500, height: 500, background: 'rgba(139,92,246,0.06)', top: '-10%', right: '-10%' }}
      />
      <div className={styles.container}>
        <p className={styles.sectionLabel}>For Individuals</p>
        <h2 className={styles.sectionTitle}>
          VERA Knows <span className={styles.gradientText}>The Difference</span>
        </h2>
        <p className={styles.sectionSub}>
          Most apps give generic advice. VERA reads your nervous system state in real time.
          <br className={styles.hideMobile} />
          VERA already knows the difference between the dynamics of each and it doesn&apos;t
          give advice — it meets you where you are.
        </p>

        <div className={styles.cardGrid}>
          {INDIVIDUALS_CARDS.map((item) => (
            <div key={item.title} className={styles.card}>
              <div
                className={styles.cardIcon}
                style={{
                  background: `radial-gradient(circle at 35% 35%, ${item.color}99, ${item.color})`,
                  boxShadow: `0 0 16px ${item.color}44`,
                }}
              />
              <h3 className={styles.cardTitle} style={{ color: item.color }}>
                {item.title}
              </h3>
              <p className={styles.cardDesc}>{item.desc}</p>
              <p className={styles.cardResponse}>→ {item.response}</p>
            </div>
          ))}
        </div>

        {/* Feature bullets from Figma */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1rem', margin: '3rem auto 2rem', maxWidth: 800
        }}>
          {[
            'VERA recognizes early acceleration and responds before panic forms.',
            'VERA tracks your state changes at your own pace, never rushing you.',
            'VERA learns and remembers patterns and responds differently, every time.'
          ].map((text) => (
            <div key={text} style={{
              display: 'flex', gap: '8px', alignItems: 'flex-start',
              color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6
            }}>
              <span style={{ color: 'var(--green)', flexShrink: 0, marginTop: 2 }}>✓</span>
              {text}
            </div>
          ))}
        </div>

        <div className={`${styles.textCenter} ${styles.mt2}`}>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="https://apps.apple.com/us/app/veraneural/id6756195287" target="_blank" rel="noopener noreferrer">
              <img
                src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/white/en-us?size=250x83"
                alt="Download on the App Store"
                style={{ height: 38 }}
              />
            </Link>
            <Link href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                style={{ height: 38 }}
              />
            </Link>
          </div>
          <p style={{ color: 'var(--text-dim)', fontSize: '0.85rem', marginTop: '1rem' }}>
            Try VERA for free →
          </p>
        </div>
      </div>
    </section>
  );
}
