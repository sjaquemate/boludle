type Definition = {
  word: string
  definition: string
  example: string
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
    word: 'morfi',
    definition: 'sinónimo de comida.',
    example:
      'Eu, ya está listo el morfi?" "Falta un toque todavía Stephie, vení a ayudar',
  },
  {
    word: 'pucho',
    definition: 'sinónimo de cigarrillo.',
    example: 'Alguien me invita a un puchito?" "Na bueno, te re confiaste Euge',
  },
  {
    word: 'bardo',
    definition: 'sinónimo de lío, quilombo.',
    example:
      'Eu Lucas no sabés, solo una persona aprobó el parcial" "Uf, se le va a armar alto bardo al profesor',
  },
  {
    word: 'crack',
    definition: 'dícese de alguien que es muy bueno para algo.',
    example:
      'Boludle, viste cómo toca la guitarra Guille?" "Siii, tremendo, es un crack',
  },
  {
    word: 'mufar',
    definition: 'causar mala suerte.',
    example:
      'El clima va a estar súper lindo en la costa la semana que viene!" "Noo Ceci que la vas a mufar, tocate la teta izquierda',
  },
  {
    word: 'ñaupa',
    definition: 'sinónimo de antiguo.',
    example:
      'Che abu, me re gustan tus zapatos, están re a la moda" "No me digas... Si son del año del ñaupa!',
  },
]

let WORDS: string[] = []

DEFINITIONS.forEach(function (item, index) {
  WORDS.push(item.word)
})

export { WORDS, DEFINITIONS }
