import { GreenTopWave } from '@/components/wave/GreenTopWave';
import './hero-style.css';
import mockup from '../../../imgs/osp-mockup-hero.png';
import Image from 'next/image';

export const HeroSection = () => {
  return (
    <div className='hero-container' id='home'>
       <GreenTopWave />
      <div className='flex items-center text-center lg:text-left flex-col lg:flex-row px-15'>
        <div >
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold animate__animated animate__fadeIn mt-5'>
            Ozama Smart Place <br />
            <span>Donde la tecnología transforma tu ciudad</span>
          </h1>

          <p className='mt-5 text-center lg:text-left lg:w-[70%] text-xl font-semibold animate__animated animate__fadeIn'>
            Vive una experiencia <span className='text-green-600'>urbana más conectada, eficiente y segura</span>. 
            Desde monitoreo en tiempo real hasta servicios inteligentes, 
            Ozama Smart Place integra soluciones digitales que mejoran tu 
            calidad de vida y fortalecen la comunidad.
          </p>

          <button type="button" 
          className="text-white bg-gradient-to-r from-green-400 via-green-500
           to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none
            focus:ring-green-300 dark:focus:ring-green-800 shadow-lg 
            shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80
             font-medium rounded-lg text-sm px-5 py-2.5 mt-5 text-center me-2 mb-2">
              Descubre más
            </button>

        </div>

        <Image src={mockup} className='w-[100vw] md:w-[100%] lg:w-[100%] animate__animated animate__pulse animate__repeat-2  mt-10 lg:mt-0' alt='osp-mockup'/>
      </div>
    </div>
  )
}
