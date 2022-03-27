import { ChartBarIcon, InformationCircleIcon } from '@heroicons/react/outline'
import { GAME_TITLE } from '../../constants/strings'
import ImgMate from '../../assets/mate.png'

type Props = {
  setIsInfoModalOpen: (value: boolean) => void
  setIsStatsModalOpen: (value: boolean) => void
  setIsSettingsModalOpen: (value: boolean) => void
}

export const Navbar = ({ setIsInfoModalOpen, setIsStatsModalOpen }: Props) => {
  return (
    <div className="navbar">
      <div className="navbar-banner px-5 py-2 bg-slate-200">
        <p className="text-sm italic mx-5 text-center">
          <a className="underline font-bold" href="https://www.leer.org/donar">
            apoyá
          </a>{' '}
          la lectura de los boludles más pequeños
        </p>
      </div>
      <div className="navbar-content px-5">
        <InformationCircleIcon
          className="h-6 w-6 mr-2 cursor-pointer dark:stroke-white"
          onClick={() => setIsInfoModalOpen(true)}
        />

        {/* <div className="flex w-80 mx-auto items-center mb-5 mt-8">
        <h1 className="text-xl ml-2.5 font-bold dark:text-white">boludle</h1>
        <img
          className="h-6 w-6 ml-1 mr-2 cursor-pointer dark:stroke-white"
          src={ImgMate}
          alt=""
        /> */}
        <div className="flex">
          <p className="text-xl font-bold dark:text-white">{GAME_TITLE}</p>
          <img
            className="h-6 w-6 ml-1 cursor-pointer dark:stroke-white"
            src={ImgMate}
            alt=""
          />
        </div>
        <div className="right-icons">
          <ChartBarIcon
            className="h-6 w-6 mr-3 cursor-pointer dark:stroke-white"
            onClick={() => setIsStatsModalOpen(true)}
          />
          {/* <CogIcon
            className="h-6 w-6 cursor-pointer dark:stroke-white"
            onClick={() => setIsSettingsModalOpen(true)}
          /> */}
        </div>
      </div>
      <hr></hr>
    </div>
  )
}
