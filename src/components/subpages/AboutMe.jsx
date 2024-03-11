import moto2 from "../../assets/moto2.jpg";
import Navbar from "../Navbar";

function AboutMe() {
  return (
    <div className="w-full h-full text-gray-50 bg-custom-dark ">
      <Navbar />
      <div className="w-full flex flex-col items-center">
        <img
          src={moto2}
          alt="image"
          className="w-[80%] max-w-md  md:h-4/5 rounded-3xl p-4 mt-6"
        />
        <div className="w-[80%] p-4">
          <h2 className="text-xl">Hello, my name is Mateusz.</h2>
          <p>
            I've dedicated countless hours to coding over the past year, and my
            GitHub profile is a testament to my commitment and progress. Through
            consistent daily coding practice, I have consistently excelled in my
            skills and expanded my knowledge of various programming languages
            and frameworks. Through my IT internship at the Erasmus+ National
            Agency, I gained valuable experience in the field of information
            technology and SEO. Working as a website administrator and order
            processor at Mbiotica allowed me to develop my Prestashop skills.
            These lessons learned set me on a path of development as a
            programmer, which resulted in the completion of a JavaScript
            Developer bootcamp.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
