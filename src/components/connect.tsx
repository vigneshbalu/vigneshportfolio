import Email from "../assets/social_icons/EMAIL.svg";

const Connect = () => {
  return (
    <div className="w-full">
      <div className="text-[#ff4b57] px-10 md:px-[10rem] font-bold text-xm mt-10">
        SOCIAL MEDIA
      </div>
      <div className="md:flex flex-row  font-normal justify-between px-10 md:px-[10rem] mt-4 gap-6">
        <div className="bg-[#2b2e41] font-normal flex flex-col justify-center items-center p-5 w-full mt-4 md:mt-0">
          <img src={Email} alt="Email" width={40} />
          <p className="text-[#f9fdff] mt-4 justify-center">
            vigneshchandru62@gmail.com
          </p>
        </div>

        <div className="bg-[#2b2e41] font-normal flex flex-col justify-center items-center p-5 w-full mt-4 md:mt-0">
          <img src={Email} alt="Email" width={40} />
          <a
            href="https://in.linkedin.com/"
            target="_blank"
            className="text-[#f9fdff] mt-4 justify-center"
          >
            My LinkedIn Profile
          </a>
        </div>

        <div className="bg-[#2b2e41] font-normal flex flex-col justify-center items-center p-5 w-full mt-4 md:mt-0">
          <img src={Email} alt="Email" width={40} />
          <a
            href="https://github.com/vigneshbalu"
            target="_blank"
            className="text-[#f9fdff] mt-4 justify-center"
          >
            MyGithub Repo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Connect;
