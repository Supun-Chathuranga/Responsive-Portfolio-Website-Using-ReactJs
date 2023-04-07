import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Mintro from "./Components/Mintro/Mintro";
import Services from "./Components/Services/Services";
import Experience from "./Components/Experience/Experience";
import Work from "./Components/Work/Work";
import Portfoli from "./Components/Portfoli/Portfoli";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import {themeContext} from "./Context";
import { useContext } from "react";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App"
    style={{
      background : darkMode? 'black':'',
      color : darkMode? 'white':''
    }}
    >
     <Navbar/>
     <Mintro/>
     <Services/>
     <Experience/>
     <Work/>
     <Portfoli/>
     <Contact/>
     <Footer/>
  
    </div>
  );
}

export default App;
