import Image from "next/image";

const Hero = () => {
  return (
    <div className="pt-[4rem]">
      <div className="flex items-center gap-x-20">
        <div className="max-w-[48rem]">
          <h1 className="font-sora text-[4.5rem] text-[#3F1651] leading-[90px]">
            Connecting <br /> on-chain{" "}
            <span className="font-bold">identify</span> to off-chain{" "}
            <span className="font-bold">ideas</span>
          </h1>

          <h4 className="text-[#5C5C5C] text-lg mb-3">
            A Web3 native form builder that lets users bring their wallets with
            them
          </h4>

          <button className="text-[#3F1651] border border-[#3F1651] rounded-[10px] py-2 px-4 mt-5">
            Sign Up
          </button>
        </div>

        <div>
          <Image
            src="/images/heroimg.png"
            alt="heroimg"
            width="372"
            height="261"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
