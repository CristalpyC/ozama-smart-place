"use client";
import { useState } from "react";
import Image from "next/image";
import adminImg from "@/imgs/admin.png";
import intrantImg from "@/imgs/admin-mockup-02.png";
import mopcImg from "@/imgs/admin-mockup-05.png";
import adnImg from "@/imgs/admin-mockup-06.png";

const institutions = [
  { name: "CAASD", image: adminImg },
  { name: "INTRANT", image: intrantImg },
  { name: "MOPC", image: mopcImg },
  { name: "ADN", image: adnImg },
];

export const InstitutionsGallery = () => {
  const [selected, setSelected] = useState(institutions[0]);

  return (
    <div className="w-full py-10 mb-28">
      <h2 className="text-4xl font-bold mb-6 text-center">
        Un espacio para cada institución{" "}
      </h2>
      <p className="text-center mb-10">Todo lo que se necesita para mantener tu ciudad bajo control.</p>

      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        {institutions.map((inst) => (
          <button
            key={inst.name}
            onClick={() => setSelected(inst)}
            className={`px-4 py-2 rounded-full font-medium transition cursor-pointer ${
              selected.name === inst.name
                ? "bg-green-600 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-green-500 hover:text-white"
            }`}
          >
            {inst.name}
          </button>
        ))}
      </div>

      <div className="flex justify-center w-auto">
        <Image
          src={selected.image}
          alt={selected.name}
          className="w-full max-w-xl rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};
