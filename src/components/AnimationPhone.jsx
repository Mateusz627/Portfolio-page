import Lottie from "lottie-react";
import animationData from "../assets/Animation.json";
import { motion } from "framer-motion";
function AnimationPhone() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <div className="md:flex justify-evenly mt-10">
          {" "}
          <div className="mt-12 flex justify-center">
            <Lottie
              animationData={animationData}
              className="w-[80%] md:w-96 md:max-w-2xl"
            />
          </div>
          <div>
            <div className="text-center mt-10 font-whisper">
              <h2 className="text-5xl p-4">Creating websites is what I do.</h2>

              <p className="text-3xl font-whisper p-3">- MS</p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default AnimationPhone;
