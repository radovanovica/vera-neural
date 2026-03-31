import React from 'react';
import Link from 'next/link';

import styles from '../landing.module.css';
import { PRICING_CARDS } from '../data/pricing';

export function LandingPricing(): React.JSX.Element {
  return (
    <section id="pricing" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.individualsTitle}>
          Simple, <span className={styles.gradientText}>Honest Pricing</span>
        </h2>
        <p className={styles.sectionSub}>
          No guilt trips. Cancel anytime.
        </p>

        <div className={styles.pricingGrid}>
          {PRICING_CARDS.map((card) => (
            <div
              key={card.title}
              className={`${styles.priceCard} ${card.featured ? styles.priceCardFeatured : ''}`}
            >
              {card.featured && <div className={styles.priceCardBadge}>Most Popular</div>}

              <h3 className={`${styles.priceCardTitle} ${card.featured ? styles.priceCardTitleFeatured : ''}`}>
                {card.title}
              </h3>

              <div className={styles.priceCardPriceRow}>
                <span className={`${styles.priceCardPrice} ${card.featured ? styles.priceCardPriceFeatured : ''}`}>
                  {card.price}
                </span>
                <span className={`${styles.priceCardPeriod} ${card.featured ? styles.priceCardPeriodFeatured : ''}`}>
                  {card.period}
                </span>
              </div>

              <hr className={`${styles.priceCardDivider} ${card.featured ? styles.priceCardDividerFeatured : ''}`} />

              <p className={`${styles.priceCardFeaturesLabel} ${card.featured ? styles.priceCardFeaturesLabelFeatured : ''}`}>
                Core Features:
              </p>

              <ul className={styles.priceFeatureList}>
                {card.features.map((feature) => (
                  <li key={feature} className={`${styles.priceFeature} ${card.featured ? styles.priceFeatureFeatured : ''}`}>
                    <span className={`${styles.priceFeatureCheck} ${card.featured ? styles.priceFeatureCheckFeatured : ''}`}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href={card.href}
                className={card.featured ? styles.priceCtaPremium : styles.priceCtaFree}
              >
                {card.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
