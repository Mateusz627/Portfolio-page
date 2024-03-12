import Navbar from "../Navbar";
import Footer from "../Footer";
import { Link, ScrollRestoration } from "react-router-dom";
import { FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";

function ContactMe() {
  return (
    <div className="w-screen h-screen text-gray-50 bg-custom-dark ">
      <Navbar />
      <div className="p-4 text-center mt-10 text-xl">
        <h2 className="text-xl">
          Choose <span className="text-purple-500">a way</span> to{" "}
          <span className="text-purple-500">contact me</span> :
        </h2>

        <ul className="mt-10">
          <li className=" p-4 flex justify-center items-center gap-4 ">
            <FaLinkedin className="size-8" />
            <p>
              <Link to={`https://www.linkedin.com/in/mateusz-siuda/`}>
                Linkedin <ScrollRestoration />
              </Link>
            </p>
          </li>
          <li className=" p-4 flex justify-center items-center gap-4">
            <TfiEmail className="size-8" />
            <p>mateusz.bizneso@gmail.com</p>
          </li>
          <li className=" p-4 flex justify-center items-center gap-4">
            <FaPhoneAlt className="size-8" />
            <p>+48 502 728 957</p>
          </li>
        </ul>
      </div>

      <Footer />
    </div>
  );
}

export default ContactMe;
