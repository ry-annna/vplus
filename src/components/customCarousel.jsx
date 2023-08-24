import { useEffect, useState } from "react";
import { MainContentLists } from "../utils/listsGroup";
import chevron_left from "/src/assets/images/chevron-left.svg";
import chevron_right from "/src/assets/images/chevron-right.svg";

const CustomCarousel = () => {
  const [curr, setCurr] = useState(0);
  const prev = () =>
    setCurr((curr) => (curr === 0 ? MainContentLists.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === MainContentLists.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    const slideInterval = setInterval(next, 11000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div>
      <div>
        <div className="flex justify-center gap-10 mb-5">
          <button
            onClick={prev}
            className="p-2 bg-black rounded-full opacity-50 hover:opacity-100"
          >
            <img src={chevron_left} alt="" />
          </button>
          <button
            onClick={next}
            className="p-2 bg-black rounded-full opacity-50 hover:opacity-100"
          >
            <img src={chevron_right} alt="" />
          </button>
        </div>
      </div>
      <div className="flex">
        <div className="relative flex flex-col overflow-hidden ">
          <div
            className="flex xl:w-[837px] transition-transform relative duration-500 left-0"
            style={{ transform: `translateX(-${curr * 100}%)` }}
          >
            {MainContentLists.map((element) => (
              <img className=" rounded-[50px]" src={element.src} alt="" />
            ))}
          </div>
        </div>
        <div className="absolute right-0 flex flex-col overflow-hidden top-40">
          <div
            className="flex xl:w-[518px] transition-transform	duration-[800ms]"
            style={{ transform: `translateX(-${curr * 100}%)` }}
          >
            {MainContentLists.map((element) => (
              <div className="bg-white rounded-3xl p-[30px] drop-shadow-md min-w-[518px] h-fit">
                <p className="text-[#3a336f] font-bold	text-[50px] leading-tight mt-[13px] font-Montserrat">
                  {element.headline}
                </p>

                <p className="mt-[27px] font-Open_Sans">{element.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomCarousel;
