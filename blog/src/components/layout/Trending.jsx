export const Trending = ({ trend }) => {
  // console.log(trend);
  return (
    <div className="flex justify-center mb-[100px]">
      <div className="container">
        <div className="px-[160px]">
          <h1 className="text-2xl font-bold text-[#181A2A] pb-8">Trending</h1>
          <div className="flex flex-wrap justify-between">
            {trend.map((el) => {
              return (
                <div
                  className="flex  h-[320px] w-[23.5%] rounded-xl  items-end bg-cover"
                  style={{ backgroundImage: `url(${el.cover_image})` }}
                >
                  <div>
                    <div className="text-white bg-[#4B6BFB] inline-block px-[10px] py-1 rounded-md ml-6 text-xs font-medium">
                      Technology
                    </div>
                    <p className="text-white text-lg font-semibold p-6">
                      {el.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
