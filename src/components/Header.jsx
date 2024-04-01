import { useState } from "react";
import { FaBars, FaSearch, FaTimes } from "react-icons/fa";

export default function Header() {
  const [showBar, setShowBar] = useState(true);

  return (
    <div className="w-screen bg-slate-800 p-5">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between gap-3 items-center">
          <div className="text-white flex">
            <h1 className="text-2xl font-bold mr-5">MovieFANDANGO</h1>
            <div className="flex items-center bg-white lg:w-96 min-w-32 rounded-3xl">
              <input
                type="text"
                placeholder="Search..."
                className="outline-none text-black py-1 px-2 rounded-3xl w-full"
              />
              <FaSearch className="text-blue-700 mr-2 rounded-full" />
            </div>
          </div>
          <div className="text-white flex">
            <div className="md:flex justify-end gap-3 hidden">
              <h1>Movie</h1>
              <h1 className="text-nowrap">THEATERS + TICKETS</h1>
              <h1 className="text-nowrap">MOVIE NEWS</h1>
              <h1>JOIN</h1>
            </div>
            <button className="" onClick={() => setShowBar(!showBar)}>
              {showBar ? (
                <FaBars className="text-white flex md:hidden  text-xl " />
              ) : (
                <FaTimes className="text-white flex md:hidden  text-xl " />
              )}
            </button>
          </div>
        </div>
      </div>
      <div className="inline sm:hidden">
        <div
          className={
            !showBar
              ? `fixed bg-slate-800 h-screen w-[60%] min-w-28 top-0 left-0 ease-in-out duration-500`
              : `fixed bg-slate-800 h-screen w-[60%] top-0 left-[-100%] ease-in-out duration-500`
          }
        >
          <div className="flex flex-col m-5 gap-5 text-white">
            <h2 className="text-2xl font-extrabold">MovieFANDANGO</h2>
            <h2 className="">THEATERS + TICKETS</h2>
            <h2 className="">MOVIE NEWS</h2>
            <h2>JOIN</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
