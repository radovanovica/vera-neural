type Badge = {
  name: string;
  src: string;
  alt: string;
};

const BADGES: Badge[] = [
  { name: 'NVIDIA', src: '/logos/nvidia.svg', alt: 'NVIDIA logo' },
  { name: 'OpenAI', src: '/logos/openai.svg', alt: 'OpenAI logo' },
  { name: 'Anthropic', src: '/logos/anthropic.svg', alt: 'Anthropic logo' },
  { name: 'Mistral', src: '/logos/mistral.svg', alt: 'Mistral logo' },
];

export default function TechBadges() {
  return (
    <section className="py-12 text-center" aria-label="AI infrastructure badges">
      <p className="mb-3 text-sm text-gray-400">Built with leading AI infrastructure</p>
      <p className="mb-6 text-xs uppercase tracking-[0.18em] text-gray-500">
        Built with NVIDIA accelerated computing
      </p>

      <div className="flex flex-wrap items-center justify-center gap-8">
        {BADGES.map((badge) => (
          <img
            key={badge.name}
            src={badge.src}
            alt={badge.alt}
            className="h-6 opacity-60 grayscale transition-opacity duration-200 hover:opacity-100 md:h-7"
            loading="lazy"
            decoding="async"
          />
        ))}
      </div>
    </section>
  );
}
