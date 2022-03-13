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
  {
    word: 'bocha',
    definition: 'sinónimo de un montón.',
    example:
      'che Tito, al final vamos a su casa a cenar hoy. qué llevamos?" "no se preocupen, ya cocinamos una bocha de empanadas. traigan helado si quieren',
  },
  {
    word: 'asado',
    definition: 'carne vacuna cocinada lentamente a las brasas.',
    example:
      'che por qué no invitaron a Martín este finde?" "es que no aplaudió a Javi por el asado que hizo el domingo, mientras todo el resto aplaudíamos. medio tensa la cosa',
  },
  {
    word: 'orsai',
    definition: 'posición adelantada, off-side.',
    example:
      'naaaa no me jodas, eso fue orsai!!" "lpm siempre robando este equipo',
  },
  {
    word: 'punga',
    definition: 'ladrón que hurta objetos de carteras o abrigos.',
    example:
      'chau Ma, me voy al centro!!" "adiós Lina! tené cuidado con los pungas, acordate de no guardar el celu en el bolsillo',
  },
  {
    word: 'ceibo',
    definition: 'árbol de la flor nacional del mejor país del mundo.',
    example:
      'hola Mónica! por casualidad viste a Wendy 🐈?" "sabés que no? seguro anda durmiendo sobre el ceibo de los vecinos!',
  },
  {
    word: 'facha',
    definition:
      'se usa para referirse a alguien bien arreglado, con buen aspecto.',
    example:
      'Pablo, te gusta como me quedo el corte?" "te quedo bárbaro, alta facha amigo! a cual peluquería fuiste?',
  },
  {
    word: 'skere',
    definition: 'dícese de algo que va a estar bueno, de "lets get it"',
    example:
      'hola Fran, salimos a comer afuera hoy no? skerry!!" "jajaja es SKERE abu, pero sí! tengo muchas ganas!',
  },
  {
    word: 'lompa',
    definition: 'sinónimo de pantalón.',
    example:
      'che Pau se nota mucho la mancha que tengo en el lompa? cometí un error al sentarme en el pasto" "noo ni se nota, no te preocupes!',
  },
  {
    word: 'truco',
    definition: 'juego de cartas popular en el mejor país.',
    example:
      'Solchi, le decimos a las chicas de ir a la plaza?" "dale, y llevemos cartas pa jugar al truco!',
  },
  {
    word: 'choto',
    definition: 'sinóninimo de algo feo, no agradable. (enviada por @camdesk)',
    example:
      'que choto que estuvo hoy el boludle!" " posta, decí que lo saqué en 5 intentos',
  },
  {
    word: 'pique',
    definition: 'dícese de un breve corrida o trote hacia algún lugar.',
    example:
      'che Maru, a que no te echás un pique al súper para comprar unos tomates?" "dale Pa, me das plata?',
  },
  {
    word: 'zapan',
    definition: 'panza.',
    example:
      'Pedro ya estamos listos, vamos?" "vayan yendo, me duele un poco la zapán, prefiero quedarme',
  },
  {
    word: 'banda',
    definition: 'mucha cantidad',
    example:
      'traje coca para el fernet!" "uuuf, pero ya tenemos una banda de coca Lean',
  },
  {
    word: 'chivo',
    definition: 'olor corporal',
    example:
      'tengo ganas de volver a clase de manera presencial!" "postaa, aunque no extraño el olor a chivo del bondi',
  },
  {
    word: 'gorra',
    definition: 'policía, vigilante (despectivo)',
    example: 'che Justi, no se puede fumar acá" "dale amiga no seas gorra!',
  },
]

let WORDS: string[] = []

DEFINITIONS.forEach(function (item, index) {
  WORDS.push(item.word)
})

export { WORDS, DEFINITIONS }