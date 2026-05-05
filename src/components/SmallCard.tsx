import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type SmallCardProps = {
  title?: string;
  content?: string;
  hoverBg?: boolean;
  icon?: ReactNode;
  icontype?: "image" | "icon";
  larzeIcon?: boolean
};
const SmallCard = ({
  title = "",
  content = "",
  hoverBg = false,
  icon,
  icontype,
  larzeIcon = false
}: SmallCardProps) => {
  return (
    <div className="group relative   rounded-xl p-[2px]">
      {/*  */}
      <div
        className="
          absolute inset-0 rounded-xl opacity-0
          transition-opacity duration-500
          group-hover:opacity-100
          bg-[linear-gradient(135deg,#13fdfd_0%,#06131b_45%,#06131b_55%,#13fdfd_100%)]
        "
      />

      <div className="relative z-10 h-full w-full rounded-[10px] bg-cardbg p-4 sm:p-6 lg:p-8 overflow-hidden">
        <div className="    ">
          <div className={`${larzeIcon ? 'flex flex-col gap-4  text-left mb-4' : 'flex flex-wrap gap-4 items-center mb-4'}`}>
            <div
              className={`mb-2 shadow-[0_0_8px_8px_rgba(19,253,253,0.11)] border-2 border-foreground rounded-full h-12 w-12 flex items-center justify-center
              ${icontype === "image"
                  ? "    bg-background "
                  : "  text-white  bg-foreground "
                }
                ${larzeIcon ? 'block h-18 w-18 ' : ''}  
                `}
            >
              {icon}
            </div>
            <h1 className="subHeading">{title}</h1>
          </div>
          <div className="contextText text-left">{content}</div>
        </div>
        {hoverBg && (
          <div
            className="
      pointer-events-none
      absolute bottom-0 left-1/2 -translate-x-1/2
      w-[40%] aspect-square
      rounded-full
      bg-background
      opacity-0
      blur-2xl
      transition-all duration-500
      group-hover:opacity-100
      group-hover:bg-[#13fdfd]/20
      group-hover:scale-110
      translate-y-1/2
      z-1
    "
          />
        )}
      </div>
    </div>
  );
};

export default SmallCard;
