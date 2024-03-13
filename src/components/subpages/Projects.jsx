import Nav from "./Nav";
import { useState } from "react";
import { FiX } from "react-icons/fi";
import spotify1 from "../../assets/spotifycloneSc/spotify1.png";

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
            <div onClick={handlePop} className="w-full text-center p-4">
              {" "}
              <a className="border hover:border-purple-500 hover:text-purple-500 p-2 rounded-md cursor-pointer">
                Check out
              </a>
            </div>
          </div>
          <div
            className={
              popUp
                ? "w-[70%] h-[70%] bg-slate-700 z-10 fixed rounded-2xl text-center"
                : "ease-in-out  duration-700 fixed hidden"
            }
          >
            <div className="flex justify-center items-center gap-10">
              {" "}
              <h2>Spotify Clone</h2>
              <FiX
                onClick={handlePop}
                className="cursor-pointer hover:text-purple-500"
              />
            </div>

            <div>
              <img className="" src={spotify1} alt="screenshot" />
              <img className="" src="" alt="" />
              <img className="" src="" alt="" />
            </div>
          </div>
        </div>
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
