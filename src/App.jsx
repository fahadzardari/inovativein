import Home from "./Sections/Home"
import Services from "./Sections/Services"
import Footer from "./Sections/Footer"
import About from "./Sections/About"
import Testimonials from "./Sections/Testimonials"
import Benefits from "./Sections/Benefits"

export default function App() {
  return (
    <div className="font-nunito w-full m-0 p-0 overflow-hidden">
        <Home />
        <Services />
        <About />
        <Testimonials />
        <Benefits />
        <Footer />
    </div>  
  )
}
