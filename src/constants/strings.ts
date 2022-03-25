export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!

export const WIN_MESSAGES = [
  'no sos ningún boludle!',
  "Gardel so' vo'? bien ahí, boludle!",
  "Messi estaría orgulloso, vamo' boludle!",
]
export const GAME_COPIED_MESSAGE = 'partida de juego copiada'
export const NOT_ENOUGH_LETTERS_MESSAGE =
  'cantidad de letras insuficiente, boludle'
export const WORD_NOT_FOUND_MESSAGE = 'la palabra no existe, boludle'
export const HARD_MODE_ALERT_MESSAGE =
  'Hard Mode can only be enabled at the start!'
export const HARD_MODE_DESCRIPTION =
  'Any revealed hints must be used in subsequent guesses'
export const HIGH_CONTRAST_MODE_DESCRIPTION = 'For improved color vision'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `la palabra era ${solution}, boludle`
export const WRONG_SPOT_MESSAGE = (letter: string, pos: number) =>
  `debés usar ${letter} en la posición ${pos}`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `la palabra debe contener ${letter}`
export const ENTER_TEXT = 'Enviar'
export const DELETE_TEXT = 'Eliminar'
export const STATISTICS_TITLE = 'estadísticas individuales'
export const GUESS_DISTRIBUTION_TEXT = 'distribución de aciertos'
export const NEW_WORD_TEXT = 'próximo boludle en'
export const SHARE_TEXT = 'compartir'
export const TOTAL_TRIES_TEXT = 'total de jugadas'
export const SUCCESS_RATE_TEXT = 'aciertos'
export const CURRENT_STREAK_TEXT = 'racha actual'
export const BEST_STREAK_TEXT = 'mejor racha'
