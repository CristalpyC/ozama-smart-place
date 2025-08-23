import { GreenTopWave } from "../../../components/wave/GreenTopWave";
import "./hero-style.css";
import mockup from "../../../imgs/osp-mockup-hero.png";
import Image from "next/image";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <div className="hero-container font-nunito" id="home">
      <GreenTopWave />
      <div className="flex items-center text-center lg:text-left flex-col lg:flex-row px-10 md:px-52">
        <div>
          <p className="text-green-700 inline py-1 font-medium text-xl rounded-lg">
            Ozama Smart Place
          </p>
          <h1 className="text-green-950 text-3xl md:text-4xl lg:text-5xl/15 font-bold animate__animated animate__fadeIn mt-5">
            Donde la tecnología transforma tu ciudad
          </h1>

          <p className="my-5 text-center lg:text-left lg:w-[70%] text-xl/8 animate__animated animate__fadeIn">
            Vive una experiencia{" "}
            <span className="text-green-600">
              urbana más conectada, eficiente y segura
            </span>
            . La plataforma que conecta tecnología, servicios y comunidad para
            crear una ciudad más inteligente, eficiente y segura
          </p>

          <Link
            href="#more"
            className="my-5 bg-white border-2 border-green-800 px-5 py-1 text-green-800 font-medium rounded-md hover:bg-green-50 animate__animated animate__fadeIn"
          >
            Conocer Más
          </Link>
          <Link
            href="#trailer"
            className="my-5 mx-5 border-2 border-green-700 bg-green-700 px-5 py-1 text-white rounded-md font-medium hover:bg-green-800 animate__animated animate__fadeIn"
          >
            Ver Trailer
          </Link>
        </div>

        <div className="w-[100vw] md:w-[100%] lg:w-[100%] animate__animated animate__pulse animate__repeat-2 mt-10 lg:mt-0">
          <Image src={mockup} alt="osp-mockup" width={582} height={492} />
        </div>
      </div>
    </div>
  );
};
