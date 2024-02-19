//dawtalttai============
// export const Exarr = (props) => {
//   const { arr } = props;
//   return (
//     <div>
//       {arr.map((el, index) => {
//         return (
//           <div className="flex p-8 items-start justify-between ">
//             <img key={index + el} src={el.logo} alt="" />
//             <div className="px-12 w-[58%]">
//               <h1 className="text-xl font-semibold pb-4">{el.skill}</h1>
//               <ul className="text-gray-600 text-base font-normal">
//                 <li>{el.text1}</li>
//                 <li>{el.text2}</li>
//                 <li>{el.text3}</li>
//                 <li>{el.text4}</li>
//               </ul>
//             </div>
//             <h1 className="tset-gray-700 text-base font-normal">{el.time}</h1>
//           </div>
//         );
//       })}
//     </div>
//   );
// };
//=========================
export const Exarr = () => {
  return (
    <div className="p-8 mb-12 dark:bg-[#1F2937]">
      <div className="flex items-start justify-between max-sm:flex max-sm:flex-col max-sm:gap-4">
        <img src="/logo-upwork.svg" alt="" />
        <div>
          <h1 className="text-xl font-semibold pb-4">Sr. Frontend Developer</h1>
          <div className="text-gray-600 text-base font-normal dark:text-[#D1D5DB]">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Ut pretium arcu et massa semper, id fringilla leo semper.</li>
            <li>Sed quis justo ac magna.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          </div>
        </div>
        <h1 className="tset-gray-700 text-base font-normal">
          Nov 2021 - Present
        </h1>
      </div>
    </div>
  );
};
export const Exarr1 = () => {
  return (
    <div className="p-8 mb-12 dark:bg-[#1F2937]">
      <div className="flex items-start justify-between max-sm:flex max-sm:flex-col max-sm:gap-4 ">
        <img src="/logo-upwork.svg" alt="" />
        <div>
          <h1 className="text-xl font-semibold pb-4">Team Lead</h1>
          <div className="text-gray-600 text-base font-normal dark:text-[#D1D5DB]">
            <li>Sed quis justo ac magna.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Sed quis justo ac magna.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          </div>
        </div>
        <h1 className="tset-gray-700 text-base font-normal">
          Jul 2017 - Oct 2021
        </h1>
      </div>
    </div>
  );
};
export const Exarr2 = () => {
  return (
    <div className="p-8 dark:bg-[#1F2937]">
      <div className="flex items-start justify-between max-sm:flex max-sm:flex-col max-sm:gap-4">
        <img src="/logo-upwork.svg" alt="" />
        <div>
          <h1 className="text-xl font-semibold pb-4">Full Stack Developer</h1>
          <div className="text-gray-600 text-base font-normal dark:text-[#D1D5DB]">
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </li>
          </div>
        </div>
        <h1 className="tset-gray-700 text-base font-normal">
          Dec 2015 - May 2017
        </h1>
      </div>
    </div>
  );
};
