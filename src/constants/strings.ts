export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!
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
