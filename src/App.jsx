import gsap from "gsap"
import Hero from "./components/Hero"
import NavBar from "./components/NavBar"
import ProductViewer from "./components/ProductViewer"
import { ScrollTrigger } from "gsap/all"
import Showcase from "./components/Showcase"
import Performance from "./components/Performance"


gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <main>
      <NavBar />
      <Hero />
      <ProductViewer />
      <Showcase />
      <Performance />
    </main>
  )
}

export default App