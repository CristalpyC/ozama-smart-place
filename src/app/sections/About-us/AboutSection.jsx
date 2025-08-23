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
          <div className="mt-8 text-xl font-semibold text-center lg:w-[70%] lg:text-justify">
            <p className="mb-5">
              En Ozama Smart Place somos un equipo de tres desarrolladores
              comprometidos con el bienestar y el desarrollo sostenible de
              nuestra ciudad. Más allá del rol técnico, compartimos una visión
              común: utilizar el poder de la tecnología para crear soluciones
              reales que impacten positivamente en la vida diaria de los
              ciudadanos.
            </p>

            <p className="mb-5">
              Este proyecto surge de la inquietud por mejorar la forma en que
              interactuamos con nuestro entorno urbano. Observamos que muchas
              ciudades, incluyendo la nuestra, enfrentan desafíos relacionados
              con la movilidad, el acceso a servicios públicos, la seguridad, el
              medioambiente y la participación ciudadana. Frente a esto,
              decidimos actuar.
            </p>

            <p className="mb-5">
              Ozama Smart Place es una iniciativa que busca centralizar
              información clave, optimizar procesos urbanos y promover una
              cultura de ciudad más conectada, inclusiva y eficiente. Creemos en
              una transformación que no solo modernice la infraestructura, sino
              que también empodere a las personas a tomar decisiones informadas
              y a participar activamente en su comunidad.
            </p>

            <p>
              A través de Ozama Smart Place, aspiramos a sentar las bases de una
              ciudad más inteligente, donde la tecnología no sea un lujo, sino
              una herramienta al servicio del bien común.
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
