import moto2 from "../../assets/moto2.jpg";
import Nav from "./Nav";
import Footer from "../Footer";
import { motion } from "framer-motion";

function AboutMe() {
  return (
    <div className="w-full h-full lg:h-screen text-gray-50 bg-custom-dark scrollbar-red-500">
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
                     Hi, I’m Mateusz.
                </h2>
              </div>
              <div className="text-center p-4 ">
                <p>
                  {" "}
               
Since last year, I’ve devoted a great amount of time for the development of my
computer programming skills. Through consistent everyday practice, I gain new
knowledge and improve my understanding of diverse programming languages and
frameworks. I did an internship at the National Agency of the Erasmus+ Programme
and this allowed me to acquire valuable experience in the area of information
technology and web positioning. I also used to work as an online shop administrator
and at that time I mastered the PrestaShop software. Recently, I’ve completed a
coding boot camp of JavaScript Developer. These experiences have eventually led
to a decision to pursue a career as a professional software engineer.
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
