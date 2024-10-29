
import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Service from './pages/Service';
import CarouselComp from './components/CarouselComp';
import Productdevelopment from './pages/Productdevelopment';
import Websitedevelopment from './pages/Websitedevelopment';
import AISolution from './pages/AISolution';
import Cloudcomputing from './pages/Cloudcomputing';
import Blockchaindevelopment from './pages/Blockchaindevelopment';
import Digitalmarketing from './pages/Digitalmarketing';
import Mobileappdevelopment from './pages/Mobileappdevelopment';
import Footer from './components/Footer';
import Portfolio from './pages/Portfolio';
import Career from './pages/Career';
import TrainingConsulting from './pages/TrainingConsulting';
import OurClients from './pages/OurClients';
import Brochure from './pages/Brochure';
import Technology from './pages/Technology';
import Products from './pages/Products';
import Mobileapp from './pages/Mobileapp';
import WhatsAppFloatingIcon from './pages/WhatsAppFloatingIcon';
import ScrollToTop from './components/ScrollToTop';
import IOTSolution from './pages/IOTSolution';
import Internship from './pages/Internship';

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <Router>
      <ScrollToTop/>

        <Routes>
         <Route path="/Footer"  element={<Footer/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/about"element={<About/>}/>
        <Route path="/service"element={<Service/>}/>
        <Route path="/contact"element={<Contact/>}/>
        <Route path="/carouselcomp"element={<CarouselComp/>}/>
        <Route path="/Productdevelopment"element={<Productdevelopment/>}/>
        <Route path="/Websitedevelopment" element={<Websitedevelopment/>}/>
        <Route path="/Mobileappdevelopment" element={<Mobileappdevelopment/>}/>
        <Route path="/AISolution" element={<AISolution/>}/>
        <Route path="/Cloudcomputing" element={<Cloudcomputing/>}/>
        <Route path="/Blockchaindevelopment" element={<Blockchaindevelopment/>}/>
        <Route path="/Digitalmarketing"element={<Digitalmarketing/>}/>
        <Route path="/Portfolio" element={<Portfolio/>}/>
        <Route path="/Career" element={<Career/>}/>
        <Route path="/TrainingConsulting" element={<TrainingConsulting/>}/>
       <Route path="/OurClients" element={<OurClients/>}/>
       <Route path="/Brochure" element={<Brochure/>}/>
       <Route path="/Technology" element={<Technology/>}/>
       <Route path="/Products" element={<Products/>}/>
       <Route path="/Mobileapp" element={<Mobileapp/>}/>
       <Route path="/IOTSolution" element={<IOTSolution/>}/>
       <Route path="/Internship" element={<Internship/>}/>
      </Routes>
     
      <WhatsAppFloatingIcon/>
      <Footer />
      </Router>
      
    </div>
  );
}
export default App;
