import InterchangeLayout from "./InterchangeLayout";

const Why = () => {
  return (
    <div className="pt-[4rem] font-sora">
      <h3 className="font-sora text-[3.6rem] text-[#3F1651] mb-[3rem]">
        Why use formful?
      </h3>
      <InterchangeLayout
        description="Create incentives, distribute rewards and integrate payment collection into a single form"
        iconRight
        icon={<div>Coin icon</div>}
      />

      <InterchangeLayout
        description="Use wallet contents to gate access and dynamically change forms based on your audience"
        iconLeft
        icon={<div>Wallet icon</div>}
      />

      <InterchangeLayout
        description="Ensure the community takes all the forms available to them with the single form explorer"
        iconRight
        icon={<div>Explorer icon</div>}
      />
    </div>
  );
};

export default Why;
