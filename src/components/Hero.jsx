import img from "../assets/photoCV1.jpg";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";

function Hero() {
  return (
    <>
      <div className="w-full h-[70%] mt-10 flex flex-col justify-evenly items-center md:flex-row">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <div className="flex flex-col items-center">
            {" "}
            <h2 className="text-6xl p-4 ">
              Im a fullstack
              <p className="text-purple-500">developer</p>
            </h2>
            <div className="text-lg mt-6">
              <ReactTyped
                strings={[
                  "Hello World!",
                  "Dzień dobry!",
                  "Good morning!",
                  "Buongiorno!",
                  "Bonjour!",
                ]}
                typeSpeed={120}
                backSpeed={140}
                loop
              />
            </div>
          </div>
        </motion.div>

        <motion.img
          src={img}
          alt="photo"
          className="size-48 rounded-full mt-6"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
      </div>
    </>
  );
}

export default Hero;
