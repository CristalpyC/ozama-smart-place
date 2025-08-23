import Link from "next/link";

export const ButtonCTA = ({ text, href }) => {
  return (
    <Link
      href={href}
      className="group flex items-center gap-2 bg-green-600 text-white font-semibold px-5 py-3 rounded-full shadow-lg transform transition-all duration-300 hover:bg-green-700 hover:scale-105 hover:shadow-xl justify-between"
    >
      {text}
      <svg
        className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
      </svg>
    </Link>
  );
};
