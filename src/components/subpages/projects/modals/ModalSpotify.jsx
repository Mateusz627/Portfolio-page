import { FiX } from "react-icons/fi";
import spotify1 from "../../../../assets/spotifycloneSc/spotify1.png";
import spotify2 from "../../../../assets/spotifycloneSc/spotify2.png";
import spotify3 from "../../../../assets/spotifycloneSc/spotify3.png";
import spotify4 from "../../../../assets/spotifycloneSc/spotify4.png";
import spotify5 from "../../../../assets/spotifycloneSc/spotify5.png";

const ModalSpotify = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div
      onClick={onClose}
      className="w-full h-full fixed top-0 left-0 bg-black bg-opacity-40"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={
          "w-[90%] h-[80%] md:w-[70%] lg:max-w-4xl md:max-h-[1000px] bg-slate-700 z-90 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl overflow-clip"
        }
      >
        <div className="p-4 flex justify-between items-center bg-slate-800 gap-10">
          {" "}
          <h2 className="text-xl">Spotify Clone</h2>
          <FiX
            onClick={onClose}
            className="cursor-pointer size-7 bg-gray-800 rounded-full text-gray-500 hover:text-white hover:bg-purple-500 duration-500"
          />
        </div>

        <div className="w-full h-full overflow-scroll overflow-x-hidden">
          <div className=" flex flex-col pb-20">
            <img
              className="p-4 w-full hidden md:flex rounded-3xl"
              src={spotify1}
              alt="screenshot"
            />
            <img
              className="p-4 w-full hidden md:flex rounded-3xl"
              src={spotify3}
              alt="screenshot"
            />
            <img
              className="p-4 w-full hidden md:flex rounded-3xl"
              src={spotify5}
              alt="screenshot"
            />
            <img
              className="p-4 w-full flex md:hidden rounded-3xl"
              src={spotify2}
              alt="screenshot"
            />
            <img
              className="p-4 w-full flex md:hidden rounded-3xl"
              src={spotify4}
              alt="screenshot"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalSpotify;

// Spotify clone with the ability to add your favorite songs(in MP4
// format), it is fully functional as the original version. The
// project taught me a lot, it was my first big project with
// Tailwind and Typescript. I recommend checking it out, use the
// login credentials below to check out the full functionality.
