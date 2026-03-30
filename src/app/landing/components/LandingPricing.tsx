import React from 'react';
import Link from 'next/link';

import styles from '../landing.module.css';
import { PRICING_CARDS } from '../data/pricing';

export function LandingPricing(): React.JSX.Element {
  return (
    <section className={`${styles.section} ${styles.sectionAlt}`}>
      <div className={styles.containerSm}>
        <p className={styles.sectionLabel}>Pricing</p>
        <h2 className={styles.sectionTitle}>Simple, honest pricing</h2>
        <p className={styles.sectionSub}>No guilt trips. No dark patterns. Cancel anytime.</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {PRICING_CARDS.map((card) => (
            <div key={card.title} className={`${styles.priceCard} ${card.featured ? styles.priceCardFeatured : ''}`}>
              {card.featured && <div className={styles.priceCardBadge}>Most Popular</div>}
              <h3
                className={styles.priceCardTitle}
                style={{ color: card.featured ? 'var(--purple)' : card.variant === 'outline' ? 'var(--green)' : '#a78bfa' }}
              >
                {card.title}
              </h3>
              <p className={styles.priceCardSubtitle}>{card.subtitle}</p>
              <p className={styles.priceCardDesc}>{card.description}</p>
              <Link
                href={card.href}
                className={`${styles.pillBtn} ${card.variant === 'primary' ? styles.pillBtnPrimary : styles.pillBtnOutline} ${styles.mt1}`}
                style={{ display: 'inline-block' }}
              >
                {card.cta}
              </Link>
            </div>
          ))}
        </div>

        <p className={styles.pricingCancel}>
          Cancel anytime. No questions. No guilt trips.
        </p>
      </div>
    </section>
  );
}
