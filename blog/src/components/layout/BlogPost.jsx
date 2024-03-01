import Link from "next/link";
export const BlogPost = ({ blog, Load }) => {
  console.log(Load);
  return (
    <div className="flex justify-center ">
      <div className="container">
        <div className="px-[160px]">
          <div>
            <h1 className="text-2xl font-bold text-[#181A2A] pb-8">
              All Blog Post
            </h1>
            <div className="flex justify-between pb-8">
              <div className=" flex gap-5 *:text-xs *:font-bold *:text-[#495057] *:cursor-pointer">
                <p>All</p>
                <p>Design</p>
                <p>Travel</p>
                <p>Fashion</p>
                <p>Technology</p>
                <p>Branding</p>
              </div>
              <Link href="/blog">
                <p className="text-xs font-bold text-[#495057]">View All</p>
              </Link>
            </div>
          </div>
          <div className="flex justify-between gap-4 flex-wrap">
            {blog.map((el) => {
              return (
                <div className=" w-[32.4%] border-[1px] p-4 rounded-xl">
                  <Link
                    href={{
                      pathname: "/single-post",
                      query: { id: el.id },
                    }}
                  >
                    <img
                      className=" rounded-xl mb-4"
                      src={el.cover_image || "/mountain.jpeg"}
                      alt=""
                    />
                    <div className="p-2">
                      <div className=" bg-gray-100 inline-block px-[10px] py-1 rounded-md mb-4">
                        <p className="text-[#4B6BFB] text-sm font-medium">
                          Technology
                        </p>
                      </div>
                      <p className=" text-2xl font-semibold pb-5">
                        {el.description}
                      </p>
                      <p className=" text-[#97989F] text-base font-normal">
                        {el.readable_publish_date}
                      </p>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="container flex justify-center py-[80px]">
            <div
              onClick={Load}
              className="  border-[1px] border-gray-300 inline-block py-3 px-5 rounded-md cursor-pointer hover:bg-gray-300"
            >
              <h1 className=" text-base font-semibold text-[#696A75]">
                Load more
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
