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
        <div className="flex items-center justify-center gap-x-60">
          <div className="text-xl text-[#141414] max-w-[35rem] leading-[40px]">
            {description}
          </div>
          {icon}
        </div>
      )}

      {iconLeft && (
        <div className="flex items-center justify-center gap-x-60">
          {icon}
          <div className="text-xl text-[#141414] max-w-[35rem] leading-[40px]">
            {description}
          </div>
        </div>
      )}
    </div>
  );
};

export default Interchange;
