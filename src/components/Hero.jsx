import img from "../assets/photoCV1.jpg";
import { ReactTyped } from "react-typed";

function Hero() {
  return (
    <>
      <div className="w-full h-[70%] mt-10 flex flex-col justify-evenly items-center md:flex-row">
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

        <img src={img} alt="photo" className="size-48 rounded-full mt-6" />
      </div>
    </>
  );
}

export default Hero;
