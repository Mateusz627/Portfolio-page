import Lottie from "lottie-react";
import animationData from "../assets/Animation.json";
function Skills() {
  return (
    <>
      <div className="mt-12 flex justify-center">
        <Lottie animationData={animationData} className="w-[80%] md:w-40" />
      </div>
      <div></div>
    </>
  );
}

export default Skills;
