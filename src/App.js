import "./App.css";
import ParticleBackground from "./Component/BackGroung/ParticleBackground";
import Nav from "./Component/Nav";
import Home from "./Component/Home"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Skills from './Component/Skills/Skills'
import "bootstrap/dist/css/bootstrap.min.css";   
import ContactUs from './Component/Contact/ContactUs'
import About from './Component/About/About'



function App() {
  return (
    <BrowserRouter>
      <Nav />
      
      <div>
      <ParticleBackground />
      <Routes basename="/portfolio">
      
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/Skills" element={<Skills/>}/>
        <Route exact path="/ContactUs" element={<ContactUs/>}/>
        <Route exact path="/About" element={<About/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}



export default App;
