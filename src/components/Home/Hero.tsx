import Image from "next/image";

const Hero = () => {
  return (
    <div className="md:pt-[4rem] font-poppins">
      <div className="flex flex-col md:flex-row items-center gap-y-10 md:gap-x-20">
        <div className="max-w-[48rem]">
          <h1 className="text-[2.5rem] sm:text-[3rem] md:text-[4.5rem] text-[#332DCC] leading-[60px] md:leading-[90px]">
            Connecting <br /> on-chain{" "}
            <span className="font-extrabold">identify</span> to off-chain{" "}
            <span className="font-extrabold">ideas</span>
          </h1>

          <h4 className="text-[#141414] text-lg my-3">
            A Web3 native form builder that lets users bring their wallets with
            them
          </h4>

          <button className="text-[#332DCC] border border-[#3F1651] rounded-[10px] py-2 px-4 mt-5 font-semibold">
            Sign Up
          </button>
        </div>

        <div className="hidden md:block">
          <Image
            src="/images/hero.png"
            alt="heroimg"
            width="328"
            height="321"
          />
        </div>

        <div className="block md:hidden">
          <Image
            src="/images/hero.png"
            alt="heroimg"
            width="250"
            height="200"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
