const fetch = require('sync-fetch')

type Definition = {
  word: string
  definition: string
  example: string
}

function fetchDefinitions(): Definition[] {
  fetch("https://api.countapi.xyz/hit/boludle.com/visits")
  const response = fetch("https://opensheet.elk.sh/1rJ_XbZFEH0_YCy2SuwCfZqlVcIjxWXZYgv6z8UNU0Gc/boludle+solutions+6letras", {})
  .json()
  .map( (row: any): Definition => { 
    return {word: row['word'], 
            definition: row['definition'], 
            example: row['example'] }
  })
  return response 
}

const DEFINITIONS = fetchDefinitions()

let WORDS: string[] = []

DEFINITIONS.forEach(function (item, index) {
  WORDS.push(item.word)
})

export { WORDS, DEFINITIONS }
