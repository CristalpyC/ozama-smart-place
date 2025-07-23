import React from "react";
import arielPic from "../../imgs/ariel-pic.jpg";
import cristalPic from "../../imgs/cristal-pic.jpg";
import adalbertPic from "../../imgs/adalberto-pic.png";
import Image from "next/image";
import { Zoom } from "react-awesome-reveal";

export const TeamCards = () => {
  const members = [
    {
      name: "Cristal Tavárez",
      role: "Desarrolladora de Software",
      pic: cristalPic,
    },
    {
      name: "Adalberto Banks",
      role: "Desarrollador de Software",
      pic: adalbertPic,
    },
    {
      name: "Ariel Custodio",
      role: "Desarrollador de Software",
      pic: arielPic,
    },
  ];
  return (
    <Zoom>
      <div className="p-15 flex flex-col lg:flex-row justify-center items-center gap-5">
        {members &&
          members.map((items, index) => (
            <div
              key={index}
              className="w-full max-w-sm bg-[#E0F7DB] rounded-lg shadow-[#5DCC6F] shadow-sm dark:bg-gray-800 dark:border-gray-700"
            >
              <div className="flex flex-col items-center pb-10">
                <Image
                  className="mb-3 mt-3 rounded-full shadow-lg"
                  src={items.pic}
                  alt={items.name}
                  width={64}
                  height={34}
                />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  {items.name}
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {items.role}
                </span>
              </div>
            </div>
          ))}
      </div>
    </Zoom>
  );
};
