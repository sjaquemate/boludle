import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="cómo jugar" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        tenés 6 intentos para adivinar la palabra del día. después de cada intento, el color de
        las teclas se modificará para mostrarte qué tan cerca estás de acertar.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="C" status="correct"/>
        <Cell value="H" />
        <Cell value="E" />
        <Cell value="T" />
        <Cell value="O" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        la palabra contiene la letra C y está en el lugar correcto.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="G" />
        <Cell value="A" />
        <Cell value="R" status="present" />
        <Cell value="C" />
        <Cell value="A" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        la palabra contiene la letra R pero está en el lugar incorrecto.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="B" />
        <Cell value="I" status="absent" />
        <Cell value="R" />
        <Cell value="R" />
        <Cell value="A" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        la palabra no contiene la letra I.
      </p>

      <p className="mt-6 text-sm text-gray-500 dark:text-gray-300">
        en boludle, la 
        palabra del día es una relacionada con Argentina. puede ser del lunfardo, 
        de uso popular en distintas generaciones y lugares del país, e incluso ser
        una cosa o figura icónica! 
      </p>
      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        este es un juego argentino basado en el código open-source de Wordle -{' '}
        <a
          href="https://github.com/sjaquemate/boludle"
          className="underline font-bold"
        >
          mira el código argentino acá
        </a>{' '}
        -{' '}
        <a
          href="https://github.com/cwackerfuss/react-wordle"
          className="underline font-bold"
        >
          y el código original acá
        </a>{' '}
      </p>
    </BaseModal>
  )
}
