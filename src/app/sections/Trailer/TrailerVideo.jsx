import React from "react";

export const TrailerVideo = () => {
  return (
    <div id="trailer">
      <h2 className="text-2xl md:text-3xl lg:text-4xl text-center text-green-600 font-bold mb-3 font-nunito">
        Así transformamos la ciudad
      </h2>

       <div className="flex justify-center items-center">
      <div className="w-full max-w-4xl aspect-video p-4 mb-7">
        <iframe
          className="w-full h-full rounded-2xl shadow-xl"
          src="https://www.youtube.com/embed/esrMj1W4_1w?si=KuzgBZEeZ3nUTHo_"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
    </div>
  );
};
