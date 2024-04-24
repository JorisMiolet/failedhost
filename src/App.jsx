import { useEffect } from 'react'
import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { Hero, Cijferlijst, Bedrijf, Projects, Passies, Tools, Download} from './components'
function App() {

  useEffect(() => {
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Refresh ScrollTrigger after the layout is stable
    ScrollTrigger.refresh();

    return () => {
      // Clear all ScrollTriggers on unmount
      ScrollTrigger.clearScrollMemory();
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <>
      <Hero />
      <Cijferlijst />
      <Bedrijf />
      <Projects />
      <Passies />
      <Tools />
      <Download/>
    </>
  )
}

export default App
