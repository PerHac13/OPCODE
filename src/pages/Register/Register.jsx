import Button from "../../components/Button/Button";

const Register = () => {
  return (
    <>
      <div className="text-[#CAD4E0] font-normal font-inter lg:mx-[9rem] md:pt-6 pb-5">
        <div className="flex flex-row gap-4 items-center">
          <div className="text-4xl text-[#00FFD1] py-10 px-2">
            Open Spring Fest Guidelines
          </div>
        </div>
        <ol className="list-decimal list-inside ml-8 mt-4 text-[#c2ced2] leading-8 justify-items">
          <li>
            <span className="text-[#00FFD1] capitalize relative cursor-pointer transition-all  duration-500 before:content-['']  before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5  before:rounded-full  before:opacity-0  before:transition-all  before:duration-500 before:bg-[#00FFD1] hover:before:w-full hover:before:opacity-100">
              Duration:
            </span>{" "}
            The fest will run for 30 days, from March 15th to April 15th.
          </li>
          <br />
          <li>
            <span className="text-[#00FFD1] capitalize relative cursor-pointer transition-all  duration-500 before:content-['']  before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5  before:rounded-full  before:opacity-0  before:transition-all  before:duration-500 before:bg-[#00FFD1] hover:before:w-full hover:before:opacity-100">
              Code of Conduct and Work Ethics:
            </span>
            <ul className="list-disc ml-8 mt-2">
              <li>
                Respectful and inclusive interactions are expected from all
                participants.
              </li>
              <li>
                Maintain professionalism and integrity in all contributions.
              </li>
              <li>
                Discriminatory behavior, harassment, and plagiarism will not be
                tolerated.
              </li>
            </ul>
          </li>
          <br />
          <li>
            <span className="text-[#00FFD1] capitalize relative cursor-pointer transition-all  duration-500 before:content-['']  before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5  before:rounded-full  before:opacity-0  before:transition-all  before:duration-500 before:bg-[#00FFD1] hover:before:w-full hover:before:opacity-100">
              Contribution Guidelines:
            </span>{" "}
            To contribute, follow the instructions outlined in the
            Contribution.md file within the respective project repository.
          </li>
          <br />
          <li>
            <span className="text-[#00FFD1] capitalize relative cursor-pointer transition-all  duration-500 before:content-['']  before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5  before:rounded-full  before:opacity-0  before:transition-all  before:duration-500 before:bg-[#00FFD1] hover:before:w-full hover:before:opacity-100">
              Timing for Issue and PR:
            </span>{" "}
            All issues and pull requests should be raised between 9:00 AM to
            12:00 PM.
          </li>
          <br />
          <li>
            <span className="text-[#00FFD1] capitalize relative cursor-pointer transition-all  duration-500 before:content-['']  before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5  before:rounded-full  before:opacity-0  before:transition-all  before:duration-500 before:bg-[#00FFD1] hover:before:w-full hover:before:opacity-100">
              Response Time:
            </span>{" "}
            Project maintainers or managers should respond to issues and pull
            requests within 2 hours of their creation.
          </li>
          <br />
          <li>
            <span className="text-[#00FFD1] capitalize relative cursor-pointer transition-all  duration-500 before:content-['']  before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5  before:rounded-full  before:opacity-0  before:transition-all  before:duration-500 before:bg-[#00FFD1] hover:before:w-full hover:before:opacity-100">
              Difficulty Levels and Scoring:
            </span>
            <ul className="list-disc ml-8 mt-2">
              <li>
                Each project will be divided into three difficulty levels: easy,
                medium, and hard, designated with points 1, 2, and 3
                respectively.
              </li>
              <li>
                Issues within each difficulty level will be further categorized
                as easy (1 point), medium (3 points), and hard (5 points).
              </li>
              <li>
                The score earned for each successful pull request will be
                calculated as the multiplication of the tag point and category
                point.
              </li>
              <li>
                Participants' total scores will be the sum of scores earned from
                all their pull requests.
              </li>
            </ul>
          </li>
          <br />
          <li>
            <span className="text-[#00FFD1] capitalize relative cursor-pointer transition-all  duration-500 before:content-['']  before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5  before:rounded-full  before:opacity-0  before:transition-all  before:duration-500 before:bg-[#00FFD1] hover:before:w-full hover:before:opacity-100">
              Challenge Completion:
            </span>
            <ul className="list-disc ml-8 mt-2">
              <li>
                If a participant completes only easy tag problems, their earned
                score will be adjusted according to a well-designed algorithm to
                encourage tackling more challenging tasks.
              </li>
            </ul>
          </li>
          <br />
          <li>
            <span className="text-[#00FFD1] capitalize relative cursor-pointer transition-all  duration-500 before:content-['']  before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5  before:rounded-full  before:opacity-0  before:transition-all  before:duration-500 before:bg-[#00FFD1] hover:before:w-full hover:before:opacity-100">
              Rejection of Bad PR:
            </span>{" "}
            All bad pull requests will be rejected by project maintainers.
          </li>
          <br />
          <li>
            <span className="text-[#00FFD1] capitalize relative cursor-pointer transition-all  duration-500 before:content-['']  before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5  before:rounded-full  before:opacity-0  before:transition-all  before:duration-500 before:bg-[#00FFD1] hover:before:w-full hover:before:opacity-100">
              Issue Assignment:
            </span>
            <ul className="list-disc ml-8 mt-2">
              <li>
                If an issue is assigned to a participant, they must complete it
                within the given time period as specified by the maintainer.
              </li>
              <li>
                Participants can request the maintainer or project manager to
                assign them an issue. Only then can they work on that issue.
              </li>
              <li>
                If a participant couldn't solve the issue within the given time
                period, it will be assigned to another participant for better
                practice.
              </li>
            </ul>
          </li>
          <br />
          <li>
            <span className="text-[#00FFD1] capitalize relative cursor-pointer transition-all  duration-500 before:content-['']  before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5  before:rounded-full  before:opacity-0  before:transition-all  before:duration-500 before:bg-[#00FFD1] hover:before:w-full hover:before:opacity-100">
              Leaderboard:
            </span>{" "}
            A real-time leaderboard will be maintained throughout the fest,
            displaying participants' scores.
          </li>
          <br />
          <li>
            <span className="text-[#00FFD1] capitalize relative cursor-pointer transition-all  duration-500 before:content-['']  before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5  before:rounded-full  before:opacity-0  before:transition-all  before:duration-500 before:bg-[#00FFD1] hover:before:w-full hover:before:opacity-100">
              Contact Information:
            </span>{" "}
            For any queries regarding the project, participants should reach out
            to the project manager or maintainer.
          </li>
          <br />
          <li>
            <span className="text-[#00FFD1] capitalize relative cursor-pointer transition-all  duration-500 before:content-['']  before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5  before:rounded-full  before:opacity-0  before:transition-all  before:duration-500 before:bg-[#00FFD1] hover:before:w-full hover:before:opacity-100">
              Discord Community:
            </span>{" "}
            All participants are required to join the Discord community, where
            they will receive detailed information and have dedicated channels
            for discussions.
          </li>
          <br />
        </ol>
      </div>
      <div>
        <a href="https://forms.gle/h8KgaLT3zbnQh9rX6">
          <Button className="flex justify-center pb-5" name={"Register Now"} />
        </a>
      </div>
    </>
  );
};

export default Register;
