import { NavBar } from '@/components/navbar/NavBar'
import { SectionTag } from '@/components/SectionTag'
import { Footer } from '@/components/footer/Footer.jsx'
import { UpButton } from '@/components/upButton/UpButton'
import Image from 'next/image'
import reportMockup from '@/imgs/reports-mockup.png'
import congestedMockup from '@/imgs/congested-mockup.png'
import loginMockup from '@/imgs/login-mockup.png'
import helpMockup from '@/imgs/help-mockup.png'
import { DirectionsTransitRounded, ScheduleRounded, ReportProblemRounded, CreditCardRounded, AppsRounded } from '@mui/icons-material'
import Link from 'next/link'

export default function Mobile () {
  return (
    <div className="font-sans">
      <main className="text-gray-700">
        <NavBar />
        <UpButton />

        {/* HERO */}
        <div className="flex flex-col items-center my-10 px-6 max-w-5xl mx-auto text-center">
          <SectionTag title="Para ciudadanos" />
          <h1 className="text-3xl md:text-4xl font-semibold">
            Tu ciudad en la palma de tu mano
          </h1>
          <p className="text-lg md:text-xl my-4 max-w-2xl">
            Gestiona rutas, recargas y reportes, y vive una experiencia urbana
            más conectada, eficiente y segura.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-5 mb-10">
            <a
              href="https://www.figma.com/proto/kV4m56YdAbaV6s1jjFLouQ/OSP-Mobile?page-id=0%3A1&node-id=3-4292&p=f&viewport=-3014%2C180%2C0.7&t=I0aKMIIHgubRgmB9-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=3%3A14&show-proto-sidebar=1"
              className="bg-green-700 px-6 py-2 text-white rounded-md font-medium hover:bg-green-800 text-center"
            >
              Ver Demo
            </a>
            <Link
              href="#citizens"
              className="bg-white border-2 border-green-800 px-6 py-2 text-green-800 font-medium rounded-md hover:bg-green-50 text-center"
            >
              Conocer Más
            </Link>
          </div>

          <Image
            src={reportMockup}
            alt="report mockup"
            width={600}
            height={300}
            className="w-full max-w-xl h-auto animate__animated animate__pulse animate__repeat-2 my-5"
          />
        </div>

        {/* FEATURES */}
        <div className="flex flex-col items-center px-6 max-w-6xl mx-auto" id="citizens">
          <h2 className="text-2xl md:text-3xl font-medium text-center max-w-2xl">
            Ozama Smart Place te conecta con tu ciudad de manera rápida y sencilla
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mt-10 mb-8 w-full">
            <div className="border border-gray-200 rounded-lg p-5">
              <DirectionsTransitRounded style={{ color: 'green', fontSize: 28 }} />
              <p className="mt-3">
                Calcula la mejor ruta combinando Metro, OMSA, corredores y
                caminata, optimizando tu tiempo.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <ReportProblemRounded style={{ color: 'green', fontSize: 28 }} />
              <p className="mt-3">
                Reporta fallas, apagones o basura con fotos y ubicación, y sigue
                el progreso de cada incidencia.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <ScheduleRounded style={{ color: 'green', fontSize: 28 }} />
              <p className="mt-3">
                Consulta en tiempo real la congestión del Metro, llegada de OMSA y
                estado de rutas para planificar tu día sin sorpresas.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12 w-full">
            <div className="border border-gray-200 rounded-lg p-5">
              <CreditCardRounded style={{ color: 'green', fontSize: 28 }} />
              <p className="mt-3">
                Gestiona tu tarjeta digital de transporte de forma segura y sin
                filas, desde cualquier lugar.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <AppsRounded style={{ color: 'green', fontSize: 28 }} />
              <p className="mt-3">
                Accede a servicios públicos y funcionalidades esenciales de la
                ciudad desde una sola app intuitiva y amigable.
              </p>
            </div>
          </div>
        </div>

        {/* SECTIONS */}
        <div className="flex flex-col md:flex-row gap-6 items-center justify-center max-w-6xl mx-auto px-6 my-12">
          <Image
            src={loginMockup}
            alt="login mockup"
            className="w-full max-w-md md:max-w-lg h-auto animate__animated animate__pulse animate__repeat-2"
          />
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h3 className="font-medium text-2xl mb-2">
              Accede en segundos, con total seguridad
            </h3>
            <p>
              Regístrate fácilmente y entra a tu cuenta para gestionar rutas,
              recargas y reportes de manera segura.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse gap-6 items-center justify-center max-w-6xl mx-auto px-6 my-12">
          <Image
            src={reportMockup}
            alt="report mockup"
            className="w-full max-w-md md:max-w-lg h-auto animate__animated animate__pulse animate__repeat-2"
          />
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h3 className="font-medium text-2xl mb-2">
              Reporta incidencias en segundos
            </h3>
            <p>
              Envía fallas, apagones o basura con fotos y ubicación, y sigue su
              progreso en tiempo real.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 items-center justify-center max-w-6xl mx-auto px-6 my-12 mb-24">
          <Image
            src={helpMockup}
            alt="help mockup"
            className="w-full max-w-md md:max-w-lg h-auto animate__animated animate__pulse animate__repeat-2"
          />
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h3 className="font-medium text-2xl mb-2">
              Obtén ayuda al instante
            </h3>
            <p>
              Envía tus dudas o problemas y recibe asistencia rápida y confiable
              directamente desde la app.
            </p>
          </div>
        </div>

        <Footer />
      </main>
    </div>
  )
}