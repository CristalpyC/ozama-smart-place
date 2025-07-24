import { NavBar } from "@/components/navbar/NavBar";
import { GreenTopWave } from "@/components/wave/GreenTopWave";
import '../../app/sections/Hero/hero-style.css';
import adminMockup02 from '../../imgs/admin-mockup-02.png';
import adminMockup03 from '../../imgs/admin-mockup-03.png';
import adminMockup04 from '../../imgs/admin-mockup-04.png';
import adminMockup05 from '../../imgs/admin-mockup-05.png';
import adminMockup06 from '../../imgs/admin-mockup-06.png';
import Image from "next/image";

export default function DashboardPage() {
  const mockups = [adminMockup02, adminMockup03, adminMockup04, adminMockup05, adminMockup06]
  return (
    <div>
      <NavBar />
      <div className='dashboard-container'>
       <GreenTopWave />
        <h2 className="text-xl lg:text-3xl text-center text-green-600 font-bold mt-5">
            ¿Qué es el panel de administrador?
        </h2>

        <div className="p-15">
          <h3 className="text-sm md:text-md lg:text-xl text-center font-bold">
          Es una interfaz exclusiva para el equipo de gestión o administradores del sistema. Desde aquí se puede supervisar, configurar y controlar todos los elementos clave del funcionamiento de la plataforma.
          </h3>
          <br />
          <h3 className="text-sm md:text-md lg:text-xl text-center font-bold">
          Su propósito es centralizar las operaciones para garantizar que la información esté actualizada, los usuarios tengan soporte y que el sistema funcione de forma eficiente.
          </h3>
        </div>

        <div>
          {mockups && mockups.map((items, index) => (
          <Image key={index} src={items} className="m-auto" alt="mockup"/>
          ))}
        </div>
    </div>
    </div>
  )
}