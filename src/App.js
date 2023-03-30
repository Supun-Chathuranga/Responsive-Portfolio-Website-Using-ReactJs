import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Mintro from "./Components/Mintro/Mintro";
import Services from "./Components/Services/Services";
import Experience from "./Components/Experience/Experience";

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Mintro/>
     <Services/>
     <Experience/>
  
    </div>
  );
}

export default App;
