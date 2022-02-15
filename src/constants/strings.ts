export const GAME_TITLE = `${process.env.REACT_APP_GAME_NAME!} 🧉`
export const GAME_SUB_TITLE = 'Un juego argentino'
export const WIN_MESSAGES = ['No sos ningún boludle!']
export const GAME_COPIED_MESSAGE = 'Partida de juego copiada'
export const ABOUT_GAME_MESSAGE = 'Sobre este juego'
export const NOT_ENOUGH_LETTERS_MESSAGE =
  'Cantidad de letras insuficiente, boludle'
export const WORD_NOT_FOUND_MESSAGE = 'La palabra no existe, boludle'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `La palabra era ${solution}, boludle`

export const GUESS_MUST_CONTAIN_MESSAGE = (letter: string) =>
  `La palabra debe contener ${letter}`
export const MUST_USE_LETTER_IN_POSITION_MESSAGE = (
  letter: string,
  pos: number
) => `Debés usar ${letter} en la posición ${pos}`
export const ENTER_TEXT = 'Enviar'
export const DELETE_TEXT = 'Eliminar'
export const STATISTICS_TITLE = 'Estadísticas'
export const GUESS_DISTRIBUTION_TEXT = 'Distribución de aciertos'
export const NEW_WORD_TEXT = 'Próximo boludle en'
export const SHARE_TEXT = 'Compartir'
export const TOTAL_TRIES_TEXT = 'Total de jugadas'
export const SUCCESS_RATE_TEXT = 'Aciertos'
export const CURRENT_STREAK_TEXT = 'Racha actual'
export const BEST_STREAK_TEXT = 'Mejor racha'
