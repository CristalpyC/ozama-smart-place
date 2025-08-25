import React from "react";
import arielPic from "../../imgs/ariel-pic.jpg";
import cristalPic from "../../imgs/cristal-pic.jpg";
import adalbertPic from "../../imgs/adalberto-pic.png";
import Image from "next/image";
import { Zoom } from "react-awesome-reveal";
import Link from "next/link";
import { MdEmail, MdPhone } from "react-icons/md";

export const TeamCards = () => {
  const members = [
    {
      name: "Cristal Tavárez",
      role: "Desarrolladora de Software",
      email: "cristaltn03@gmail.com",
      number: "829-386-5447",
      cvRoute:"https://drive.google.com/file/d/1NuX7fBLQiXqhrlNAYoZCD7N1mT8KpSby/view?usp=sharing",
      pic: cristalPic,
    },
    {
      name: "Adalberto Banks",
      role: "Desarrollador de Software",
      email: "adalbertobanks.dev@gmail.com",
      number: "829-781-1167",
      cvRoute:"https://drive.google.com/file/d/1rsi4tk4qHesYbh9sq8BlZ9KnWnys5cNq/view?usp=sharing",
      pic: adalbertPic,
    },
    {
      name: "Ariel Custodio",
      role: "Desarrollador de Software",
      email: "rafaelarielcg.dev@gmail.com",
      number: "829-410-0341",
      cvRoute:"https://drive.google.com/file/d/1HKvaGonEP0b-dtuLReE_03RREUKHcnIU/view?usp=sharing",
      pic: arielPic,
    },
  ];
  return (
    <Zoom>
      <div className="p-15 flex flex-col lg:flex-row justify-center items-center gap-8">
        {members &&
          members.map((items, index) => (
            <div
              key={index}
              className="w-full max-w-xs min-h-[410px] bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-green-100 flex flex-col items-center px-6 py-8 transition-transform hover:scale-105"
              style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
            >
              <div className="flex flex-col items-center w-full flex-1">
                <Image
                  className="rounded-full border-4 border-green-200 shadow-md mb-4"
                  src={items.pic}
                  alt={items.name}
                  width={100}
                  height={100}
                  style={{ objectFit: 'cover' }}
                />
                <h5 className="text-2xl font-bold text-gray-900 dark:text-white mb-1 text-center">
                  {items.name}
                </h5>
                <span className="text-green-700 font-medium text-base mb-2 text-center">
                  {items.role}
                </span>
                <div className="flex flex-col gap-1 w-full mt-2 mb-4">
                  <span className="flex items-center gap-2 text-gray-600 dark:text-gray-300 text-sm">
                    <MdEmail className="text-green-600" />
                    <span className="truncate">{items.email}</span>
                  </span>
                  <span className="flex items-center gap-2 text-gray-600 dark:text-gray-300 text-sm">
                    <MdPhone className="text-green-600" />
                    <span>{items.number}</span>
                  </span>
                </div>
              </div>
              <Link
                href={items.cvRoute}
                target="_blank"
                className="mt-2 w-full text-center border-2 border-green-700 bg-green-700 px-5 py-2 text-white rounded-md font-semibold hover:bg-green-800 transition-colors"
                style={{ marginTop: 'auto' }}
              >
                Ver CV
              </Link>
            </div>
          ))}
      </div>
    </Zoom>
  );
};
