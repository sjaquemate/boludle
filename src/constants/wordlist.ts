type Definition = {
  word: string,
  definition: string
}

const definitions: Definition[] = [
  {word: 'cheto', definition: 'una cosa'},
  {word: 'diego', definition: 'Maradona'},
  {word: 'hallo', definition: 'checo is a cosa'}
]

let WORDS: string[] = []
let DEFINITIONS: string[] = []

definitions.forEach(function (item, index) {
  WORDS.push(item.word)
  DEFINITIONS.push(item.definition)
})

export { WORDS, DEFINITIONS }
