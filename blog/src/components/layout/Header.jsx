import Link from "next/link";
export const Header = (props) => {
  return (
    <div className="flex justify-center sticky top-0 bg-white">
      <div className="container ">
        <div className="flex justify-between px-[160px] py-8 mb-[20px]">
          <img src="meta.png" alt="" />
          <div className="flex gap-10 *:text-base *:font-normal *:text-[#3B3C4A] ">
            <Link href="/">
              <p>Home</p>
            </Link>
            <Link href="/blog">
              <p>Blog</p>
            </Link>
            <Link href="/contact">
              <p>Contact</p>
            </Link>
          </div>
          <input
            onChange={props.handleSearch}
            className="border-[1px] rounded-lg py-2 pr-2 pl-4"
            type="text"
            placeholder="Search..."
          />
        </div>
      </div>
    </div>
  );
};
