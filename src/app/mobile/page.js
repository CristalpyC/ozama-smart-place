import { NavBar } from '@/components/navbar/NavBar'
import { SectionTag } from '@/components/SectionTag'
import { Footer } from '@/components/footer/Footer.jsx'
import { UpButton } from '@/components/upButton/UpButton'
import Image from 'next/image'
import reportMockup from '@/imgs/reports-mockup.png'
import congestedMockup from '@/imgs/congested-mockup.png'
import loginMockup from '@/imgs/login-mockup.png'
import helpMockup from '@/imgs/help-mockup.png'
import { DirectionsTransitRounded } from '@mui/icons-material'
import { ScheduleRounded } from '@mui/icons-material'
import { ReportProblemRounded } from '@mui/icons-material'
import { CreditCardRounded } from '@mui/icons-material'
import { AppsRounded } from '@mui/icons-material'

import Link from 'next/link'

export default function Mobile () {
  return (
    <div className='font-sans '>
      <main className='text-gray-700'>
        <NavBar />
        <UpButton />
        <div className='flex flex-col items-center my-10 h-dvh'>
          <SectionTag title='Para ciudadanos' />
          <h1 className='text-3xl md:text-4xl font-semibold'>
            Tu ciudad en la palma de tu mano
          </h1>
          <p className='text-lg md:text-xl my-3 mx-5 md:mx-0 text-center'>
            Gestiona rutas, recargas y reportes, y vive una experiencia urbana
            más conectada, eficiente y segura.
          </p>

          <div className='flex flex-row gap-x-5 mt-5 mb-10'>
            <a
              href='https://www.figma.com/proto/kV4m56YdAbaV6s1jjFLouQ/OSP-Mobile?page-id=0%3A1&node-id=3-4292&p=f&viewport=-3014%2C180%2C0.7&t=I0aKMIIHgubRgmB9-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=3%3A14&show-proto-sidebar=1'
              className='bg-green-700 px-5 py-1 text-white rounded-md font-medium hover:bg-green-800'
            >
              Ver Demo
            </a>
            <Link
              href='#citizens'
              className='bg-white border-2 border-green-800 px-5 py-1 text-green-800 font-medium rounded-md hover:bg-green-50'
            >
              Conocer Más
            </Link>
          </div>

          <Image
            src={reportMockup}
            alt='report mockup'
            width={600}
            height={300}
            className='animate__animated animate__pulse animate__repeat-2 my-5'
          />
        </div>
        <div className='flex flex-col items-center' id='citizens'>
          <h2 className='text-3xl font-medium text-shadow-2xs w-lg md:w-2xl text-center'>
            Ozama Smart Place te conecta con tu ciudad de manera rápida y
            sencilla
          </h2>

          <div className='flex flex-col md:flex-row w-lg md:w-5xl gap-x-8 gap-y-8 mt-10 mb-8'>
            <div className='border border-gray-200 rounded-lg p-5 h-44'>
              <DirectionsTransitRounded
                style={{
                  display: 'block',
                  marginBottom: '15px',
                  color: 'green'
                }}
              />
              <p>
                Calcula la mejor ruta combinando Metro, OMSA, corredores y
                caminata, optimizando tu tiempo.
              </p>
            </div>
            <div className='border border-gray-200 rounded-lg p-5 h-44'>
              <ReportProblemRounded
                style={{
                  display: 'block',
                  marginBottom: '15px',
                  color: 'green'
                }}
              />
              Reporta fallas, apagones o basura con fotos y ubicación, y sigue
              el progreso de cada incidencia.
            </div>
            <div className='border border-gray-200 rounded-lg p-5 h-44'>
              <ScheduleRounded
                style={{
                  display: 'block',
                  marginBottom: '15px',
                  color: 'green'
                }}
              />
              Consulta en tiempo real la congestión del Metro, llegada de OMSA y
              estado de rutas para planificar tu día sin sorpresas.
            </div>
          </div>

          <div className='flex flex-col md:flex-row w-lg md:w-5xl gap-x-8 gap-y-8 mb-12'>
            <div className='border border-gray-200 rounded-lg p-5 h-44'>
              <CreditCardRounded
                style={{
                  display: 'block',
                  marginBottom: '15px',
                  color: 'green'
                }}
              />
              Gestiona tu tarjeta digital de transporte de forma segura y sin
              filas, desde cualquier lugar.
            </div>
            <div className='border border-gray-200 rounded-lg p-5 h-44'>
              <AppsRounded
                style={{
                  display: 'block',
                  marginBottom: '15px',
                  color: 'green'
                }}
              />
              Accede a servicios públicos y funcionalidades esenciales de la
              ciudad desde una sola app intuitiva y amigable.
            </div>
          </div>
          {/* 
          <div className='grid grid-cols-5 grid-rows-5 gap-4 mx-16 justify-center'>
            <div className='bg-green-100 border border-gray-100 rounded-lg p-5'>
              <DirectionsTransitRounded />
              Calcula la mejor ruta combinando Metro, OMSA, corredores y
              caminata, optimizando tu tiempo.
            </div>
            <div className='text-center'>
              <ReportProblemRounded />
              Reporta fallas, apagones o basura con fotos y ubicación, y sigue
              el progreso de cada incidencia.
            </div>
            <div className='text-center'>
              <ScheduleRounded />
              Consulta en tiempo real la congestión del Metro, llegada de OMSA y
              estado de rutas para planificar tu día sin sorpresas.
            </div>
            <div className='row-start-2 text-center'>
              <CreditCardRounded />
              Gestiona tu tarjeta digital de transporte de forma segura y sin
              filas, desde cualquier lugar.
            </div>
            <div className='col-span-2 row-start-2 bg-green-300 text-center'>
              <AppsRounded />
              Accede a servicios públicos y funcionalidades esenciales de la
              ciudad desde una sola app intuitiva y amigable.
            </div>
          </div> */}
        </div>
        <div className='flex flex-col md:flex-row gap-6 md:gap-x-10 items-center justify-center max-w-6xl mx-auto px-4 my-10'>
          <Image
            src={loginMockup}
            alt='login mockup'
            width={600}
            height={300}
            className='animate__animated animate__pulse animate__repeat-2 my-5'
          />
          <div className='w-full md:w-1/2 text-center md:text-left'>
            <h3 className='font-medium text-2xl mb-2'>
              Accede en segundos, con total seguridad
            </h3>
            <p>
              Regístrate fácilmente y entra a tu cuenta para gestionar rutas,
              recargas y reportes de manera segura.
            </p>
          </div>
        </div>

        <div className='flex flex-col md:flex-row-reverse gap-6 md:gap-x-10 items-center justify-center max-w-6xl mx-auto px-4 my-10'>
          <Image
            src={reportMockup}
            alt='report mockup'
            width={600}
            height={300}
            className='animate__animated animate__pulse animate__repeat-2 my-5'
          />
          <div className='w-full md:w-1/2 text-center md:text-left'>
            <h3 className='font-medium text-2xl mb-2'>
              Reporta incidencias en segundos
            </h3>
            <p>
              Envía fallas, apagones o basura con fotos y ubicación, y sigue su
              progreso en tiempo real.
            </p>
          </div>
        </div>

        <div className='flex flex-col md:flex-row gap-6 md:gap-x-10 items-center justify-center max-w-6xl mx-auto px-4 my-10 mb-24'>
          <Image
            src={helpMockup}
            alt='help mockup'
            width={600}
            height={300}
            className='animate__animated animate__pulse animate__repeat-2 my-5'
          />
          <div className='w-full md:w-1/2 text-center md:text-left'>
            <h3 className='font-medium text-2xl mb-2'>
              Obtén ayuda al instante
            </h3>
            <p>
              Envía tus dudas o problemas y recibe asistencia rápida y confiable
              directamente desde la app.
            </p>
          </div>
        </div>

        <div></div>
        <Footer />
      </main>
    </div>
  )
}
