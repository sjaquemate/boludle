import { getGuessStatuses } from './statuses'
import { solutionIndex } from './words'

export const shareStatus = (
  guesses: string[],
  lost: boolean,
  isHardMode: boolean
) => {
  navigator.clipboard.writeText(
    `Boludle.com ${solutionIndex} ${lost ? 'X' : guesses.length}/6${
      isHardMode ? '*' : ''
    }\n\n` +
      generateEmojiGrid(guesses) +
      ' \n#boludle' +
      ' \n\n'
  )
}

export const generateEmojiGrid = (guesses: string[]) => {
  return guesses
    .map((guess) => {
      const status = getGuessStatuses(guess)
      return guess
        .split('')
        .map((_, i) => {
          switch (status[i]) {
            case 'correct':
              return '🟩'
            case 'present':
              return '🟨'
            default:
              if (localStorage.getItem('theme') === 'dark') {
                return '⬛'
              }
              return '⬜'
          }
        })
        .join('')
    })
    .join('\n')
}
