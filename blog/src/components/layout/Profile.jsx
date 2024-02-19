export const Profile = ({ pro }) => {
  return (
    <div className="flex justify-center mb-[100px]">
      <div className="container">
        <div className="px-[160px] ">
          <div className="flex overflow-scroll">
            {pro.map((el) => {
              return (
                <div
                  className="flex items-end min-w-[100%] h-[600px] rounded-xl bg-cover"
                  style={{
                    backgroundImage: `url(${
                      el.cover_image || "/mountain.jpeg"
                    })`,
                  }}
                >
                  <div className="bg-white inline-block w-[50%] m-4 rounded-xl ">
                    <div className="text-white bg-[#4B6BFB] inline-block px-[10px] py-1 rounded-md ml-8 mt-8 mb-4 text-xs font-medium">
                      Technology
                    </div>
                    <h1 className="text-4xl font-semibold ml-8 pb-5">
                      {el.title}
                    </h1>
                    <h1 className=" text-[#97989F] text-base font-normal pl-8 pb-8">
                      {el.readable_publish_date}
                    </h1>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex justify-end *:rounded-md gap-2 pt-4">
            <div className="w-10 h-10 border-[2px] border-gray-400 flex justify-center items-center">
              <img src="/left.svg" alt="" />
            </div>
            <div className="w-10 h-10 border-[2px] border-gray-400 flex justify-center items-center">
              <img src="/right.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
