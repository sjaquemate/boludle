type Definition = {
  word: string
  definition: string
  example: string
}

const definitions: Definition[] = [
  { word: 'cacha',
    definition: 'del verbo "cachar", sinónimo de entender',
    example: 'cachás lo que te estoy diciendo, Juli?'},
]

let WORDS: string[] = []
let DEFINITIONS = definitions

definitions.forEach(function (item, index) {
  WORDS.push(item.word)
})

export { WORDS, DEFINITIONS }
