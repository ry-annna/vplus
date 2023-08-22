import { TickerTape } from "react-ts-tradingview-widgets";
import { TickerSymbolsVplus } from "../utils/listsGroup";
import CustomNavbar from "../components/customNavbar";
import CustomCarousel from "../components/customCarousel";
import DefaultToast from "../components/toast";

function Home() {
  return (
    <div>
      <CustomNavbar />
      {/* TRADINGVIEW */}
      <div>
        <TickerTape
          colorTheme="light"
          symbols={TickerSymbolsVplus}
        ></TickerTape>
      </div>

      {/* <DefaultToast /> */}

      <section className="relative justify-between ">
        <div className="">
          <div className="relative">
            <div className="z-10 xl:h-[600px] lg:h-[534px] bg-[#3a336f] flex justify-center">
              <div className="absolute z-20 mt-5 w-[1140px] mx-auto">
                <CustomCarousel />

                <div className="relative flex flex-wrap justify-between mt-10">
                  <div className="bg-red-300 px-[20px] py-[35px] w-[276px]">
                    <div className="">
                      <img src="/src/assets/images/115968-9536d100.png" />
                    </div>
                    <h4 className="u-align-center u-text u-text-palette-4-base u-text-3">
                      Rekomendasi Broker Berlisensi
                    </h4>
                    <p className="u-align-center u-text u-text-grey-50 u-text-4">
                      Vplus membantu para trader menemukan broker yang legal dan
                      berlisensi.
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
