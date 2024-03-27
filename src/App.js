import './App.css';
import 'animate.css';
import NavBar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects'
import Contact from './components/Contact';
import Education from './components/Education';
import Footer from './components/Footer';
import Experience from './components/Experience';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Education />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
