import { WORDS, DEFINITIONS } from '../constants/wordlist'
import { VALID_GUESSES } from '../constants/validGuesses'
import { getGuessStatuses } from './statuses'
import {
  GUESS_MUST_CONTAIN_MESSAGE,
  MUST_USE_LETTER_IN_POSITION_MESSAGE,
} from '../constants/strings'

export const isWordInWordList = (word: string) => {
  return (
    WORDS.includes(word.toLowerCase()) ||
    VALID_GUESSES.includes(word.toLowerCase())
  )
}

export const isWinningWord = (word: string) => {
  return solution === word
}

// build a set of previously revealed letters - present and correct
// guess must use correct letters in that space and any other revealed letters
export const findFirstUnusedReveal = (word: string, guesses: string[]) => {
  const knownLetterSet = new Set<string>()
  for (const guess of guesses) {
    const statuses = getGuessStatuses(guess)

    for (let i = 0; i < guess.length; i++) {
      if (statuses[i] === 'correct' || statuses[i] === 'present') {
        knownLetterSet.add(guess[i])
      }
      if (statuses[i] === 'correct' && word[i] !== guess[i]) {
        return MUST_USE_LETTER_IN_POSITION_MESSAGE(guess[i], i + 1)
      }
    }
  }

  for (const letter of Array.from(knownLetterSet.values())) {
    // fail fast, always return first failed letter if applicable
    if (!word.includes(letter)) {
      return GUESS_MUST_CONTAIN_MESSAGE(letter)
    }
  }
  return false
}

export const getWordOfDay = () => {
  const epochMs = new Date('February 14, 2022 00:00:00').valueOf()
  const now = Date.now()
  const msInDay = 86400000
  const index = Math.floor((now - epochMs) / msInDay)
  const nextday = (index + 1) * msInDay + epochMs
  const solution = WORDS[index % WORDS.length].toUpperCase()
  const definition = DEFINITIONS[index % DEFINITIONS.length]

  return {
    solution: solution,
    definition: definition,
    solutionIndex: index,
    tomorrow: nextday,
  }
}

export const { solution, definition, solutionIndex, tomorrow } = getWordOfDay()
