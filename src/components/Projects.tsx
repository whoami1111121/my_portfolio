import { Aave } from "iconsax-reactjs";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="container_my mainTopBottomPadding" id="projects">
      <div className="text-center">
        {/* <div className=""> */}
        <div className="flex-1 ">
          <div className="mb-4 sm:mb-8 lg:mb-12">
            <h1 className="topSubHeading">Latest News</h1>
            <h1 className="heading max-w-[60%] mx-auto">
              Transforming Ideas into Exceptional the man can Creations
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-12 items-center">
            <ProjectCard
              img='/card.webp'
              title="How To Create Awesome Design Using Photoshop"
              hoverBg={true}
            />
            <ProjectCard
              img='/card.webp'
              title="How To Create Awesome Design Using Photoshop"
              hoverBg={true}
            />
            <ProjectCard
              img='/card.webp'
              title="How To Create Awesome Design Using Photoshop"
              hoverBg={true}
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Projects;
