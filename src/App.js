import Intro from './components/intro/Intro';
import About from './components/about/about';
import Experience from './components/experience/experience';
// import Projects from './components/projects/projects';
import Contact from './components/contact/contact';
import Toggle from './components/Toggle/Toggle';
import './App.css';
import { useContext } from "react";
import { ThemeContext } from "./context";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div style={{
      backgroundColor: darkMode ? "#222" : "white",
      color: darkMode && "white",
    }}>
      <Toggle/>
      <Intro/>
      <About/>
      <Experience/>
      
      <Contact/>
    </div>
  );
}

export default App;
