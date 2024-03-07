import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AnimationPhone from "./components/AnimationPhone";
import Cards from "./components/Cards";

function App() {
  return (
    <div className="w-screen h-full text-gray-50 bg-custom-dark ">
      <Navbar />
      <Hero />
      <AnimationPhone />
      <Cards />
    </div>
  );
}

export default App;
