import "../styles/App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
//import PlayStart custom API 
import { Route, Routes } from "react-router-dom";

//the whole website layout
function App() {
  return (
    <div className="App">
      <h1>Main Page hi hi!</h1>
      

    </div>
  );
}

/* CAN PASTE THIS SECTION BACK UNDER return( when implemented
<Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

*/
export default App;
