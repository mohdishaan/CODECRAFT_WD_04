import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import About from "./Components/About"
import Resume from './Components/Resume';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="bg-white text-black font-sans">
      <Navbar />
      <Hero />
      <About />
      <Resume />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
