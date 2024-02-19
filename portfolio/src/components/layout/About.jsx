export const About = (props) => {
  return (
    <div className=" w-[100%] bg-[#F9FAFB] flex justify-center dark:bg-[#111827]">
      <div className=" container py-[96px] px-[80px]  max-sm:py-16 max-sm:px-4 ">
        <div className="px-[32px] ">
          <div className="flex justify-center pb-12 ">
            <div
              className="inline-block justify-center text-center rounded-xl bg-gray-200 dark:bg-[#374151] px-5 py-1 "
              ref={props.a}
            >
              <div className="flex text-gray-600 dark:text-[#D1D5DB]">
                About me
              </div>
            </div>
          </div>
          <div className="flex gap-12 max-sm:flex max-sm:flex-col">
            <div className="w-[50%]  max-sm:w-[100%] max-sm:flex max-sm:justify-center">
              <img
                className="max-sm:w-[280px] max-sm:h-[360px]"
                src="/Pic2.png"
                alt=""
              />
            </div>
            <div className="w-[50%] gap-6 max-sm:w-[100%]">
              <div>
                <h1 className="text-[30px] font-semibold pb-6">
                  Curious about me? Here you have it:
                </h1>
              </div>
              <div className="*:pb-4 text-gray-600 *:dark:text-[#D1D5DB]">
                <p>
                  I'm a passionate, self-proclaimed designer who specializes in
                  flil stack development (React.js & Node.js). I am very
                  enthusiastic about bringing the technical and visual aspects
                  of digital products to life. User experience, pixel perfect
                  design, and writing clear, readable, highly performant code
                  matters to me.
                </p>
                <p>
                  I began my journey as a web developer in 2015, and since then,
                  I've continued to grow and evolve as a developer, taking on
                  new challenges and learning the latest technologies along the
                  way. Now, in my early thirties, 7 years after starting my web
                  development journey, I'm building cutting-edge web
                  applications using modern technologies such as Next.js,
                  TypeScript, Nestjs, Tailwindcss, Supabase and much more.
                </p>
                <p>
                  I am very much a progressive thinker and enjoy working on
                  products end to end, from ideation all the way to development.
                </p>
                <p>
                  When I'm not in flil-on developer mode, you can find me
                  hovering around on twitter or on indie hacker, witnessing the
                  journey of early startups or enjoying some free time. You can
                  follow me on Twitter where I share tech-related bites and
                  build in public, or you can follow me on GitHub.
                </p>
                <p>Finally, some quick bits about me.</p>
                <div className="">
                  <li>B.E. in Computer Engineering</li>
                  <li>Avid learner</li>
                  <li>Flil time freelancer</li>
                  <li>Aspiring indie hacker</li>
                </div>
                <p>
                  One last thing, I'm available for freelance work, so feel free
                  to reach out and say hello! I promise I don't bite 😉
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
