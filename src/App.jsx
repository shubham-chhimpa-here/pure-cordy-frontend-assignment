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

function App() {

  return (
    <>
   <Navbar />
   <HeroComponent />
   <OurClients />
   <Features />
   <SectionFirst />
   <Stats />
   <SectionFirst />
   <Reviews />
   <Articles />
   <GetDemo />
   <Footer />
    </>
  )
}

export default App
