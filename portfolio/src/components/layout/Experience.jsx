import { Exarr, Exarr1, Exarr2 } from "@/components/ui/EXarr";
export const Experience = (props) => {
  return (
    <div className="bg-gray-50 flex justify-center dark:bg-[#111827]">
      <div className="container py-[96px] px-[80px]   max-sm:py-16 max-sm:px-4 ">
        <div className="px-8 max-sm:px-0">
          <div className="flex justify-center pb-4">
            <div
              className="inline-block justify-center text-center rounded-xl bg-gray-200 px-5 py-1 dark:bg-[#374151]"
              ref={props.a}
            >
              <div className="flex text-gray-600 dark:text-[#D1D5DB]">
                Experience
              </div>
            </div>
          </div>
          <h1 className="text-gray-600 font-normal text-xl text-center pb-12 dark:text-[#D1D5DB]">
            Here is a quick summary of my most recent experiences:
          </h1>
          <div className="flex justify-center  ">
            <div className="*:bg-white w-[73.5%] *:drop-shadow-md *:rounded-xl max-sm:w-[100%]">
              <Exarr></Exarr>
              <Exarr1></Exarr1>
              <Exarr2></Exarr2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
//dawtalttai============
// import { Exarr } from "../ui/EXarr";
// export const Experience = (props) => {
//   const { Array } = props;
//   return (
//     <div className="py-[96px] px-[80px]  bg-gray-50">
//       <div className="px-8 ">
//         <div className="flex justify-center pb-4">
//           <div className="inline-block justify-center text-center rounded-xl bg-gray-200 px-5 py-1 ">
//             <div className="flex text-gray-600">Experience</div>
//           </div>
//         </div>
//         <h1 className="text-gray-600 font-normal text-xl text-center pb-12">
//           Here is a quick summary of my most recent experiences:
//         </h1>
//         <div className="flex justify-center  ">
//           <div className="*:bg-white w-[73.5%] *:drop-shadow-md ">
//             <Exarr arr={Array}></Exarr>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
//=========================
