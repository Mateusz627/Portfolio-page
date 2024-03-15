import { FaHtml5, FaCode } from "react-icons/fa";
import { GiAutoRepair } from "react-icons/gi";
import { motion } from "framer-motion";
function Cards() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="text-center mt-32">
          <h2 className="text-2xl">Technologies I use:</h2>
        </div>
        <div className="lg:flex justify-evenly">
          <div className="mt-10 w-[70%] md:w-[40%] lg:w-72 mx-auto flex flex-col justify-center bg-purple-900 rounded-3xl hover:transform hover:scale-110 duration-500">
            {/* Card One */}
            <div className="h-12  flex justify-center items-center bg-purple-600 rounded-t-2xl">
              <FaHtml5 className="size-7 pr-1" />

              <h2>Front End</h2>
            </div>

            <div className="text-center h-60 flex flex-col justify-center">
              <p>HTML</p>
              <p>CSS</p>
              <p>SCSS/SASS</p>
              <p>JavaScript</p>
              <p>TypeScript</p>
              <p>React</p>
              <p>Angular</p>
              <p>TailwindCSS</p>
              <p>Bootstrap</p>
            </div>
          </div>
          {/* Card Two */}
          <div className="mt-10 w-[70%] md:w-[40%] lg:w-72 mx-auto flex flex-col justify-center bg-purple-900 rounded-3xl hover:transform hover:scale-110 duration-500">
            {" "}
            <div className="h-12 flex justify-center items-center bg-purple-600 rounded-t-2xl">
              <FaCode className="size-7 pr-1" />
              <h2>Back End</h2>
            </div>
            <div className="text-center h-60 pt-2 flex flex-col">
              <p>NodeJS</p>
              <p>ExpressJS</p>
              <p>MySQL</p>
              <p>MongoDB</p>
              <p>Restful APIs</p>
            </div>
          </div>

          {/* Card three */}
          <div className="mt-10 w-[70%] md:w-[40%] lg:w-72 mx-auto flex flex-col justify-center bg-purple-900 rounded-3xl transform hover:scale-110 duration-500">
            {" "}
            <div className="h-12 flex justify-center items-center bg-purple-600 rounded-t-2xl">
              <GiAutoRepair className="size-7 pr-1" />
              <h2>Other</h2>
            </div>
            <div className="text-center h-60 pt-2 flex flex-col">
              <p>Netlify</p>
              <p>Vercel</p>
              <p>Supabase</p>
              <p>WebStorm</p>
              <p>Git</p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Cards;
