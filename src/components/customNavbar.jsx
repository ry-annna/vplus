import ButtonAkun from "../components/buttonAkun";
import MultiLevelDropdown from "./sidebar";
import { useState } from "react";
import vplus from "../assets/images/vplus.png";

const CustomNavbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border border-slate-200">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto xl:py-4 xl:px-16 lg:px-14 lg:py-2 max-sm:px-4 max-sm:py-1">
        {/* LOGO */}
        <a href="#" className="flex items-center duration-200 hover:scale-110 ">
          <img
            src="/public/vplus.png"
            className="xl:h-[70px] max-sm:h-[50px] max-sm:p-1 mr-3 min-[640px]:h-[50px]"
            alt="Vplus logo"
          />
        </a>

        {/* <div className="border-2 rounded-lg ">
          <button
            className={`p-1 duration-200 ${toggle ? "rotate-180" : ""}`}
            onClick={() => setToggle(!toggle)}
          >
            <img
              className="opacity-60"
              src="/src/assets/images/menu.svg"
              alt=""
            />
          </button>
          <div className={`${toggle ? "block" : "hidden"} absolute right-0 `}>
            <MultiLevelDropdown />
          </div>
        </div> */}

        {/* NAVBAR LIST */}
        <div className="flex items-center xl:gap-8 lg:gap-6 ">
          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-dropdown"
          >
            <ul className="flex flex-col mt-4 font-medium border border-gray-100 rounded-lg lg:text-base bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white ">
              <li className="group">
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  className="flex items-center justify-between w-full py-2 pl-3 pr-4 group-hover:scale-125 duration-300 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:group-hover:text-[#f1c50e] md:p-0 md:w-auto lg:"
                >
                  Trading{" "}
                  <svg
                    className="w-2.5 h-2.5 ml-2.5 group-hover:rotate-180 duration-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                <div
                  id="dropdownNavbar"
                  className="absolute z-10 invisible font-normal bg-white divide-y divide-gray-100 rounded-lg shadow group-hover:visible w-44 "
                >
                  <ul
                    className="py-2 text-sm font-medium text-gray-700"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 hover:text-[#f1c50e]"
                      >
                        Mulai Trading
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 hover:text-[#f1c50e]"
                      >
                        Produk Trading
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 hover:text-[#f1c50e]"
                      >
                        Platform Trading
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="group">
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  className="flex items-center justify-between w-full py-2 pl-3 pr-4 group-hover:scale-125 duration-300 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:group-hover:text-[#f1c50e] md:p-0 md:w-auto lg:"
                >
                  Market Insight{" "}
                  <svg
                    className="w-2.5 h-2.5 ml-2.5 group-hover:rotate-180 duration-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                <div
                  id="dropdownNavbar"
                  className="absolute z-10 invisible font-normal bg-white divide-y divide-gray-100 rounded-lg shadow group-hover:visible w-44 "
                >
                  <ul
                    className="py-2 text-sm font-medium text-gray-700"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 hover:text-[#f1c50e]"
                      >
                        Berita
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 hover:text-[#f1c50e]"
                      >
                        Analisa
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 hover:text-[#f1c50e]"
                      >
                        Kalender Ekonomi
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="group">
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  className="flex items-center justify-between w-full py-2 pl-3 pr-4 group-hover:scale-125 duration-300 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:group-hover:text-[#f1c50e] md:p-0 md:w-auto lg:"
                >
                  Edukasi{" "}
                  <svg
                    className="w-2.5 h-2.5 ml-2.5 group-hover:rotate-180 duration-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                <div
                  id="dropdownNavbar"
                  className="absolute z-10 invisible font-normal bg-white divide-y divide-gray-100 rounded-lg shadow group-hover:visible w-44 "
                >
                  <ul
                    className="py-2 text-sm font-medium text-gray-700"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 hover:text-[#f1c50e]"
                      >
                        Pemula
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 hover:text-[#f1c50e]"
                      >
                        Mahir
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 hover:text-[#f1c50e]"
                      >
                        Webinar Vplus
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="group">
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  className="flex items-center justify-between w-full py-2 pl-3 pr-4 group-hover:scale-125 duration-300 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:group-hover:text-[#f1c50e] md:p-0 md:w-auto lg:"
                >
                  Company{" "}
                  <svg
                    className="w-2.5 h-2.5 ml-2.5 group-hover:rotate-180 duration-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                <div
                  id="dropdownNavbar"
                  className="absolute z-10 invisible font-normal bg-white divide-y divide-gray-100 rounded-lg shadow group-hover:visible w-44 "
                >
                  <ul
                    className="py-2 text-sm font-medium text-gray-700"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 hover:text-[#f1c50e]"
                      >
                        Profil Vplus
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 hover:text-[#f1c50e]"
                      >
                        Kontak Vplus
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 hover:text-[#f1c50e]"
                      >
                        Tanya Jawab Vplus
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  className="flex items-center justify-between w-full py-2 pl-3 pr-4 hover:scale-125 duration-300 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#f1c50e] md:p-0 md:w-auto "
                >
                  VCareer
                </button>
              </li>
            </ul>
          </div>

          <div className="flex gap-2 lg:flex-col xl:flex-row">
            <ButtonAkun type="DEMO" />
            <ButtonAkun type="REAL" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default CustomNavbar;
