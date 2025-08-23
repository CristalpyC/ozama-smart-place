"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { SectionTag } from "@/components/SectionTag";
import reportsMockup from "../../imgs/reports-mockup.png";
import congestedMockup from "../../imgs/congested-mockup.png";
import routeMockup from "../../imgs/mockup-pic-01.png";
import payMockup from "../../imgs/pay-mockup.png";
import LiveRoutesMockup from "../../imgs/routes-mockup-02.png";
import adminMockup from "../../imgs/admin-mockup.png";
import { Slide } from "react-awesome-reveal";

export const SolutionContainer = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/dashboard");
  };

  const items = [
    {
      title: "Elige tu mejor ruta",
      text: "Encuentra el camino más rápido según tu medio de transporte.",
      url: routeMockup,
    },
    // {
    //   title: "Recarga y paga en segundo",
    //   text: "Gestiona tu tarjeta de transporte de forma fácil, rápida y segura.",
    //   url: payMockup,
    // },
    // {
    //   title: "¿Tienes una queja o duda?",
    //   text: "Escríbenos y te responderemos pronto.",
    //   url: reportsMockup,
    // // },
    // {
    //   title: "Rutas en tiempo real",
    //   text: "Consulta el estado actual de cada ruta y evita retrasos.",
    //   url: LiveRoutesMockup,
    // },
    // {
    //   title: "Evita las horas pico",
    //   text: "Visualiza el flujo de pasajeros en cada estación del metro y teleférico.",
    //   url: congestedMockup,
    // },
    {
      title: "Centro de control",
      text: "Supervisión del sistema y gestión de actividades en tiempo real.",
      url: adminMockup,
    },
  ];

  return (
    <div>
      {items &&
        items.map((item, index) => (
          <div key={index} className="flex flex-col items-center mb-5">
            <SectionTag title={item.title} />

            <h3 className="text-xl md:text-3xl lg:text-4xl text-center font-semibold w-lg md:w-2xl">
              {item.text}
            </h3>

            <Slide>
              <Image src={item.url} alt="mockup" className="m-auto mt-3" />
            </Slide>
          </div>
        ))}
    </div>
  );
};
