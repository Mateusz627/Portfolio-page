import Nav from "./Nav";
import Footer from "../Footer";
import { Link, ScrollRestoration } from "react-router-dom";
import { FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { motion } from "framer-motion";

function ContactMe() {
  return (
    <div className="w-screen h-screen text-gray-50 bg-custom-dark ">
      <Nav />

      <div className="p-4 text-center mt-10 text-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          {" "}
          <h2 className="text-2xl">
            Choose <span className="text-purple-500">a way</span> to{" "}
            <span className="text-purple-500">contact me</span> :
          </h2>
        </motion.div>

        <ul className="mt-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.2 }}
          >
            <li className=" p-4 flex justify-center items-center gap-4 ">
              <motion.div
                whileHover={{ rotateY: 180 }}
                transition={{ duration: 1 }}
              >
                <FaLinkedin className="size-8" />
              </motion.div>

              <p>
                <Link to={`https://www.linkedin.com/in/mateusz-siuda/`}>
                  Linkedin <ScrollRestoration />
                </Link>
              </p>
            </li>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
          >
            <li className=" p-4 flex justify-center items-center gap-4">
              <motion.div
                whileHover={{ rotateY: 180 }}
                transition={{ duration: 1 }}
              >
                {" "}
                <TfiEmail className="size-8" />{" "}
              </motion.div>
              <p>mateusz.bizneso@gmail.com</p>
            </li>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.4 }}
          >
            <li className=" p-4 flex justify-center items-center gap-4">
              <motion.div
                whileHover={{ rotateY: 180 }}
                transition={{ duration: 1 }}
              >
                <FaPhoneAlt className="size-8" />{" "}
              </motion.div>
              <p>+48 502 728 957</p>
            </li>
          </motion.div>
        </ul>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 100 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.4 }}
      >
        <Footer />
      </motion.div>
    </div>
  );
}

export default ContactMe;
