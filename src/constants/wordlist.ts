import { GIF_URL } from './settings'

type Definition = {
  word: string
  definition: string
  example: string
  gifUrl?: string
}

const DEFINITIONS: Definition[] = [
  {
    word: 'cacha',
    definition: 'del verbo "cachar", sinónimo de entender.',
    example: 'cachás lo que te estoy diciendo, Juli?',
  },
  {
    word: 'afano',
    definition: 'sinónimo de robo.',
    example:
      'che Anita, cómo les fue en el partido?" "perdimos... pero fue alto afano, el árbitro estaba re comprado',
  },
  {
    word: 'torra',
    definition: 'del verbo "torrar", sinónimo de dormir.',
    example:
      'Che, alguien vio al gato?" "ni idea, seguro está torrando en el cuarto de Trini',
  },
]

let WORDS: string[] = []

DEFINITIONS.forEach(function (item, index) {
  WORDS.push(item.word)
  DEFINITIONS[index].gifUrl = GIF_URL(item.word)
})

export { WORDS, DEFINITIONS }
