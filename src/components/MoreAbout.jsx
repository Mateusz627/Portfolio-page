import moto1 from "../assets/moto1.jpg";
import { Link, ScrollRestoration } from "react-router-dom";

function MoreAbout() {
  return (
    <>
      <div className="w-full mt-20 flex flex-col items-center md:flex">
        <img src={moto1} alt="image" className="w-[70%] rounded-3xl mt-6" />
        <div className="p-4">
          <h2 className="text-2xl">More about me</h2>
          <p>Click the button below to read more.</p>
          <button className="p-2 mt-4 bg-purple-600 rounded-2xl duration-500 hover:bg-purple-900">
            <Link to={`/about`}>
              About me
              <ScrollRestoration />
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default MoreAbout;
