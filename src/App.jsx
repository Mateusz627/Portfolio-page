import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AnimationPhone from "./components/AnimationPhone";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-full h-full text-gray-50 bg-custom-dark ">
      <Navbar />
      <Hero />
      <AnimationPhone />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
