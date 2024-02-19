// export const Img = () => {
//   return (
//     <>
//       <div>

//       </div>
//     </>
//   );
// };
import { useEffect, useState } from "react";

export default function Promise() {
  const [articles, setArticles] = useState([]);
  const [filteredArray, setFilteredArray] = useState(articles);

  const fetchData = async () => {
    try {
      const res = await fetch("https://dev.to/api/articles?per_page=100");
      const data = await res.json();
      setArticles(data);
      setFilteredArray(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = (event) => {
    const filteredArticles = articles.filter((article) =>
      article.title.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredArray(filteredArticles);
  };

  return (
    <div>
      <div className="flex w-[100%] justify-center">
        <input
          onChange={handleSearch}
          type="text"
          className="border-[2px] border-red-500 w-[200px] h-[50px]"
        />
      </div>
      <div className="flex gap-3 flex-wrap">
        {filteredArray.map((article) => {
          return (
            <div className="border-[2px] rounded-md border-red-500 m-3 h-[200px] w-[300px] p-[10px]">
              <img src={article.cover_image} alt="" />
              {article.title}
            </div>
          );
        })}
      </div>
    </div>
  );
}
// export const Profile = ({ pro }) => {
//   return (
//     <div className="flex justify-center mb-[100px]">
//       <div className="container">
//         <div className="px-[160px] ">
//           <div className="flex overflow-slide">
//             {pro.map((el) => {
//               return (
//                 <div
//                   className="flex items-end min-w-[100%] h-[600px] rounded-xl bg-cover"
//                   style={{ backgroundImage: `url(${el.cover_image})` }}
//                 >
//                   <div className="bg-white inline-block w-[50%] m-4 rounded-xl ">
//                     <div className="text-white bg-[#4B6BFB] inline-block px-[10px] py-1 rounded-md ml-8 mt-8 mb-4 text-xs font-medium">
//                       Technology
//                     </div>
//                     <h1 className="text-4xl font-semibold ml-8 pb-5">
//                       {el.title}
//                     </h1>
//                     <h1 className=" text-[#97989F] text-base font-normal pl-8 pb-8">
//                       {el.readable_publish_date}
//                     </h1>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//           <div className="flex justify-end *:rounded-md gap-2 pt-4">
//             <div className="w-10 h-10 border-[2px] border-gray-400 flex justify-center items-center">
//               <img src="/left.svg" alt="" />
//             </div>
//             <div className="w-10 h-10 border-[2px] border-gray-400 flex justify-center items-center">
//               <img src="/right.svg" alt="" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
