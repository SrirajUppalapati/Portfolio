// import data
import { projectsData } from "./data";

// import components
import WorkItems from "./WorkItems";

const Projects = () => {
  return (
    <div>
      <div className="work__container container grid">
        {projectsData.map((item) => {
          return <WorkItems item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
