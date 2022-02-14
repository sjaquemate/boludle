import fetch from 'node-fetch'
import { parse } from 'papaparse'

// export const getClient = async () => {
//
//   return await HttpService.getValueFromSettings('durl').then((response) => {
//     if(isValidResponse(response)) {
//         endpoint = response.data;
//         export const client = createClient(response.data);
//         //This is where getting error that we can not export in side the function
//       }
//     }
//   })
// }

const file =
  'https://github.com/codeforamerica/ohana-api/raw/master/data/sample-csv/phones.csv'

export async function getWords() {
  const data = await fetch(file)
    .then((response) => response.text())
    .then((v) => parse(v, { header: true, skipEmptyLines: true }))
    .then((v) => v.data)
    .catch((err) => console.log(err))

  return data
}
//
// export getWords()

// export default await WORDS;

// fetch('https://pokeapi.co/api/v2/pokemon/ditto')
//     .then(jsonData => jsonData.json())
//     .then(data => printIt(data))
//
//
// let printIt = (data) => {
//     console.log(data)
// }

// var obj;
//
// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then(res => res.json())
//   .then(data => obj = data)
//   .then(() => console.log(obj))
//
// console.log(obj)

// let output = []
// let file = 'https://github.com/sjaquemate/boludle/blob/main/package.json'
// const response = await fetch(file).then(response => response.text()).catch(err => console.log(err))
// response.then(v => output.push(v))
//
// console.log(output)
// import * as fs from "fs";
// import { parse } from 'csv-parse';
// //
// // var myParser = parse({delimiter: ','}, function(data, err) {
// //   console.log(data);
// // });
// //
// // let output = fs.createReadStream('test.csv').pipe(myParser)
// //
// // console.log(myParser)
// // console.log(output)
//
//
// // type WorldCity = {
// //   name: string;
// //   country: string;
// //   subCountry: string;
// // };
//
// // let myAdd: (x: number, y: number) => number = function (
// //   x: number,
// //   y: number
// // ): number {
// //   return x + y;
// // };
//
//
//
// let getStuff = function (): WorldCity[] {
//
//   const csvFilePath = 'test.csv'
//   const headers = ['name', 'country', 'subCountry']
//   const fileContent = fs.readFileSync(csvFilePath, { encoding: 'utf-8' })
//
//   let final: any
//
//   let parser = parse(fileContent, {
//     delimiter: ',',
//     columns: headers,
//   }, (error, result: WorldCity[]) => {
//     if (error) {
//       console.error(error);
//     }
//     console.log(result)
//     final = result
//     console.log(final)
//   })
//   console.log(parser)
//   return null
// }
//
// getStuff()
//
