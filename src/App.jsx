import './App.css';
import About from './components/about/About';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Experience from './components/experience/Experience';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';
import ReactGA from 'react-ga';

// ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_CODE);
ReactGA.initialize('UA-217933430-1');
ReactGA.pageview(window.location.pathname + window.location.search);

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
