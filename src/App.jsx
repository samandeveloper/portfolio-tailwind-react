import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import About from "./components/About";
import Projects from "./components/Projects";
import { useState } from "react";

const App = () => {
  //states
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <main className={toggle ? "bg-black" : ""}>
      <Navbar toggle={toggle} handleClick={handleClick} />
      <Hero toggle={toggle} />
      <Skills />
      <About toggle={toggle} />
      <Projects />
    </main>
  );
};
export default App;
