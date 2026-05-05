import { ArrowRight } from "iconsax-reactjs";

interface buttonType {
  text: string;
  link?: string;
}

const Button = ({ text, link = "" }: buttonType) => {
  return (
    <div className="relative overflow-hidden px-1  w-fit      h-15 flex items-center  rounded-full ">
      <div className="   z-10">
        <button
          className="
      blur-none
        group cursor-pointer 
        flex items-center gap-2
        rounded-full
        px-6 py-3 sm:px-7 sm:py-4
        text-white font-medium
        bg-background
        my-4 md:my-8

        transition-all duration-300 ease-out
        active:scale-95

        shadow-[inset_0_0_18px_rgba(180,180,180,0.35)]
        hover:shadow-[inset_0_0_12px_rgba(19,253,253,0.45)]
      "
        >
          <span
            className="
          flex items-center
          opacity-0
          w-0
          -translate-x-2
          transition-all duration-300
          group-hover:opacity-100
          group-hover:w-5
          group-hover:translate-x-0
        "
          >
            <ArrowRight size={16} />
          </span>

          <span className="text-base">{text}</span>

          <span
            className="
          flex items-center
          opacity-100
          w-5
          translate-x-0
          transition-all duration-300
          group-hover:opacity-0
          group-hover:w-0
          group-hover:translate-x-2
        "
          >
            <ArrowRight size={16} />
          </span>
        </button>
      </div>
      <span className="glow-line-360 absolute blur-3xl z-1" />
    </div>
  );
};

export default Button;
