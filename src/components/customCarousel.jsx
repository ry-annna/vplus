import { useEffect, useState } from "react";
import { MainContentLists } from "../utils/listsGroup";
// import miniaccount from "/src/assets/images/miniaccount.jpg";
// import TradingdiVplus from "/src/assets/images/TradingdiVplus.jpg";
// import kenalan_trading from "/src/assets/images/kenalan trading.jpeg";

const CustomCarousel = () => {
  // const MainContentLists = [
  //   {
  //     src: "/src/assets/images/miniaccount.jpg",
  //     headline: "Reward Logam Mulia",
  //     desc: "Dapatkan Reward Logam Mulia seberat 5 Gram dengan bergabung menjadi nasabah Vplus dan bertransaksi sebanyak-banyaknya.",
  //   },
  //   {
  //     src: TradingdiVplus,
  //     headline: "title 2",
  //     desc: "contoh teks deskripsi 2",
  //   },
  //   {
  //     src: { kenalan_trading },
  //     headline: "TRADING ITU APA SIH?",
  //     desc: "Dilansir dari Investopedia, trading umumnya sebuah konsep ekonomi dasar berupa kegiatan jual beli barang maupun jasa. Benefit yang diterima dari aktivitas trading diperoleh melalui kompensasi yang dibayarkan pembeli pada penjual, atau barang maupun jasa yang dipertukarkan antara dua pihak.",
  //   },
  //   {
  //     src: { TradingdiVplus },
  //     headline: "title 4",
  //     desc: "contoh teks deskripsi 4",
  //   },
  // ];

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
            <img src="/src/assets/images/chevron-left.svg" alt="" />
          </button>
          <button
            onClick={next}
            className="p-2 bg-black rounded-full opacity-50 hover:opacity-100"
          >
            <img src="/src/assets/images/chevron-right.svg" alt="" />
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
