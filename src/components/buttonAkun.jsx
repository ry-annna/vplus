const ButtonAkun = (props) => {
  const { type } = props;
  return (
    <button className="text-white bg-[#3a336f] lg:text-sm xl:text-base py-3 px-4 rounded-md flex gap-2 hover:scale-105 duration-300 hover:text-black hover:bg-[#f1c50e]">
      {type === "DEMO" ? (
        <img
          src="/src/assets/images/456283-318fef4e.png"
          className="xl:h-6 lg:h-5"
        />
      ) : (
        <img
          src="/src/assets/images/1250758-3cbe51b5.png"
          className="xl:h-6 lg:h-5"
        />
      )}
      {type === "DEMO" ? "Akun Demo" : "Akun Real"}
    </button>
  );
};

export default ButtonAkun;
