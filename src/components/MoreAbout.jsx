import moto1 from "../assets/moto1.jpg";
import { Link, ScrollRestoration } from "react-router-dom";
import { motion } from "framer-motion";

function MoreAbout() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="w-full mt-20 flex flex-col items-center md:flex-row justify-center">
          <img
            src={moto1}
            alt="image"
            className="w-[70%] max-w-md rounded-3xl mt-6"
          />
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
      </motion.div>
    </>
  );
}

export default MoreAbout;
