import Image from "next/image";
import Button from "./Button";

type SmallCardProps = {
  title?: string;
  hoverBg?: boolean;
  img: string
};
const ProjectCard = ({
  img,
  title = "",
  hoverBg = false,
}: SmallCardProps) => {
  return (
    <div className="group relative   rounded-xl p-.5">
      {/*  */}
      <div
        className="
          absolute inset-0 rounded-xl opacity-0
          transition-opacity duration-500
          group-hover:opacity-100
          bg-[linear-gradient(135deg,#13fdfd_0%,#06131b_45%,#06131b_55%,#13fdfd_100%)]
        "
      />

      {/* <div className="relative z-10 h-full w-full rounded-[10px] bg-cardbg  overflow-hidden"> */}
      <div className="relative z-10 h-full w-full rounded-[10px] bg-cardbg overflow-hidden">
        <div className="    ">
          <div className={`flex flex-wrap gap-4 items-center mb-4`}>
            <div
            >
              <Image src={img} width={1000} height={1000} alt="img" />
            </div>

          </div>
          <div className="contextText text-left px-4 sm:px-6 lg:px-8 py-2 sm:py-4 lg:py-6 font-semibold text-white">
            {title}
            <div className="my-4">
              <Button text="Get Started" link="/contact" />
            </div>
          </div>
        </div>

        {hoverBg && (
          <div
            className="
      pointer-events-none
      absolute bottom-0 right-0 translate-x-1/2
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

export default ProjectCard;
