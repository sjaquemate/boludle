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
  {
    word: 'forro',
    definition: 'sinónimo de profiláctico, sinónimo de mala persona.',
    example:
      'Boludle, anoche en el boliche un chabón me robó, y me sacó hasta el forro que tenía en la billetera..." "Hay que ser forro eh, posta me decís?',
  },
  {
    word: 'ladri',
    definition: 'persona que obtiene éxito sin esforzarse.',
    example:
      'Santi no hizo nada del TP y aprobó gracias a nosotras, que bronca" "Y si Lula, no se podía esperar otra cosa de ese ladri',
  },
  {
    word: 'boton',
    definition: 'sinónimo de delator, alcahuete.',
    example:
      'Trini te acabaste todas las galletitas otra vez, le voy a decir a mamá" "Nooooo Fede dale no seas botón',
  },
  {
    word: 'pando',
    definition:
      'sinónimo de playo, bajo en profunidad. (De uso popular en Mendoza.)',
    example:
      'Maaa, Sofi no me presta el flota flota!!" "Basta eh, que los hago venir a lo pando de la pile',
  },
  {
    word: 'pingo',
    definition: 'sinónimo de pene.',
    example:
      'ugh odio la música de Taylor Swift, no sé como te gusta tanto Oli" "con todo respeto Juan, chupame el pingo',
  },
  {
    word: 'bondi',
    definition: 'sinónimo de colectivo, bus.',
    example:
      'che Sebas, media pila, por dónde andás?" "sigo en la parada del bondi, te juro que ya estuve esperando como por media hora!',
  },
  {
    word: 'guita',
    definition: 'sinónimo de dinero.',
    example:
      'hola Ale, salimos mañana?" "no puedo, me gasté toda la guita del mes en el queso rallado reggianito de la serenisma',
  },
  {
    word: 'ñoqui',
    definition: 'aquel que cobra un sueldo sin trabajar',
    example:
      'che Mati ya jugaste al boludle de hoy?" "si, y en horario de trabajo. creo que me convertí en un ñoqui',
  },
  {
    word: 'upite',
    definition: 'sinónimo de cola, trasero.',
    example:
      'che alguno vio el control remoto?" "hmm ni idea" "a ver Ivo, levantá el upite',
  },
  {
    word: 'gamba',
    definition: 'sinónimo de pierna.',
    example:
      'dale Luly, que casi llegamos al lago!!" "si si pero vayamos más lento Agus, mis gambas no dan más',
  },
]

let WORDS: string[] = []

DEFINITIONS.forEach(function (item, index) {
  WORDS.push(item.word)
})

export { WORDS, DEFINITIONS }
