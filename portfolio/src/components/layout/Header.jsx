import { useState, useEffect } from "react";
import useDownloader from "react-use-downloader";
export const Header = (props) => {
  const { size, elapsed, percentage, download, cancel, error, isInProgress } =
    useDownloader();
  const fileUrl = `/Pic.png`;
  const filename = "beautiful-carpathia.png";
  //==============
  const [showMenu, setShowMenu] = useState(false);
  const [showSideBar, setshowSideBar] = useState(false);
  const handleOpen = () => {
    setShowMenu(!showMenu);
    setTimeout(() => {
      setshowSideBar(!showSideBar);
    }, 10);
  };
  const handleClose = () => {
    setshowSideBar(!showSideBar);
    setTimeout(() => {
      setShowMenu(!showMenu);
    }, 400);
  };
  //================
  const [isDarkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const isDark = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDark);
  }, []);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("darkMode", isDarkMode);
    localStorage.setItem("hello", "leap");
  }, [isDarkMode]);

  //===================
  return (
    <>
      <div className="flex justify-center">
        <div className=" container py-4 px-20 max-sm:p-4">
          <div className="flex justify-between items-center px-[32px] max-sm:px-0">
            <div>
              <h1 className="text-[50px] font-bold">&#60;ss/&#62;</h1>
            </div>
            <div className="flex gap-[24px] items-center text-[16px] font-medium text-gray-600 *:dark:text-[#D1D5DB]  max-sm:hidden">
              <button onClick={props.handleClick1}>About</button>
              <button onClick={props.handleClick2}>Work</button>
              <button onClick={props.handleClick3}>Testimonials</button>
              <button onClick={props.handleClick4}>Contact</button>
              <img
                onClick={() => setDarkMode((prevState) => !prevState)}
                className="pl-[24px]"
                src="/sun.png"
                alt=""
              />
              <img
                onClick={() => setDarkMode((prevState) => !prevState)}
                src="/moon.svg"
                alt=""
              />
              <button
                onClick={() => download(fileUrl, filename)}
                className="bg-black text-white  rounded-[12px] py-[6px] px-[16px] dark:bg-[#F9FAFB] dark:text-[#111827]"
              >
                Download CV
              </button>
            </div>
            <div className="p-[6px] sm:hidden" onClick={handleOpen}>
              <img src="/tses.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* ====================== */}
      {showMenu && (
        <div>
          <div
            onClick={handleClose}
            className={` ${
              showSideBar && "bg-black"
            } bg-gray-300  w-[100vw] h-[100vh] absolute left-0 top-0 flex justify-end transition-all duration-300  ease-in-out`}
          ></div>
          {/* ================= */}
          <div className="bg-white  h-[100vh] w-[85%]  absolute overflow-hidden top-0 right-0 dark:bg-[#030712]">
            <div
              className={` ${
                showSideBar ? "translate-x-0" : "translate-x-[100vw]"
              } transition-all duration-300  ease-in-out`}
            >
              <div className="flex justify-between p-4">
                <h1 className="text-[50px] font-bold">&#60;ss/&#62;</h1>
                <img
                  onClick={handleClose}
                  className="w-[40px]"
                  src="/x-temdeg.svg"
                  alt=""
                />
              </div>
              <div
                onClick={handleClose}
                className="*:text-3xl *:text-gray-600 flex flex-col justify-start gap-4 p-4 border-gray border-[2px] border-x-0 *:dark:text-[#D1D5DB]"
              >
                <button onClick={props.handleClick1}>About</button>
                <button onClick={props.handleClick2}>Work</button>
                <button onClick={props.handleClick3}>Testimonials</button>
                <button onClick={props.handleClick4}>Contact</button>
              </div>
              <div className="p-4 ">
                <div className="flex justify-between items-center pb-4">
                  <h1 className="text-2xl font-normal text-gray-600 dark:text-[#D1D5DB]">
                    Switch Theme
                  </h1>
                  <div className="p-[6px]">
                    <img
                      onClick={() => setDarkMode((prevState) => !prevState)}
                      className="w-[34px]"
                      src="/sun.png"
                      alt=""
                    />
                  </div>
                </div>
                <button
                  onClick={() => download(fileUrl, filename)}
                  className="bg-black text-white text-2xl rounded-[12px] py-[10px] px-[16px] w-[100%]"
                >
                  Download CV
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
