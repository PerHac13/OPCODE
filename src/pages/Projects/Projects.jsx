import { useState, useEffect } from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import projectData from "../../assets/Projects.json";
import "./Projects.css";
import Pill from "../../components/pill/pill";
import Button from "../../components/Button/Button";
import ProjectModal from "../../components/ProjectModal/ProjectModel";

const Projects = () => {
  const [showMore, setShowMore] = useState(false);
  const [selectedPill, setSelectedPill] = useState("");
  const [selectedClub, setSelectedClub] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({});
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  useEffect(() => {
    console.log(modalData);
  }, [modalData]);

  const openModal = (projectData) => {
    setShowModal(true);
    setModalData(projectData);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const visibleItems = showMore ? projectData : projectData.slice(0, 6);
  const filteredItems = selectedClub
    ? visibleItems.filter((project) => project.club === selectedClub)
    : visibleItems;

  const handleClubFilter = (club) => {
    setSelectedPill(club === "All" ? "" : club);
    setSelectedClub(club === "All" ? "" : club);
  };

  return (
    <div className="parent-project">
      <div className="flex gap-5 mx-5 mt-10 justify-center">
        <Pill
          onClick={() => handleClubFilter("All")}
          selected={selectedPill}
          content="All"
        />
        <Pill
          onClick={() => handleClubFilter("DevC")}
          selected={selectedPill}
          content="DevC"
        />
        <Pill
          onClick={() => handleClubFilter("REC")}
          selected={selectedPill}
          content="REC"
        />
        <Pill
          onClick={() => handleClubFilter("PyC")}
          selected={selectedPill}
          content="PyC"
        />
        <Pill
          onClick={() => handleClubFilter("CySec")}
          selected={selectedPill}
          content="CySec"
        />
        <Pill
          onClick={() => handleClubFilter("AIC")}
          selected={selectedPill}
          content="AIC"
        />
      </div>

      <div className="all-project-container">
        <div className="flex flex-wrap justify-center gap-5">
          {filteredItems.map((project, idx) => (
            <>
              <div key={idx}>
                <ProjectCard
                  key={idx}
                  onClick={() => openModal(project)}
                  className="grow"
                  githubLink={project.githubLink}
                  projectLink={project.projectLink}
                  name={project.name}
                  description={project.description}
                  club={project.club}
                  maintainers={project.maintainers}
                  label={project.label}
                  techStacks={project.techStack}
                />
              </div>
            </>
          ))}
        </div>

        {!showMore && (
          <Button
            className="p-4 my-4"
            onClick={toggleShowMore}
            name="Show More"
          />
        )}

        {showModal && (
          <ProjectModal
            onClose={closeModal}
            label={modalData.label}
            githubLink={modalData.githubLink}
            projectLink={modalData.projectLink}
            name={modalData.name}
            club={modalData.club}
            description={modalData.description}
            maintainers={modalData.maintainers}
            techStacks={modalData.techStack}
          />
        )}
      </div>
    </div>
  );
};

export default Projects;
