import { Workui, Workui2 } from "../ui/Workui";
export const Work = (props) => {
  return (
    <div className="flex justify-center">
      <div className="container py-[96px] px-[80px] max-sm:py-16 max-sm:px-4">
        <div className="flex justify-center pb-4 ">
          <div
            className="inline-block justify-center text-center rounded-xl bg-gray-200  px-5 py-1 dark:bg-[#374151]"
            ref={props.a}
          >
            <div className="flex text-gray-600 dark:text-[#D1D5DB]">Work</div>
          </div>
        </div>
        <h1 className="text-gray-600 font-normal text-xl text-center pb-12 dark:text-[#D1D5DB]">
          Some of the noteworthy projects I have built:
        </h1>
        <Workui></Workui>
        <Workui2></Workui2>
        <Workui></Workui>
      </div>
    </div>
  );
};
