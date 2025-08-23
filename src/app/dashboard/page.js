import { NavBar } from '@/components/navbar/NavBar'
import { SectionTag } from '@/components/SectionTag'
import { Footer } from '@/components/footer/Footer.jsx'
import { UpButton } from '@/components/upButton/UpButton'
import Image from 'next/image'
import admMockup from '@/imgs/admin-mockup-06.png'
import { InstitutionsGallery } from "@/components/InstitutionsGallery";

import Link from 'next/link'

export default function Dashboard () {
  return (
    <div className='font-sans '>
      <main className='text-gray-700'>
        <NavBar />
        <UpButton />
        <div className='flex flex-col items-center my-10 px-5 h-dvh'>
          <SectionTag title='Para instituciones' />
          <h1 className='text-3xl md:text-4xl  font-semibold text-center'>
            Gestiona tu ciudad con un solo panel
          </h1>
          <p className='text-lg md:text-xl my-3 mx-5 md:mx-0 text-center'>
            Supervisa rutas, reportes y servicios urbanos en tiempo real desde
            una plataforma segura y centralizada.
          </p>

          <div className='flex flex-row gap-x-5 mt-5 mb-10'>
            <a
              href='https://www.figma.com/proto/7oWuX4G8TFo2EcpCKv616m/OSP-Administrativo?page-id=0%3A1&node-id=43-2932&p=f&viewport=223%2C590%2C0.18&t=dy1rDwW1mrBbbMki-1&scaling=contain&content-scaling=responsive&starting-point-node-id=43%3A2932&hide-ui=1'
              className='bg-green-700 px-5 py-1 text-white rounded-md font-medium hover:bg-green-800'
            >
              Ver Demo
            </a>
            <Link
              href='#institutions'
              className='bg-white border-2 border-green-800 px-5 py-1 text-green-800 font-medium rounded-md hover:bg-green-50'
            >
              Conocer Más
            </Link>
          </div>

          <Image
            src={admMockup}
            alt='adm mockup'
            width={600}
            height={300}
            className='animate__animated animate__pulse animate__repeat-2 my-5 rounded-lg'
          />
        </div>

        <InstitutionsGallery/>
        <Footer />
      </main>
    </div>
  )
}
