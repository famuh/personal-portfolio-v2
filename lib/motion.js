// JS mirror of the motion tokens in app/globals.css (--ease-out-expo,
// --dur-*). Framer-motion needs numbers/arrays rather than CSS strings, so
// keep these two files in sync when tuning motion.

export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1];
export const EASE_IN_OUT = [0.65, 0, 0.35, 1];

// seconds
export const DUR = {
  fast: 0.16,
  base: 0.32,
  slow: 0.64,
  reveal: 0.8,
};

export const STAGGER = 0.08;

// Shared "rise into place" used by <Reveal> and section intros.
export const riseIn = {
  hidden: { opacity: 0, y: 16 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: DUR.reveal, ease: EASE_OUT_EXPO, delay: i * STAGGER },
  }),
};

// Line-mask reveal: the inner span slides up from under an overflow-hidden
// wrapper. Used by the hero headline.
export const maskUp = {
  hidden: { y: "110%" },
  visible: (i = 0) => ({
    y: "0%",
    transition: { duration: 1, ease: EASE_OUT_EXPO, delay: 0.1 + i * 0.09 },
  }),
};

export const viewportOnce = { once: true, amount: 0.3 };
