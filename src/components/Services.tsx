import { Aave } from "iconsax-reactjs";
import SmallCard from "./SmallCard";

const Services = () => {
  return (
    <div className="container_my mainTopBottomPadding">
      <div className="text-center">
        {/* <div className=""> */}
        <div className="flex-1 ">
          <div className="mb-4 sm:mb-8 lg:mb-12">
            <h1 className="topSubHeading">Hello world</h1>
            <h1 className="heading ">
              What I Provide For You
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:gap-12 items-center">
            <SmallCard
              title="UI/UX Design"
              content="Each one showcases my approach and dedication to detail, creativity Each one showcases my approach and dedication to detail, creativity."
              hoverBg={true}
              icon={<Aave size="40" />}
              icontype="icon"
              larzeIcon
            />
            <SmallCard
              title="Web Development"
              content="Business consulting consul us to a provide expert advice businesses Each one showcases my approach and dedication to detail, creativity."
              hoverBg={true}
              icon={<Aave size="40" />}
              icontype="icon"
              larzeIcon
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Services;
