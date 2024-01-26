export const Footer = (props) => {
  return (
    <div className="py-[96px] px-[80px] max-sm:py-16 max-sm:px-4">
      <div className="flex justify-center pb-4">
        <div
          className="inline-block justify-center text-center rounded-xl bg-gray-200 px-5 py-1 dark:bg-[#374151]"
          ref={props.a}
        >
          <div className="flex text-gray-600 dark:text-[#D1D5DB]">
            Get in touch
          </div>
        </div>
      </div>
      <div className="px-[32px] *:text-center ">
        <h2 className="flex justify-center text-[20px] text-gray-600 font-normal pb-12 dark:text-[#D1D5DB]">
          What’s next? Feel free to reach out to me if you're looking for <br />
          a developer, have a query, or simply want to connect.
        </h2>
        <div className="flex justify-center gap-5 pb-4">
          <img src="/mail.svg" alt="" />
          <h1 className=" text-4xl max-sm:text-lg">reachsagarshah@gmail.com</h1>
          <img src="/save.svg" alt="" />
        </div>
        <div className="flex justify-center gap-5 pb-12">
          <img src="/phone.svg" alt="" />
          <h1 className="text-4xl max-sm:text-lg">+91 8980500565</h1>
          <img src="/save.svg" alt="" />
        </div>
        <div>
          <h3 className=" font-normal text-[16px] text-gray-600 pb-2 dark:text-[#D1D5DB]">
            You may also find me on these platforms!
          </h3>
          <div className="flex justify-center">
            <div className="items-center w-[36px] h-[36px]">
              <img src="/muur.svg" alt="" />
            </div>
            <div className="items-center w-[36px] h-[36px]">
              <img src="/x.svg" alt="" />
            </div>
            <div className="items-center w-[36px] h-[36px]">
              <img src="/figma.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
