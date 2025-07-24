import Image from 'next/image';
import reportsMockup from '../../imgs/reports-mockup.png';
import congestedMockup from '../../imgs/congested-mockup.png';
import routeMockup from '../../imgs/mockup-pic-01.png';
import payMockup from '../../imgs/pay-mockup.png';
import LiveRoutesMockup from '../../imgs/routes-mockup-02.png';
import adminMockup from '../../imgs/admin-mockup.png';
import { Slide } from "react-awesome-reveal";

export const SolutionContainer = () => {
    const items = [
      {title: "Elige tu mejor ruta", text: "Encuentra el camino más rápido según tu medio de transporte.", url: routeMockup},
      {title: "Recarga y paga en segundo", text: "Gestiona tu tarjeta de transporte de forma fácil, rápida y segura.", url: payMockup},
      {title: "¿Tienes una queja o duda?", text: "Escríbenos y te responderemos pronto.", url: reportsMockup},
      {title: "Rutas en tiempo real", text: "Consulta el estado actual de cada ruta y evita retrasos.", url: LiveRoutesMockup},
      {title: "Evita las horas pico", text: "Visualiza el flujo de pasajeros en cada estación del metro y teleférico.", url: congestedMockup},
      {title: "Centro de control", text: "Supervisa el estado del sistema, administra el contenido y gestiona la actividad de la plataforma en tiempo real. Todo el poder de gestión en una sola interfaz.", url: adminMockup}
    ];

  return (
    <div>
        {items && items.map((item, index) => (
          <div key={index}>
            <h2 className="text-xl lg:text-2xl text-center text-green-600 font-bold">
              {item.title}
            </h2>

            <h3 className="text-2xl md:text-3xl lg:text-4xl text-center font-bold">
                {item.text}
            </h3>

            <Slide><Image src={item.url} alt='mockup' className='m-auto mt-3'/></Slide>
        </div>
        ))}
    </div>
  )
}
