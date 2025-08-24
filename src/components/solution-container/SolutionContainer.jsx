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
    {
      title: "Centro de control",
      text: "Supervisión del sistema y gestión de actividades en tiempo real.",
      url: adminMockup,
    },
  ];

  return (
    <div className="space-y-12 px-4 md:px-10">
      {items &&
        items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center gap-4"
          >
            <SectionTag title={item.title} />

            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold max-w-2xl leading-snug">
              {item.text}
            </h3>

            <Slide>
              <Image
                src={item.url}
                alt="mockup"
                className="mt-3 w-full max-w-md md:max-w-2xl h-auto object-contain"
              />
            </Slide>
          </div>
        ))}
    </div>
  );
};
