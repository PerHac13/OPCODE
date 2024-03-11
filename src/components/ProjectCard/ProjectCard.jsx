import React, { useState } from "react";
import "./ProjectCard.css";

const ProjectCard = ({
  githubLink,
  label,
  projectLink,
  name,
  description,
  club,
  maintainers,
}) => {
  const [isHoveredGithubLink, setIsHoveredGithubLink] = useState(false);
  const [isHoveredProjectLink, setIsHoveredProjectLink] = useState(false);
  // const maintainerNames = Object.values(maintainers);
  // console.log(maintainerNames[0]);

  const maintainerNames = Array.isArray(maintainers) ? maintainers : [];
  const fileColors = label==="hard"?'#D37676':label==='medium'?'#F1EF99 ':'#0D9276';
  return (
    <>
      <div className="project-card">
        <div className="upper-logos">
          <div className="file-logo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="54"
              height="54"
              fill={fileColors}
              className="bi bi-folder"
              viewBox="0 0 16 16"
            >
              <path d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a2 2 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139q.323-.119.684-.12h5.396z" />
            </svg>
          </div>


          <div className="links">
            <div>
              <a href={githubLink}>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  onMouseEnter={() => setIsHoveredGithubLink(true)}
                  onMouseLeave={() => setIsHoveredGithubLink(false)}
                >
                  <path
                    d="M12 2.3999C6.69839 2.3999 2.39999 6.6983 2.39999 11.9999C2.39999 16.4983 5.49759 20.2623 9.67359 21.3039C9.62879 21.1743 9.59999 21.0239 9.59999 20.8375V19.1967C9.21039 19.1967 8.55759 19.1967 8.39359 19.1967C7.73679 19.1967 7.15279 18.9143 6.86959 18.3895C6.55519 17.8063 6.50079 16.9143 5.72159 16.3687C5.49039 16.1871 5.66639 15.9799 5.93279 16.0079C6.42479 16.1471 6.83279 16.4847 7.21679 16.9855C7.59919 17.4871 7.77919 17.6007 8.49359 17.6007C8.83999 17.6007 9.35839 17.5807 9.84639 17.5039C10.1088 16.8375 10.5624 16.2239 11.1168 15.9343C7.91999 15.6055 6.39439 14.0151 6.39439 11.8559C6.39439 10.9263 6.79039 10.0271 7.46319 9.2695C7.24239 8.5175 6.96479 6.9839 7.54799 6.3999C8.98639 6.3999 9.85599 7.3327 10.0648 7.5847C10.7816 7.3391 11.5688 7.1999 12.396 7.1999C13.2248 7.1999 14.0152 7.3391 14.7336 7.5863C14.94 7.3359 15.8104 6.3999 17.252 6.3999C17.8376 6.9847 17.5568 8.5247 17.3336 9.2751C18.0024 10.0311 18.396 10.9279 18.396 11.8559C18.396 14.0135 16.8728 15.6031 13.6808 15.9335C14.5592 16.3919 15.2 17.6799 15.2 18.6503V20.8375C15.2 20.9207 15.1816 20.9807 15.172 21.0519C18.9128 19.7407 21.6 16.1887 21.6 11.9999C21.6 6.6983 17.3016 2.3999 12 2.3999Z"
                    fill={isHoveredGithubLink ? "#00FFD1" : "#CAD4E0"}
                  />
                </svg>
              </a>
            </div>

            <div>
              <a href={projectLink}>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  onMouseEnter={() => setIsHoveredProjectLink(true)}
                  onMouseLeave={() => setIsHoveredProjectLink(false)}
                >
                  <path
                    d="M18 10.82C17.7348 10.82 17.4804 10.9254 17.2929 11.1129C17.1054 11.3004 17 11.5548 17 11.82V19C17 19.2652 16.8946 19.5196 16.7071 19.7071C16.5196 19.8946 16.2652 20 16 20H5C4.73478 20 4.48043 19.8946 4.29289 19.7071C4.10536 19.5196 4 19.2652 4 19V8C4 7.73478 4.10536 7.48043 4.29289 7.29289C4.48043 7.10536 4.73478 7 5 7H12.18C12.4452 7 12.6996 6.89464 12.8871 6.70711C13.0746 6.51957 13.18 6.26522 13.18 6C13.18 5.73478 13.0746 5.48043 12.8871 5.29289C12.6996 5.10536 12.4452 5 12.18 5H5C4.20435 5 3.44129 5.31607 2.87868 5.87868C2.31607 6.44129 2 7.20435 2 8V19C2 19.7956 2.31607 20.5587 2.87868 21.1213C3.44129 21.6839 4.20435 22 5 22H16C16.7956 22 17.5587 21.6839 18.1213 21.1213C18.6839 20.5587 19 19.7956 19 19V11.82C19 11.5548 18.8946 11.3004 18.7071 11.1129C18.5196 10.9254 18.2652 10.82 18 10.82ZM21.92 2.62C21.8185 2.37565 21.6243 2.18147 21.38 2.08C21.2598 2.02876 21.1307 2.00158 21 2H15C14.7348 2 14.4804 2.10536 14.2929 2.29289C14.1054 2.48043 14 2.73478 14 3C14 3.26522 14.1054 3.51957 14.2929 3.70711C14.4804 3.89464 14.7348 4 15 4H18.59L8.29 14.29C8.19627 14.383 8.12188 14.4936 8.07111 14.6154C8.02034 14.7373 7.9942 14.868 7.9942 15C7.9942 15.132 8.02034 15.2627 8.07111 15.3846C8.12188 15.5064 8.19627 15.617 8.29 15.71C8.38296 15.8037 8.49356 15.8781 8.61542 15.9289C8.73728 15.9797 8.86799 16.0058 9 16.0058C9.13201 16.0058 9.26272 15.9797 9.38458 15.9289C9.50644 15.8781 9.61704 15.8037 9.71 15.71L20 5.41V9C20 9.26522 20.1054 9.51957 20.2929 9.70711C20.4804 9.89464 20.7348 10 21 10C21.2652 10 21.5196 9.89464 21.7071 9.70711C21.8946 9.51957 22 9.26522 22 9V3C21.9984 2.86932 21.9712 2.74022 21.92 2.62Z"
                    fill={isHoveredProjectLink ? "#00FFD1" : "#CAD4E0"}
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="project-name">{name}</div>

        <div className="project-description">{description}</div>

        <div className="club-info">
          <div className="powered-by">
            Powered By
            <p className="club-name"> {club} </p>
          </div>

          <div className="maintained-by">
            Maintained By:
            {/* <p className="maintainer-name">
                  {maintainerNames[0]}
              </p>
              <p className="maintainer-name">
                  {maintainerNames[1]}
              </p> */}
            {maintainerNames.slice(0, 2).map((maintainer, index) => (
              <p key={index} className="maintainer-name">
                {maintainer}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
