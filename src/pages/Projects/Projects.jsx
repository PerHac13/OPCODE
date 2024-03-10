import ProjectCard from "../../components/ProjectCard/ProjectCard";
import projectData from "../../assets/Projects.json";
import "./Projects.css";
import { useState } from "react";
const Projects = () => {


  const [showMore, setShowMore] = useState(false);


  const toggleShowMore = () => {
    setShowMore(!showMore);
  };


   const visibleItems = showMore ? projectData : projectData.slice(0, 6);

   console.log(visibleItems);
  return (


    <>
      <div className="all-project-container">
        <div className="flex flex-wrap justify-center gap-5">
             {
              visibleItems.map((project,idx)=>(
                
                <div key={idx}>

                  <ProjectCard
                  className='grow'
                  githubLink={project.githubLink}
                  projectLink={project.projectLink}
                  name={project.name}
                  description={project.description}
                  club={project.club}
                  maintainers={project.maintainers}
                  label={project.label}
                   />

                </div>
                
              ))
             }
        </div>

        {!showMore && (
        <button  className=" border-primary text-primary rounded-lg border-2 p-4 my-4 border-radius-"onClick={toggleShowMore}>Show More</button>
      )}
      </div>
    </>
  );
};

export default Projects;
