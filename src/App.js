import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Mintro from "./Components/Mintro/Mintro";
import Services from "./Components/Services/Services";
import Experience from "./Components/Experience/Experience";
import Work from "./Components/Work/Work";

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Mintro/>
     <Services/>
     <Experience/>
     <Work/>
  
    </div>
  );
}

export default App;
