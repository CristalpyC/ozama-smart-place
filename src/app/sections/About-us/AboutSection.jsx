"use client";
import Image from "next/image";
import usPic from "../../../imgs/us-pic.png";
import { Zoom, Fade } from "react-awesome-reveal";
import { TeamCards } from "../../../components/us-cards/TeamCards";

export const AboutSection = () => {
  return (
    <div id="about">
      <svg
        width="100%"
        height="100%"
        id="svg"
        viewBox="0 0 1440 390"
        xmlns="http://www.w3.org/2000/svg"
        className="transition duration-300 ease-in-out delay-150"
      >
        <path
          d="M 0,400 L 0,100 C 66.83597201767306,87.39856406480118 133.67194403534612,74.79712812960236 191,80 C 248.32805596465388,85.20287187039764 296.14819587628864,108.21005154639174 348,112 C 399.85180412371136,115.78994845360826 455.73527245949936,100.36266568483063 515,110 C 574.2647275405006,119.63733431516937 636.9107142857143,154.33928571428572 696,141 C 755.0892857142857,127.66071428571429 810.6218703976436,66.28019145802651 877,55 C 943.3781296023564,43.7198085419735 1020.6018041237114,82.53994845360825 1080,106 C 1139.3981958762886,129.46005154639175 1180.970913107511,137.5600147275405 1238,134 C 1295.029086892489,130.4399852724595 1367.5145434462445,115.21999263622975 1440,100 L 1440,400 L 0,400 Z"
          stroke="none"
          strokeWidth="0"
          fill="#e0f7db"
          fillOpacity="0.53"
          className="transition-all duration-300 ease-in-out delay-150 path-0"
          transform="rotate(-180 720 200)"
        ></path>
        <path
          d="M 0,400 L 0,233 C 59.057437407952875,236.98030191458025 118.11487481590575,240.9606038291605 180,256 C 241.88512518409425,271.0393961708395 306.59793814432993,297.1378865979381 366,282 C 425.40206185567007,266.8621134020619 479.49337260677464,210.48784977908687 546,212 C 612.5066273932254,213.51215022091313 691.4285714285713,272.91071428571433 749,274 C 806.5714285714287,275.08928571428567 842.7923416789397,217.86929307805596 885,202 C 927.2076583210603,186.13070692194404 975.4020618556701,211.61211340206188 1048,217 C 1120.5979381443299,222.38788659793812 1217.59941089838,207.6822533136966 1287,207 C 1356.40058910162,206.3177466863034 1398.20029455081,219.6588733431517 1440,233 L 1440,400 L 0,400 Z"
          stroke="none"
          strokeWidth="0"
          fill="#e0f7db"
          fillOpacity="1"
          className="transition-all duration-300 ease-in-out delay-150 path-1"
          transform="rotate(-180 720 200)"
        ></path>
      </svg>

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
