import Image from "next/image";
import Stats from "./Stats";



const Hero = () => {
  return (
    <section className="py-8">
      <div className="max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8">
        <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-[40rem]">
          <h1 className="text-sm text-indigo-600 font-medium">
            Over 200 Ideas and Stories
          </h1>
          <h2 className="text-4xl text-gray-800 font-extrabold md:text-5xl">
            All-in-One Blog Destination
          </h2>
          <p>
            Discover trending articles on Technology, Lifestyle, Health, Travel, Food, Education, Productivity & more.
            Stay updated, stay informed, stay inspired — across all your favorite categories.          </p>
          <div className=" gap-3  flex sm:space-y-0 items-center">
            <a href="javascript:void(0)" className="block py-2 px-4 text-center text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none">
              Let&apos;s get started
            </a>
            <a href="javascript:void(0)" className="flex items-center justify-center gap-2 py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg md:inline-flex">
              Get access
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
        <div className="flex-none mt-14 md:mt-0 md:max-w-xl">
          <Image
            height={300}
            width={450}
            src="/2.jpg"
            className=" md:rounded-tl-[108px]"
            alt=""
          />
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Hero;

