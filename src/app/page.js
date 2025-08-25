import Image from "next/image";
import { ButtonCTA } from "@/components/ButtonCTA";
import { NavBar } from "../components/navbar/NavBar";
import { SolutionPage } from "./sections/Solution-page/SolutionPage";
import { Footer } from "../components/footer/Footer.jsx";
import { UpButton } from "../components/upButton/UpButton";
import { Stepper } from "./sections/Stepper/Stepper";
import { AboutSection } from "./sections/About-us/AboutSection";
import { HeroSection } from "./sections/Hero/HeroSection";
import { TrailerVideo } from "./sections/Trailer/TrailerVideo.jsx";
import EmojiPeopleRoundedIcon from "@mui/icons-material/EmojiPeopleRounded";
import LocationCityRoundedIcon from "@mui/icons-material/LocationCityRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import payMockupImage from "@/imgs/pay-mockup.png";
import adminImage from "@/imgs/admImg.png";

export default function Home() {
  return (
    <div className="font-sans">
      <main className="text-gray-700">
        <NavBar />
        <UpButton />
        <HeroSection />

        {/* SVG waves */}
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 390"
          xmlns="http://www.w3.org/2000/svg"
          className="transition duration-300 ease-in-out delay-150"
        >
          <path
            d="M 0,400 L 0,100 C 66.83,87 133.67,74 191,80 C 248,85 296,108 348,112 C 399,115 455,100 515,110 C 574,119 636,154 696,141 C 755,127 810,66 877,55 C 943,43 1020,82 1080,106 C 1139,129 1180,137 1238,134 C 1295,130 1367,115 1440,100 L 1440,400 L 0,400 Z"
            fill="#e0f7db"
            fillOpacity="0.53"
            transform="rotate(-180 720 200)"
          ></path>
          <path
            d="M 0,400 L 0,233 C 59,236 118,240 180,256 C 241,271 306,297 366,282 C 425,266 479,210 546,212 C 612,213 691,272 749,274 C 806,275 842,217 885,202 C 927,186 975,211 1048,217 C 1120,222 1217,207 1287,207 C 1356,206 1398,219 1440,233 L 1440,400 L 0,400 Z"
            fill="#e0f7db"
            fillOpacity="1"
            transform="rotate(-180 720 200)"
          ></path>
        </svg>

        <SolutionPage />

        {/* Bloque ciudadanos / instituciones */}
        <div
          className="flex flex-col items-center justify-center my-16 px-4 md:px-12"
          id="more"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-green-700 text-center mb-3">
            Conecta. Gestiona. Vive
          </h2>
          <h3 className="text-base md:text-xl max-w-3xl text-center leading-relaxed">
            Ozama Smart Place une la experiencia ciudadana con la eficiencia
            institucional para construir una ciudad más conectada, moderna y
            sostenible.
          </h3>

          <div className="flex flex-col md:flex-row gap-10 my-10 w-full max-w-6xl">
            {/* Card ciudadanos */}
            <div className="flex-1 border-2 border-transparent shadow-sm hover:shadow-lg hover:shadow-green-200/50 hover:border-green-800/60 rounded-xl p-7 flex flex-col transition-all duration-300 ease-in-out">
              <div className="flex flex-row items-center gap-x-3">
                <div className="bg-green-100 border border-gray-100 p-2 rounded-2xl">
                  <EmojiPeopleRoundedIcon style={{ fontSize: 30, color: "green" }} />
                </div>
                <p className="font-medium">Para ciudadanos</p>
              </div>
              <p className="text-lg md:text-2xl font-semibold my-3">
                La app que simplifica tu día a día.
              </p>
              <ul className="my-4 space-y-2 text-sm md:text-base">
                <li className="flex items-center gap-2">
                  <CheckCircleRoundedIcon style={{ fontSize: 20, color: "green" }} />
                  Planifica rutas rápidas y seguras.
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleRoundedIcon style={{ fontSize: 20, color: "green" }} />
                  Recarga y paga con tarjeta digital.
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleRoundedIcon style={{ fontSize: 20, color: "green" }} />
                  Reporta incidencias y recibe respuestas.
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleRoundedIcon style={{ fontSize: 20, color: "green" }} />
                  Notificaciones en tiempo real.
                </li>
              </ul>
              <div className="flex justify-center my-5">
                <Image
                  src={payMockupImage}
                  alt="mockup"
                  className="rounded-lg max-w-xs md:max-w-sm w-full h-auto object-contain"
                />
              </div>
              <ButtonCTA href="/mobile" text="Descubre más" />
            </div>

            {/* Card instituciones */}
            <div className="flex-1 bg-green-50/60 border-2 border-transparent shadow-sm hover:shadow-lg hover:shadow-green-200/50 hover:border-emerald-800/60 rounded-xl p-7 flex flex-col justify-between transition-all duration-300 ease-in-out" style={{ minHeight: '100%' }}>
              <div className="flex flex-row items-center gap-x-3">
                <div className="bg-green-100 border border-gray-50 p-2 rounded-2xl">
                  <LocationCityRoundedIcon style={{ fontSize: 30, color: "green" }} />
                </div>
                <p className="font-medium">Para instituciones</p>
              </div>
              <p className="text-lg md:text-2xl font-semibold my-3">
                La gestión urbana en un solo lugar.
              </p>
              <ul className="my-4 space-y-2 text-sm md:text-base">
                <li className="flex items-center gap-2">
                  <CheckCircleRoundedIcon style={{ fontSize: 20, color: "green" }} />
                  Supervisa en tiempo real el estado del sistema.
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleRoundedIcon style={{ fontSize: 20, color: "green" }} />
                  Gestiona reportes y solicitudes ciudadanas.
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleRoundedIcon style={{ fontSize: 20, color: "green" }} />
                  Envía alertas y comunica actualizaciones.
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleRoundedIcon style={{ fontSize: 20, color: "green" }} />
                  Acceso seguro y panel intuitivo.
                </li>
              </ul>
              <div className="flex justify-center my-5">
                <Image
                  src={adminImage}
                  alt="mockup"
                  className="rounded-lg max-w-xs md:max-w-sm w-full h-auto object-contain"
                />
              </div>
                <ButtonCTA href="/dashboard" text="Descubre más" className="mt-auto" />
            </div>
          </div>
        </div>

        <TrailerVideo />
        <Stepper />
        <AboutSection />
        <Footer />
      </main>
    </div>
  );
}
