import Image from 'next/image'
import { ButtonCTA } from '@/components/ButtonCTA'
import { NavBar } from '../components/navbar/NavBar'
import { SolutionPage } from './sections/Solution-page/SolutionPage'
import { Footer } from '../components/footer/Footer.jsx'
import { UpButton } from '../components/upButton/UpButton'
import { Stepper } from './sections/Stepper/Stepper'
import { AboutSection } from './sections/About-us/AboutSection'
import { HeroSection } from './sections/Hero/HeroSection'
import { TrailerVideo } from './sections/Trailer/TrailerVideo.jsx'
import EmojiPeopleRoundedIcon from '@mui/icons-material/EmojiPeopleRounded'
import LocationCityRoundedIcon from '@mui/icons-material/LocationCityRounded'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded'
import payMockupImage from '@/imgs/pay-mockup.png'
import adminImage from '@/imgs/admin.png'

export default function Home () {
  return (
    <div className='font-sans'>
      <main className='text-gray-700'>
        <NavBar />
        <UpButton />
        <HeroSection />
        <svg
          width='100%'
          height='100%'
          id='svg'
          viewBox='0 0 1440 390'
          xmlns='http://www.w3.org/2000/svg'
          className='transition duration-300 ease-in-out delay-150'
        >
          <path
            d='M 0,400 L 0,100 C 66.83597201767306,87.39856406480118 133.67194403534612,74.79712812960236 191,80 C 248.32805596465388,85.20287187039764 296.14819587628864,108.21005154639174 348,112 C 399.85180412371136,115.78994845360826 455.73527245949936,100.36266568483063 515,110 C 574.2647275405006,119.63733431516937 636.9107142857143,154.33928571428572 696,141 C 755.0892857142857,127.66071428571429 810.6218703976436,66.28019145802651 877,55 C 943.3781296023564,43.7198085419735 1020.6018041237114,82.53994845360825 1080,106 C 1139.3981958762886,129.46005154639175 1180.970913107511,137.5600147275405 1238,134 C 1295.029086892489,130.4399852724595 1367.5145434462445,115.21999263622975 1440,100 L 1440,400 L 0,400 Z'
            stroke='none'
            strokeWidth='0'
            fill='#e0f7db'
            fillOpacity='0.53'
            className='transition-all duration-300 ease-in-out delay-150 path-0'
            transform='rotate(-180 720 200)'
          ></path>
          <path
            d='M 0,400 L 0,233 C 59.057437407952875,236.98030191458025 118.11487481590575,240.9606038291605 180,256 C 241.88512518409425,271.0393961708395 306.59793814432993,297.1378865979381 366,282 C 425.40206185567007,266.8621134020619 479.49337260677464,210.48784977908687 546,212 C 612.5066273932254,213.51215022091313 691.4285714285713,272.91071428571433 749,274 C 806.5714285714287,275.08928571428567 842.7923416789397,217.86929307805596 885,202 C 927.2076583210603,186.13070692194404 975.4020618556701,211.61211340206188 1048,217 C 1120.5979381443299,222.38788659793812 1217.59941089838,207.6822533136966 1287,207 C 1356.40058910162,206.3177466863034 1398.20029455081,219.6588733431517 1440,233 L 1440,400 L 0,400 Z'
            stroke='none'
            strokeWidth='0'
            fill='#e0f7db'
            fillOpacity='1'
            className='transition-all duration-300 ease-in-out delay-150 path-1'
            transform='rotate(-180 720 200)'
          ></path>
        </svg>
        <SolutionPage />

        <div className='flex flex-col items-center justify-center my-16' id='more'>
          <h2 className='text-4xl font-semibold text-green-700 text-shadow-green-800 mb-3'>
            Conecta. Gestiona. Vive
          </h2>
          <h3 className='text-xl w-lg md:w-2xl text-center'>
            Ozama Smart Place une la experiencia ciudadana con la eficiencia
            institucional para construir una ciudad más conectada, moderna y
            sostenible.
          </h3>
          <div className='flex flex-col md:flex-row gap-8 my-10'>
            <div className='border-2 border-transparent shadow-sm 
                hover:shadow-lg hover:shadow-green-200/50 
                hover:border-green-800/60 
                rounded-lg p-7 w-md md:w-xl flex flex-col content-around 
                transition-all duration-300 ease-in-out'>
              <div className='flex flex-row items-center gap-x-3'>
                <div className='bg-green-100 border border-gray-100  p-2 rounded-2xl'>
                  <EmojiPeopleRoundedIcon
                    style={{ fontSize: 30, color: 'green' }}
                  />
                </div>
                <p className='font-medium'>Para ciudadanos</p>
              </div>
              <p className='text-2xl font-semibold my-2'>
                La app que simplifica tu día a día.
              </p>
              <ul className='my-5'>
                <li className='flex items-center gap-2 mb-1'>
                  <CheckCircleRoundedIcon
                    style={{ fontSize: 20, color: 'green' }}
                  />
                  Planifica rutas rápidas y seguras.
                </li>
                <li className='flex items-center gap-2 mb-1'>
                  <CheckCircleRoundedIcon
                    style={{ fontSize: 20, color: 'green' }}
                  />
                  Recarga y paga con tarjeta digital.
                </li>
                <li className='flex items-center gap-2 mb-1'>
                  <CheckCircleRoundedIcon
                    style={{ fontSize: 20, color: 'green' }}
                  />
                  Reporta incidencias y recibe respuestas.
                </li>
                <li className='flex items-center gap-2 mb-1'>
                  <CheckCircleRoundedIcon
                    style={{ fontSize: 20, color: 'green' }}
                  />{' '}
                  Notificaciones en tiempo real.
                </li>
              </ul>
              <div>
                <Image src={payMockupImage} alt='mockup' className='animate__animated animate__fadeIn' />
              </div>
              <ButtonCTA href='/mobile' text='Descubre más' />
            </div>
            <div className='bg-green-50/60 border-2 border-transparent shadow-sm 
                hover:shadow-lg hover:shadow-green-200/50 
                hover:border-emerald-800/60 
                rounded-lg p-7 w-md md:w-xl flex flex-col content-around 
                transition-all duration-300 ease-in-out'>
              <div>
                <div className='flex flex-row items-center gap-x-3'>
                  <div className='bg-green-100 border border-gray-50 p-2 rounded-2xl'>
                    <LocationCityRoundedIcon
                      style={{ fontSize: 30, color: 'green' }}
                    />
                  </div>
                  <p className='font-medium '>Para instituciones</p>
                </div>
                <p className='text-2xl font-semibold my-2'>
                  La gestión urbana en un solo lugar.
                </p>

                <ul>
                  <li className='flex items-center gap-2 mb-1'>
                    <CheckCircleRoundedIcon
                      style={{ fontSize: 20, color: 'green' }}
                    />
                    Supervisa en tiempo real el estado del sistema.
                  </li>
                  <li className='flex items-center gap-2 mb-1'>
                    <CheckCircleRoundedIcon
                      style={{ fontSize: 20, color: 'green' }}
                    />{' '}
                    Gestiona reportes y solicitudes ciudadanas.
                  </li>
                  <li className='flex items-center gap-2 mb-1'>
                    <CheckCircleRoundedIcon
                      style={{ fontSize: 20, color: 'green' }}
                    />{' '}
                    Envía alertas y comunica actualizaciones.
                  </li>
                  <li className='flex items-center gap-2 mb-1'>
                    <CheckCircleRoundedIcon
                      style={{ fontSize: 20, color: 'green' }}
                    />{' '}
                    Acceso seguro y panel intuitivo.
                  </li>
                </ul>

                <div className='h-100'>
                  <Image
                    src={adminImage}
                    alt='mockup'
                    className='my-15 rounded-lg border border-gray-50 animate__animated animate__fadeIn'
                  />
                </div>

                <ButtonCTA href='/dashboard' text='Descubre más' />
              </div>
            </div>
          </div>
        </div>

        <TrailerVideo />

        <Stepper />
        <AboutSection/>
        <Footer />
      </main>
    </div>
  )
}
