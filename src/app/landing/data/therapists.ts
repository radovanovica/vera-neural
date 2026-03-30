import type { StepItem } from '../types';

export const THERAPIST_STEPS: StepItem[] = [
  {
    step: '01',
    title: 'You assign a Skill',
    desc:
      'From your dashboard, select a clinical framework for your patient -- CBT, Behavioral Activation, Exposure Planning, Emotional Reframing, or Relationship Patterns.',
  },
  {
    step: '02',
    title: 'VERA aligns instantly',
    desc:
      "Your patient opens VERA and it already knows what you're working on together. The conversation, prompts, and tone all reflect your clinical direction.",
  },
  {
    step: '03',
    title: 'You see the impact',
    desc:
      'Track engagement between sessions. See what your patient is working through. Walk into every session with more context, less catch-up.',
  },
];

export const THERAPIST_SKILLS = [
  'Thought Patterns -- CBT',
  'Behavioral Activation',
  'Exposure Planning',
  'Emotional Reframing',
  'Relationship Patterns',
];
