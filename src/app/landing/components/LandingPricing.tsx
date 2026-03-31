import React from 'react';
import Link from 'next/link';

import styles from '../landing.module.css';
import { PRICING_CARDS } from '../data/pricing';

export function LandingPricing(): React.JSX.Element {
  return (
    <section id="pricing" className={styles.section} style={{ position: 'relative' }}>
      <div
        className={styles.ambient}
        style={{ width: 400, height: 400, background: 'rgba(139,92,246,0.06)', top: '20%', right: '10%' }}
      />
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          Simple, <span className={styles.gradientText}>Honest Pricing</span>
        </h2>
        <p className={styles.sectionSub}>
          No guilt trips. Cancel anytime.
        </p>

        <div className={styles.pricingGrid}>
          {PRICING_CARDS.map((card) => (
            <div key={card.title} className={`${styles.priceCard} ${card.featured ? styles.priceCardFeatured : ''}`}>
              {card.featured && <div className={styles.priceCardBadge}>Most Popular</div>}

              <h3 className={styles.priceCardTitle} style={{
                color: card.featured ? 'var(--purple-light)' : '#fff'
              }}>
                {card.title}
              </h3>

              <div className={styles.priceCardPrice}>{card.price}</div>
              <div className={styles.priceCardPeriod}>{card.period}</div>

              <p style={{ color: 'var(--text-dim)', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
                {card.featured ? 'Core Features:' : 'Core Features:'}
              </p>

              <ul className={styles.priceFeatureList}>
                {card.features.map((feature) => (
                  <li key={feature} className={styles.priceFeature}>
                    <span className={styles.priceFeatureCheck}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href={card.href}
                className={`${styles.pillBtn} ${card.variant === 'primary' ? styles.pillBtnPrimary : styles.pillBtnOutline}`}
                style={{ display: 'block', textAlign: 'center', width: '100%' }}
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
