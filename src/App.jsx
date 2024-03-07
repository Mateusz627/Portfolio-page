import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
function App() {
  return (
    <div className="w-screen h-full text-gray-50 bg-custom-dark ">
      <Navbar />
      <Hero />
      <Skills />
    </div>
  );
}

export default App;
