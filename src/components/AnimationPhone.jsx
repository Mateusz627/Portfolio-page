import Lottie from "lottie-react";
import animationData from "../assets/Animation.json";
function AnimationPhone() {
  return (
    <>
      <div className="md:flex justify-evenly mt-10">
        {" "}
        <div className="mt-12 flex justify-center">
          <Lottie
            animationData={animationData}
            className="w-[80%] md:w-96 md:max-w-2xl"
          />
        </div>
        <div>
          <h2 className="text-2xl text-center mt-10">
            Creating websites is what I do.
          </h2>
        </div>
      </div>
    </>
  );
}

export default AnimationPhone;
