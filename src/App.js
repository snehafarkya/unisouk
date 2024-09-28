import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Testimonial from './components/Testimonial';
import About from './components/About';
import Features from './components/Features';
import Team from './components/Team';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App mx-4 md:mx-auto">
        <Navbar/>
        <Hero/>
        <Testimonial/>
        <About/>
        <Features/>
        <Team/>
        <Projects/>
        <Footer/>
    </div>
  );
}

export default App;
