export const iconNames = [
  "check",
  "chevron-compact-down",
  "chevron-compact-up",
  "circle",
  "exclamation-mark",
  "hexagon",
  "horizontal-dots",
  "info-small",
  "maximize",
  "minimize",
  "minus",
  "plus",
  "vertical-dots",
  "x",
] as const;
export type IconName = (typeof iconNames)[number];
