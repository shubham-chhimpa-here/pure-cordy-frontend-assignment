import './App.css'
import Articles from './components/Articles'
import Features from './components/Features'
import Footer from './components/Footer'
import GetDemo from './components/GetDemo'
import HeroComponent from './components/HeroComponent'
import Navbar from './components/Navbar'
import OurClients from './components/OurClients'
import Reviews from './components/Reviews'
import SectionFirst from './components/SectionFirst'
import Stats from './components/Stats'
import img2 from './assets/img2.png'
import img5 from './assets/img5.png'
import SectionSecond from './components/SectionSecond'
function App() {

  return (
    <>
      <Navbar />
      <HeroComponent data={{ imgSrc: img2 }} />
      <OurClients />
      <Features />
      <SectionFirst/>
      <Stats />
      <SectionSecond  />
      <Reviews data={{ imgSrc: img5 }} />
      <Articles />
      <GetDemo />
      <Footer />
    </>
  )
}

export default App
