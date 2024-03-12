import moto2 from "../../assets/moto2.jpg";
import Navbar from "../Navbar";
import Footer from "../Footer";

function AboutMe() {
  return (
    <div className="w-full h-full text-gray-50 bg-custom-dark scrollbar-red-500">
      <Navbar />
      <div className="w-full flex flex-col items-center md:flex-row justify-center gap-10">
        <img
          src={moto2}
          alt="image"
          className="p-4 w-[80%] md:w-96 rounded-3xl mt-10"
        />
        <div className="p-4 flex justify-center">
          {" "}
          <div className="mt-10 w-[70%] md:w-[40%] lg:w-80 bg-gray-800 rounded-3xl">
            {" "}
            <div className="h-12 flex justify-center items-center  rounded-t-2xl">
              <h2 className="text-xl">Hello, my name is Mateusz.</h2>
            </div>
            <div className="text-center p-2 ">
              <p>
                {" "}
                I've dedicated countless hours to coding over the past year, and
                my GitHub profile is a testament to my commitment and progress.
                Through consistent daily coding practice, I have consistently
                excelled in my skills and expanded my knowledge of various
                programming languages and frameworks. Through my IT internship
                at the Erasmus+ National Agency, I gained valuable experience in
                the field of information technology and SEO. Working as a
                website administrator and order processor at Mbiotica allowed me
                to develop my Prestashop skills. These lessons learned set me on
                a path of development as a programmer, which resulted in the
                completion of a JavaScript Developer bootcamp.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutMe;
