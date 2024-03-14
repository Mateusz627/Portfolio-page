import Nav from "./Nav";
import Spotify from "../subpages/projects/Spotify";
import Ecommerce from "./projects/Ecommerce";
import Footer from "../Footer";

function Projects() {
  return (
    <div className="w-full h-full lg:h-screen text-gray-50 bg-custom-dark ">
      <Nav />
      <div className="flex flex-col justify-center content-center lg:flex-row ">
        <Spotify />
        <Ecommerce />
      </div>
      <Footer />
    </div>
  );
}

export default Projects;
