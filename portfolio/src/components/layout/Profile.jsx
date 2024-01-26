export const Profile = () => {
  return (
    <div className="flex justify-center">
      <div className=" container py-[96px] px-[80px] max-sm:py-16 max-sm:px-4">
        <div className="flex px-[32px] max-sm:flex max-sm:flex-col max-sm:px-4">
          <div className="flex justify-center">
            <img
              className="w-[240px] h-[280px] sm:hidden"
              src="/Pic.png"
              alt=""
            />
          </div>
          <div className="w-[60%] max-sm:w-[100%] pr-12 max-sm:pr-0">
            <div className="pb-[48px] ">
              <h1 className="text-6xl font-bold pb-2 max-sm:text-4xl">
                Hi, I’m Sagar 👋
              </h1>
              <p className="text-[16px]  flex-wrap text-gray-600 dark:text-[#D1D5DB]">
                I'm a full stack developer (React.js & Node.js) with a focus on
                creating (and occasionally designing) exceptional digital
                experiences that are fast, accessible, visually appealing, and
                responsive. Even though I have been creating web applications
                for over 7 years, I still love it as if it was something new.
              </p>
            </div>
            <div className="pb-[48px] ">
              <div className="flex items-center gap-[8px]">
                <img src="/loc2.svg " alt="" />
                <h3 className="text-gray-600 dark:text-[#D1D5DB]">
                  Ahmedabad, India
                </h3>
              </div>
              <div className="flex items-center gap-[8px]">
                <div className="flex justify-center items-center w-[24px] h-[24px]">
                  <div className="  w-[8px] h-[8px] bg-green-600 rounded-[50%]"></div>
                </div>
                <h3 className="text-gray-600 dark:text-[#D1D5DB]">
                  Available for new projects
                </h3>
              </div>
            </div>
            <div className=" flex ">
              <div className="flex justify-center items-center w-[36px] h-[36px]">
                <img src="/muur.svg" alt="" />
              </div>
              <div className="flex justify-center items-center w-[36px] h-[36px]">
                <img src="/x.svg" alt="" />
              </div>
              <div className="flex justify-center items-center w-[36px] h-[36px]">
                <img src="/figma.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="w-[40%] flex justify-end ">
            <img className=" max-sm:hidden" src="/Pic.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
