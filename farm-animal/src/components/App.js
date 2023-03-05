import "../styles/App.css"
import Navbar from "./navbar/Navbar";
import Info from "./navbar/Info";
import Contact from "./navbar/Contact";
import Board from "./navbar/Leaderboard";
import Login from "./navbar/Login";
import Register from "./navbar/Register";
import { Route, Routes } from "react-router-dom";
import Home from "./navbar/Home";
//import firebase.js
// import firebase from "./firebase"

function App() {
  //for testing firebase 
  // const firebaseApp= firebase.apps[0];
  return (
    <div className="App">
      {/* {
        JSON.stringify(firebaseApp)
      } */}
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/info" element={<Info />} />
          <Route path="/leaderboard" element={<Board />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
