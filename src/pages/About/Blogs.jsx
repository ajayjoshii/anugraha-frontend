import { FaArrowRight, FaStar } from "react-icons/fa";
import Blogparent from "../../components/Blogs/Blog";

export default function Blogs() {
  return (
    <section className="bg-white w-full">
     
      <main className="w-full overflow-x-hidden">
        <section className="w-full bg-blue-900 px-6 py-20 sm:px-8 lg:px-12">
          <div className="flex w-full flex-col items-center justify-center">

            <p className="mb-4 pt-10 text-sm font-semibold uppercase tracking-[0.2em] text-yellow-400">
              Sermons
            </p>

            <h1 className="text-center text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Our Latest Blogs
            </h1>

            <p className="mt-6 max-w-2xl text-center text-base leading-7 text-white sm:text-lg sm:leading-8">
              Stay connected with what God is teaching us and what is happening within our church community.
            </p>

          </div>
        </section>
      </main>

      <Blogparent/>


      


      
    </section>
  );
}