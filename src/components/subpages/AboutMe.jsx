import moto2 from "../../assets/moto2.jpg";
import Nav from "./Nav";
import Footer from "../Footer";
import { motion } from "framer-motion";

function AboutMe() {
  return (
    <div className="w-full h-full text-gray-50 bg-custom-dark scrollbar-red-500">
      <Nav />
      <div className="w-full flex flex-col justify-center items-center md:flex-row lg:gap-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="md:w-full">
            <img
              src={moto2}
              alt="image"
              className="p-4 mx-auto w-[80%] mt-10 lg:w-96 rounded-3xl"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="flex justify-center p-4">
            {" "}
            <div className="mt-10 w-[90%] md:w-80 bg-gray-800 rounded-3xl">
              {" "}
              <div className="flex justify-center items-center rounded-t-2xl">
                <h2 className="text-xl text-center p-4">
                  Hello, my name is Mateusz.
                </h2>
              </div>
              <div className="text-center p-4 ">
                <p>
                  {" "}
                  I've dedicated countless hours to coding over the past year,
                  and my GitHub profile is a testament to my commitment and
                  progress. Through consistent daily coding practice, I have
                  consistently excelled in my skills and expanded my knowledge
                  of various programming languages and frameworks. Through my IT
                  internship at the Erasmus+ National Agency, I gained valuable
                  experience in the field of information technology and SEO.
                  Working as a website administrator and order processor at
                  Mbiotica allowed me to develop my Prestashop skills. These
                  lessons learned set me on a path of development as a
                  programmer, which resulted in the completion of a JavaScript
                  Developer bootcamp.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <Footer />
      </motion.div>
    </div>
  );
}

export default AboutMe;
