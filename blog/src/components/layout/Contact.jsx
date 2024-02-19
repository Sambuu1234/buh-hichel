export const Contact = () => {
  return (
    <div className="flex justify-center ">
      <div className="container">
        <div className="px-[160px]  flex justify-center">
          <div className="w-[51.5%] mb-[100px]">
            <div className="mb-5">
              <h1 className=" text-4xl font-semibold pb-5">Contact Us</h1>
              <p className=" text-base font-normal text-[#696A75]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam
              </p>
            </div>
            <div className="flex justify-between mb-[50px]">
              <div className=" border-[1px] border-gray-400 w-[47%] rounded-xl p-4">
                <h1 className=" text-2xl font-semibold pb-[10px]">Address</h1>
                <p className=" text-lg font-normal text-[#696A75]">
                  1328 Oak Ridge Drive, Saint Louis, Missouri
                </p>
              </div>
              <div className=" border-[1px] border-gray-400 w-[47%] rounded-xl p-4">
                <h1 className=" text-2xl font-semibold pb-[10px]">Contact</h1>
                <p className=" text-lg font-normal text-[#696A75]">
                  313-332-8662 info@email.com
                </p>
              </div>
            </div>
            <div className="bg-[#F6F6F7] p-7 rounded-[10px]">
              <div className=" w-[80%] flex flex-col gap-6">
                <h1 className=" text-lg font-semibold">Leave a Message</h1>
                <div className="flex justify-between">
                  <input
                    className=" rounded-md p-[14px]"
                    type="text"
                    placeholder="Your Name"
                  />
                  <input
                    className=" rounded-md p-[14px]"
                    type="text"
                    placeholder="Your Email"
                  />
                </div>
                <input
                  className=" rounded-md p-[14px]"
                  type="text"
                  placeholder="Subject"
                />
                <input
                  className=" rounded-md p-[14px] pb-24"
                  type="text"
                  placeholder="Write a message"
                />

                <button className="bg-[#4B6BFB] text-white px-[10px] py-4 w-[30%] rounded-md text-sm font-medium">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
