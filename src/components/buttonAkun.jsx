import img456283_318fef4e from "/src/assets/images/456283-318fef4e.png";
import img1250758_3cbe51b5 from "/src/assets/images/1250758-3cbe51b5.png";

const ButtonAkun = (props) => {
  const { type } = props;
  return (
    <button className="text-white bg-[#3a336f] lg:text-sm xl:text-base py-3 px-4 rounded-md flex gap-2 hover:scale-105 duration-300 hover:text-black hover:bg-[#f1c50e]">
      {type === "DEMO" ? (
        <img src={img456283_318fef4e} className="xl:h-6 lg:h-5" />
      ) : (
        <img src={img1250758_3cbe51b5} className="xl:h-6 lg:h-5" />
      )}
      {type === "DEMO" ? "Akun Demo" : "Akun Real"}
    </button>
  );
};

export default ButtonAkun;
