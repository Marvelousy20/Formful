import { ReactElement } from "react";

interface Props {
  iconRight?: boolean;
  iconLeft?: boolean;
  icon: ReactElement;
  description: string;
}

const Interchange = ({ iconRight, icon, description, iconLeft }: Props) => {
  return (
    <div className="mb-16">
      {iconRight && (
        <div className="flex justify-between">
          <div className="text-xl text-[#666666] max-w-[35rem] leading-[40px]">
            {description}
          </div>
          {icon}
        </div>
      )}

      {iconLeft && (
        <div className="flex justify-between">
          {icon}
          <div className="text-xl text-[#666666] max-w-[35rem] leading-[40px]">
            {description}
          </div>
        </div>
      )}
    </div>
  );
};

export default Interchange;
