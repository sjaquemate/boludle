export const MAX_WORD_LENGTH = 5
export const MAX_CHALLENGES = 6
export const ALERT_TIME_MS = 2000
export const REVEAL_TIME_MS = 250
export const GAME_LOST_INFO_DELAY = (MAX_WORD_LENGTH + 1) * REVEAL_TIME_MS
export const ARGENTINA_BLUE = '#74ACDF'
export const ARGENTINA_YELLOW = '#F6B40E'
export const GIF_URL = (solution: string) =>
  `https://github.com/sjaquemate/boludle/blob/main/src/assets/${solution.toLowerCase()}.gif?raw=true`
