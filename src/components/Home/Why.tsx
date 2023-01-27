import Image from "next/image";
import InterchangeLayout from "./InterchangeLayout";

const Why = () => {
  return (
    <div className="pt-[4rem] font-poppins">
      <h3 className="font-sora text-[3.6rem] text-[#332DCC] mb-[3rem]">
        Why use formful?
      </h3>
      <InterchangeLayout
        description="Create incentives, distribute rewards and integrate payment collection into a single form"
        iconRight
        icon={
          <div>
            <Image src="/images/eth.png" alt="eth" width={264} height={264} />
          </div>
        }
      />

      <InterchangeLayout
        description="Use wallet contents to gate access and dynamically change forms based on your audience"
        iconLeft
        icon={
          <div>
            <Image
              src="/images/Wallet.png"
              alt="wallet"
              width={253}
              height={225}
            />
          </div>
        }
      />

      <InterchangeLayout
        description="Ensure the community takes all the forms available to them with the single form explorer"
        iconRight
        icon={
          <div>
            <Image
              src="/images/document.png"
              alt="explore"
              width={220}
              height={187}
            />
          </div>
        }
      />
    </div>
  );
};

export default Why;
