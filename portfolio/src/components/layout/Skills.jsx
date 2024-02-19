import { Card } from "@/components/ui/TechnologyCard";
export const Skills = (props) => {
  const { Array } = props;
  return (
    <div className="flex justify-center">
      <div className="container py-[96px] px-[80px] max-sm:py-16 max-sm:px-4">
        {/* <div className="flex">{Array.map((el, index) => {})}</div> */}
        <div className="flex justify-center pb-4">
          <div className="inline-block justify-center text-center rounded-xl bg-gray-200 px-5 py-1 dark:bg-[#374151]">
            <div className="flex text-gray-600 dark:text-[#D1D5DB]">Skills</div>
          </div>
        </div>
        <h1 className="text-center text-gray-600 text-xl font-normal pb-12 dark:text-[#D1D5DB]">
          The skills, tools and technologies I am really good at:
        </h1>
        <div className="px-[32px] max-sm:px-0 dark:text-[#D1D5DB]">
          <Card arr={Array}></Card>
        </div>
      </div>
    </div>
  );
};
