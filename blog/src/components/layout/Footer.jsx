export const Footer = () => {
  return (
    <div className="flex justify-center bg-[#F6F6F7]">
      <div className="container">
        <div className="px-[160px] pb-[80px]">
          <div className="flex justify-between pt-[80px] pb-[25px]">
            <div>
              <h1 className=" text-lg font-semibold text-[#181A2A] pb-3">
                About
              </h1>
              <p className=" text-base font-normal text-[#696A75] w-[280px] pb-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
              <h2 className="text-base font-normal">
                Email : info@jstemplate.net
              </h2>
              <h2 className="text-base font-normal">Phone : 880 123 456 789</h2>
            </div>
            <div className="*:textlg *:font-normal *:text-[#3B3C4A]">
              <h1>Home</h1>
              <h1>Blog</h1>
              <h1>Contact</h1>
            </div>
            <div className="flex items-start gap-5">
              <img src="/fb.svg" alt="" />
              <img src="/x.svg" alt="" />
              <img src="/instagram.svg" alt="" />
              <img src="/in.svg" alt="" />
            </div>
          </div>
          <div className="border-t-[1px] border-[#DCDDDF] flex justify-between pt-[25px]">
            <img src="/meta.png" alt="" />
            <div className="flex  *:text-base *:font-normal *:text-[#3B3C4A] items-center">
              <div>Terms of Use</div>
              <div className=" border-x-[1px] border-[#DCDDDF] px-3 mx-3">
                Privacy Policy
              </div>
              <div>Cookie Policy</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
