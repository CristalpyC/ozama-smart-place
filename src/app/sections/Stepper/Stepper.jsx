import { GreenTopWave } from "../../../components/wave/GreenTopWave";
import Image from "next/image";
import React from "react";
import lightPic from "../../../imgs/light-icon.jpg";

export const Stepper = () => {
    const svg = <svg
              className="w-3.5 h-3.5 text-green-500 dark:text-green-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 12"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5.917 5.724 10.5 15 1.5"
              />
            </svg>

  return (
    <>
    <GreenTopWave />
    <div id="questions" className="p-15 flex flex-col-reverse md:flex-row lg:flex-row items-center justify-center"> 
      <Image src={lightPic} alt="light" />       
      <div className="md:w-[70%] lg:w-[50%]">
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-center text-green-600 font-bold mb-5">
              ¿Tienes dudas? Aquí respondemos
            </h2>
        <ol className="mb-5 relative text-gray-500 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400">
        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
            {svg}
          </span>
          <h3 className="font-medium leading-tight">¿Cómo planifico una ruta?</h3>
          <p className="text-sm">Selecciona tu punto de origen y destino en la app, elige el medio de transporte y la ruta sugerida. La app te mostrará las opciones más rápidas o económicas, junto con el tiempo estimado y el costo del viaje.</p>
        </li>

        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
            {svg}
          </span>
          <h3 className="font-medium leading-tight">¿Qué hago si no tengo saldo?</h3>
          <p className="text-sm">En la vista de ruta planificada, si tu saldo es insuficiente, presiona el botón "Recargar" y sigue los pasos para cargar tu tarjeta digital utilizando métodos como tarjeta de débito, crédito, o NFC.</p>
        </li>

        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
            {svg}
          </span>
          <h3 className="font-medium leading-tight">¿Cómo reporto un problema?</h3>
          <p className="text-sm">Ve a la opción "Reportar problema" desde el menú principal. Selecciona el tipo de incidente (Bache, Apagón o Basura), proporciona ubicación y detalles, y adjunta una foto si es posible.</p>
        </li>

        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
            {svg}
          </span>
          <h3 className="font-medium leading-tight">¿Dónde puedo ver mis reportes?</h3>
          <p className="text-sm">En la pantalla principal, toca "Mis reportes" para visualizar todos tus reportes realizados, su estado (pendiente, en proceso o resuelto) y su historial.</p>
        </li>

        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
            {svg}
          </span>
          <h3 className="font-medium leading-tight">¿Qué es la tarjeta digital?</h3>
          <p className="text-sm">Es una tarjeta virtual integrada en la app que te permite pagar tus viajes en el Metro, OMSA y otros medios de transporte. Puedes recargarla directamente desde la app.</p>
        </li>

        <li className="ms-6">
          <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
            {svg}
          </span>
          <h3 className="font-medium leading-tight">¿Qué hago si la app no encuentra mi ubicación?</h3>
          <p className="text-sm">Asegúrate de que los permisos de ubicación estén activados en la configuración de tu celular. También puedes ingresar la dirección manualmente.</p>
        </li>
        </ol>
      </div>
    </div>
    </>
  );
};
