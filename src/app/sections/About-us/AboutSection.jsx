"use client";
import Image from "next/image";
import usPic from "../../../imgs/us-pic.png";
import { Zoom, Fade } from "react-awesome-reveal";
import { TeamCards } from "../../../components/us-cards/TeamCards";

export const AboutSection = () => {
  return (
    <div id="about" className="mb-20">
      <div className="p-15">
        <h2 className="text-2xl text-center font-semibold">Sobre nosotros</h2>
        <h3 className="text-5xl text-center italic text-green-600 mt-3 mb-5 font-bold">
        <Zoom>C.A.R TEAM</Zoom>
        </h3>
          
        <div className="flex flex-col justify-items-center lg:flex-row lg:justify-evenly">
          <div className="mt-8 text-lg text-gray-700 text-center lg:w-[70%] lg:text-justify space-y-7">
            <p className="bg-white/80 rounded-xl shadow-sm px-5 py-4 leading-relaxed border-l-4 border-green-400">
              <span className="font-semibold text-green-700">Ozama Smart Place</span> es un equipo de tres desarrolladores comprometidos con el bienestar y el desarrollo sostenible de nuestra ciudad. Más allá del rol técnico, compartimos una visión común: <span className="text-green-700 font-medium">utilizar la tecnología para crear soluciones reales</span> que impacten positivamente en la vida diaria de los ciudadanos.
            </p>
            <p className="bg-white/80 rounded-xl shadow-sm px-5 py-4 leading-relaxed border-l-4 border-green-400">
              Este proyecto surge de la inquietud por mejorar la forma en que interactuamos con nuestro entorno urbano. Muchas ciudades, incluyendo la nuestra, enfrentan desafíos en movilidad, acceso a servicios públicos, seguridad, medioambiente y participación ciudadana. <span className="font-semibold text-green-700">Frente a esto, decidimos actuar.</span>
            </p>
            <p className="bg-white/80 rounded-xl shadow-sm px-5 py-4 leading-relaxed border-l-4 border-green-400">
              <span className="font-semibold text-green-700">Ozama Smart Place</span> busca centralizar información clave, optimizar procesos urbanos y promover una cultura de ciudad más conectada, inclusiva y eficiente. Creemos en una transformación que no solo modernice la infraestructura, sino que también <span className="font-medium text-green-700">empodere a las personas</span> a tomar decisiones informadas y a participar activamente en su comunidad.
            </p>
            <p className="bg-white/80 rounded-xl shadow-sm px-5 py-4 leading-relaxed border-l-4 border-green-400">
              Aspiramos a sentar las bases de una ciudad más inteligente, donde la tecnología no sea un lujo, sino una herramienta al servicio del bien común.
            </p>
          </div>

          {/* US PIC */}
          <Fade><Image src={usPic} alt="us-pic" className="ml-5"/></Fade>
        </div>
      </div>
      <TeamCards />
    </div>
  );
};
