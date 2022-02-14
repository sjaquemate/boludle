//
// // type WordDefinition {
// //   word: string,
// //   definition: string
// // }
//
//
// // import fetch from 'node-fetch'
// // import { parse } from 'papaparse'
//
// // const file = 'https://github.com/codeforamerica/ohana-api/raw/master/data/sample-csv/phones.csv'
// //
// // export async function getWords() {
// //     const data = await fetch(file)
// //       .then(response => response.text())
// //       .then(v => parse(v, {'header': true, 'skipEmptyLines': true}))
// //       .then(v => v.data)
// //       .catch(err => console.log(err))
// //
// //     return data
// // }
//
//
//
// type Definition = {
//   word: string,
//   definition: string
// }
//
// const definitions: Definition[] = [
//   {word: 'cheto', definition: 'una cosa'},
//   {word: 'chepa', definition: 'una otra cosa'},
//   {word: 'hallo', definition: 'checo is a cosa'}
// ]
//
// let WORDS: string[] = []
// let DEFINITIONS: string[] = []
//
// definitions.forEach(function (item, index) {
//   WORDS.push(item.word)
//   DEFINITIONS.push(item.definition)
// })
//
// export { WORDS, DEFINITIONS }
