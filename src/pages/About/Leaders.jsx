import { FaArrowRight, FaStar } from "react-icons/fa";
import DeaconsParent from "../../components/Deacons/DeaconsParent";
import Pastoral from "../../components/Pastoral";

export default function AboutHero() {
  return (
    <section className="bg-white ">
      <div className="mx-auto px-6 py-20 sm:px-8 lg:px-12 bg-blue-900">
        <div className="flex justify-center flex-col items-center   ">
          <p className="mb-4 pt-10 text-sm text-yellow-400 font-semibold uppercase tracking-widest">
            About Our Church
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Our Leaders
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-justify text-white">
            Faithful servants committed to biblical teaching, shepherding,
            discipleship, and the care of God&apos;s people.
          </p>
        </div>

      </div>
      <Pastoral />
      <DeaconsParent />


      <div className="mx-auto px-6 py-20 sm:px-8 lg:px-12 bg-[#041a4f]">
        <div className="flex justify-center flex-col items-center min-w-screen  ">
          <p className="mb-4 text-3xl text-yellow-400 font-bold uppercase tracking-widest">
            <FaStar />
          </p>

          <h1 className="text-xl font-bold tracking-tight text-white sm:text-5xl lg:text-5xl">
            Pray For Our Leaders
          </h1>

          <p className="mt-6 max-w-2xl text-center text-lg leading-8 text-white">
            We invite you to pray for our pastors, deacons, and ministry leaders as they faithfully serve Christ and care for our church family.
          </p>

          <button className="bg-yellow-400 p-4 rounded-2xl font-bold m-4 hover:scale-105 transition duration-700 flex gap-2 items-center">Connect With Us<FaArrowRight /></button>
        </div>

      </div>

    </section>
  );
}