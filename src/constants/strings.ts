export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!
<<<<<<< HEAD
export const GAME_SUB_TITLE = 'un juego argentino'
export const WIN_MESSAGES = ['no sos ningún boludle!']
export const GAME_COPIED_MESSAGE = 'partida de juego copiada'
export const ABOUT_GAME_MESSAGE = 'sobre este juego'
export const NOT_ENOUGH_LETTERS_MESSAGE =
  'cantidad de letras insuficiente, boludle'
export const WORD_NOT_FOUND_MESSAGE = 'la palabra no existe, boludle'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `la palabra era ${solution}, boludle`

export const GUESS_MUST_CONTAIN_MESSAGE = (letter: string) =>
  `la palabra debe contener ${letter}`
export const MUST_USE_LETTER_IN_POSITION_MESSAGE = (
  letter: string,
  pos: number
) => `debés usar ${letter} en la posición ${pos}`
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
=======

export const WIN_MESSAGES = ['Great Job!', 'Awesome', 'Well done!']
export const GAME_COPIED_MESSAGE = 'Game copied to clipboard'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'Not enough letters'
export const WORD_NOT_FOUND_MESSAGE = 'Word not found'
export const HARD_MODE_ALERT_MESSAGE =
  'Hard Mode can only be enabled at the start!'
export const HARD_MODE_DESCRIPTION =
  'Any revealed hints must be used in subsequent guesses'
export const HIGH_CONTRAST_MODE_DESCRIPTION = 'For improved color vision'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `The word was ${solution}`
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `Must use ${guess} in position ${position}`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `Guess must contain ${letter}`
export const ENTER_TEXT = 'Enter'
export const DELETE_TEXT = 'Delete'
export const STATISTICS_TITLE = 'Statistics'
export const GUESS_DISTRIBUTION_TEXT = 'Guess Distribution'
export const NEW_WORD_TEXT = 'New word in'
export const SHARE_TEXT = 'Share'
export const TOTAL_TRIES_TEXT = 'Total tries'
export const SUCCESS_RATE_TEXT = 'Success rate'
export const CURRENT_STREAK_TEXT = 'Current streak'
export const BEST_STREAK_TEXT = 'Best streak'
>>>>>>> 7d1a95b867d250bd060c4faa244b7eff9c929f10
