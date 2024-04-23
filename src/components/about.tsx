import Guthub from "../assets/social_icons/icons8-github.svg";
import Azure from "../assets/social_icons/Azure-DevOps.svg";
import Functional from "../assets/social_icons/Testing-Image.svg";
import Playwright from "../assets/social_icons/logos--playwright.svg";
import Jmeter from "../assets/social_icons/download.svg";
import NodeJS from "../assets/social_icons/NodeJSLogo.svg";

const About = () => {
  return (
    <div className="text-[#f9fdff] px-[10rem] font-bold">
      About
      <p className="text-6xl text-[#ff4b57]">Skill-Set</p>
      <div className="w-[115px] h-2 rounded mt-2 bg-[#ff4b57]"></div>
      <div className="flex flex-row justify-between">
        <div className="w-[300px] h-[250px] rounded mt-2 bg-[#2b2e41] p-8 font-normal">
          <img
            src={Guthub}
            alt="GitHub"
            width={40}
            className="text-[#c6cad6]"
          />
          <div className="text-l mt-2">Git Version Control</div>
          <p className="text-sm mt-2 text-left">
            Utilized Git version control to manage and track changes, ensuring
            efficient collaboration and code versioning in my digital portfolio.
          </p>
        </div>

        <div className="w-[300px] h-[250px] rounded mt-2 bg-[#2b2e41] p-8 font-normal">
          <img src={Azure} alt="Azure" width={40} className="text-[#c6cad6]" />
          <div className="text-l mt-2">Azure DevOps</div>
          <p className="text-sm mt-2 text-left">
            Implemented Azure DevOps for CI/CD pipelines, automating build,
            test, and deployment processes in my digital portfolio.
          </p>
        </div>

        <div className="w-[300px] h-[250px] rounded mt-2 bg-[#2b2e41] p-8 font-normal">
          <img
            src={Functional}
            alt="Functional"
            width={40}
            className="text-[#c6cad6]"
          />
          <div className="text-l mt-2">Functional Testing</div>
          <p className="text-sm mt-2 text-left">
            Conducted comprehensive functional testing to validate software
            features, ensuring adherence to specifications and optimal user
            experience.
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-between mt-8">
        <div className="w-[300px] h-[250px] rounded mt-2 bg-[#2b2e41] p-8 font-normal">
          <img
            src={Playwright}
            alt="Playwright"
            width={40}
            className="text-[#c6cad6]"
          />
          <div className="text-l mt-2">Automation Testing</div>
          <p className="text-sm mt-2 text-left">
            Implemented automated testing to enhance software reliability,
            streamline testing processes, and ensure consistent quality across
            releases.
          </p>
        </div>

        <div className="w-[300px] h-[250px] rounded mt-2 bg-[#2b2e41] p-8 font-normal">
          <img
            src={Jmeter}
            alt="Jmeter"
            width={40}
            className="text-[#c6cad6]"
          />
          <div className="text-l mt-2">Performance Testing</div>
          <p className="text-sm mt-2 text-left">
            Conducted performance testing to evaluate system responsiveness,
            stability, and scalability, ensuring optimal performance under
            various load conditions.
          </p>
        </div>

        <div className="w-[300px] h-[250px] rounded mt-2 bg-[#2b2e41] p-8 font-normal">
          <img
            src={NodeJS}
            alt="NodeJS"
            width={40}
            className="text-[#c6cad6]"
          />
          <div className="text-l mt-2">Node.js</div>
          <p className="text-sm mt-2 text-left">
            Designed and implemented custom automation frameworks using Node.js,
            optimizing test execution and enhancing efficiency across projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
