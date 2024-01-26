export const Card = (props) => {
  const { arr } = props;
  return (
    <div className="flex flex-wrap gap-16 justify-center max-sm:gap-6">
      {arr.map((el, index) => {
        return (
          <div className="p-2">
            <img key={index + el} src={el.img} alt="" />
            <p
              className="font-normal text-gray-600 text-lg dark:text-[#D1D5DB]"
              key={index + el}
            >
              {el.name}
            </p>
          </div>
        );
      })}
    </div>
  );
};
