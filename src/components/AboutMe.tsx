import { Aave } from "iconsax-reactjs";
import SmallCard from "./SmallCard";
import Button from "./Button";
import CountCard from "./CountCard";

const AboutMe = () => {
  return (
    <div className="container_my mainTopBottomPadding" id='about'>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:gap-12 items-center">
        <div className="flex-1 ">
          <div className="mb-4 sm:mb-6 lg:mb-8">
            <h1 className="topSubHeading">About Me</h1>
            <h1 className="heading">
              Boost Business Strategic Solutions with Us
            </h1>
            <h3 className="contextText">
              Business consulting consultants provide expert advice and guida
              businesses to help them improve their performance, efficiency, and
              organizational
            </h3>
          </div>
          <div className="flex gap-4 flex-wrap md:flex-nowrap">
            <SmallCard
              title="With hover bg"
              content="Business consulting consultants provide expert advice."
              hoverBg={true}
              icon={<Aave size="32" />}
              icontype="icon"
            />
            <SmallCard
              title="No hover bg"
              content="Business consulting consultants provide expert advice."
              icon={<Aave size="32" />}
              icontype="icon"
            />
          </div>
          <div className="my-4">
            <Button text="Get Started" link="/contact" />
          </div>
        </div>
        <div className="flex w-full items-center  h-full ">
          <div className="grid grid-cols-1 md:cgrid-cols-1 lg:grid-cols-2 gap-4 md:gap-8   w-full">
            <CountCard number={120} type="+" content="Our Project Complete" />
            <CountCard number={12} type="+" content="Our Project Complete" />
            <CountCard number={20} type="+" content="Our Project Complete" />
            <CountCard number={70} type="+" content="Our Project Complete" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
