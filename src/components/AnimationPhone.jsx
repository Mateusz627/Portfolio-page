import Lottie from "lottie-react";
import animationData from "../assets/Animation.json";
function AnimationPhone() {
  return (
    <>
      <div className="mt-12 flex justify-center">
        <Lottie animationData={animationData} className="w-[80%] md:w-40" />
      </div>
      <div>
        <h2 className="text-2xl text-center mt-4">
          Creating websites is what I do.
        </h2>
      </div>
    </>
  );
}

export default AnimationPhone;
