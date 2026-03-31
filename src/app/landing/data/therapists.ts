import type { StepItem } from '../types';

export const THERAPIST_STEPS: StepItem[] = [
  {
    step: '01',
    title: 'You Assign A Skill',
    desc:
      'Select a clinical framework for your patient from the dashboard: CBT, Behavioral Activation, Exposure Planning, Emotional Reframing, or Relationship Patterns.',
  },
  {
    step: '02',
    title: 'VERA Aligns Instantly',
    desc:
      "When your patient opens VERA, it already knows what you're working on together. The conversation, prompts, and tone all reflect your clinical direction.",
  },
  {
    step: '03',
    title: 'You See The Impact',
    desc:
      'Track engagement between sessions. See what your patient is working through. Walk into every session with more context and less catch-up.',
  },
];

export const THERAPIST_SKILLS = [
  'Thought Patterns — CBT',
  'Behavioral Activation',
  'Exposure Planning',
  'Relationship Patterns',
  'Emotional Reframing',
];
