import Nav from "./Nav";
import { useState } from "react";
import { FiX } from "react-icons/fi";
import { motion } from "framer-motion";
import spotify1 from "../../assets/spotifycloneSc/spotify1.png";
import spotify2 from "../../assets/spotifycloneSc/spotify2.png";
import spotify3 from "../../assets/spotifycloneSc/spotify3.png";
import spotify4 from "../../assets/spotifycloneSc/spotify4.png";

function Projects() {
  const [popUp, setPopUp] = useState(false);

  function handlePop() {
    setPopUp(!popUp);
  }

  // PopUp
  //   ? (document.body.style.overflow = "hidden")
  //   : (document.body.style.overflow = "auto");

  // useEffect(() => {
  //   let handler = () => {
  //     setPopUp(false);
  //   };
  //   document.addEventListener("mousedown", handler);
  // });

  return (
    <div className="w-screen h-screen text-gray-50 bg-custom-dark ">
      <Nav />

      <div className="w-full p-4">
        {" "}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="p-4 flex justify-center">
            {" "}
            <div className="mt-10 w-[90%] md:w-[40%] lg:w-80 bg-gray-800 rounded-3xl hover:transform hover:scale-95 duration-500">
              {" "}
              <div className="h-12 flex justify-center items-center  rounded-t-2xl">
                <h2 className="text-xl">Spotify Clone</h2>
              </div>
              <div className="text-center p-4 ">
                <p>
                  Technologies: Next 13, React, Tailwind, Supabase, PostgreSQL
                </p>
              </div>
              <div className="w-full text-center p-4">
                {" "}
                <a
                  onClick={handlePop}
                  className="border hover:border-purple-500 hover:text-purple-500 p-2 rounded-md cursor-pointer"
                >
                  Check out
                </a>
              </div>
            </div>
            <div
              className={
                popUp
                  ? "w-[90%] h-[80%] md:max-w-4xl md:max-h-[1000px] bg-slate-700 z-10 fixed rounded-2xl overflow-clip"
                  : "ease-in-out duration-700 fixed hidden"
              }
            >
              <div className="p-4 flex justify-between items-center bg-slate-800 gap-10">
                {" "}
                <h2 className="text-xl">Spotify Clone</h2>
                <FiX
                  onClick={handlePop}
                  className="cursor-pointer size-7 bg-gray-800 rounded-full text-gray-500 hover:text-white hover:bg-purple-500 duration-500"
                />
              </div>
              <div className="w-full h-full overflow-scroll overflow-x-hidden">
                <div className=" flex flex-col ">
                  <img
                    className="p-4 w-full hidden md:flex"
                    src={spotify1}
                    alt="screenshot"
                  />
                  <img
                    className="p-4 w-full flex md:hidden"
                    src={spotify2}
                    alt="screenshot"
                  />
                  <img
                    className="p-4 w-full hidden md:flex"
                    src={spotify3}
                    alt="screenshot"
                  />
                  <img
                    className="p-4 w-full flex md:hidden"
                    src={spotify4}
                    alt="screenshot"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Projects;

{
  /* <p>
Spotify clone with the ability to add your favorite songs(in MP4
format), it is fully functional as the original version. The
project taught me a lot, it was my first big project with
Tailwind and Typescript. I recommend checking it out, use the
login credentials below to check out the full functionality.
</p> */
}
