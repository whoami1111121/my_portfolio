import { Aave } from "iconsax-reactjs";
import SmallCard from "./SmallCard";

const MySkill = () => {
  return (
    <div className="container_my mainTopBottomPadding" id="services">
      <div className="bg-[#06131bbd] px-4 sm:px-6 lg:px-8 py-16 rounded-4xl relative overflow-hidden">
        <div className="">
          <div className="flex gap-8 md:items-center md:flex-row flex-col  ">
            <div className="flex-1 flex flex-col gap-2">
              <h1 className="topSubHeading">My Skill</h1>
              <h1 className="heading mb-4">
                My Experts Areas Where I Gained Skill
              </h1>
              <h3 className="contextText">
                Business consulting consultants provide expert advice and guida busi nesses to help them improve their performance, efficiency, and organ izational Business consulting consultants provide.
              </h3>
            </div>
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:gap-12 items-center">
                <SmallCard
                  title="No hover bg"
                  content="Business consulting consultants provide expert advice."
                  icon={<Aave size="32" />}
                  icontype="image"
                />
                <SmallCard
                  title="No hover bg"
                  content="Business consulting consultants provide expert advice."
                  icon={<Aave size="32" />}
                  icontype="image"
                />
                <SmallCard
                  title="No hover bg"
                  content="Business consulting consultants provide expert advice."
                  icon={<Aave size="32" />}
                  icontype="image"
                />
                <SmallCard
                  title="No hover bg"
                  content="Business consulting consultants provide expert advice."
                  icon={<Aave size="32" />}
                  icontype="image"
                />
              </div>
            </div>

          </div>

        </div>
        <div
          className="
      pointer-events-none
      absolute -top-50 -left-50 not-even:
      w-[30%] aspect-square
      rounded-full 
      blur-3xl
      transition-all duration-500
      opacity-100
      bg-[#6afafa42]
      z-1
    "
        />
      </div>
    </div>
  );
};

export default MySkill;
