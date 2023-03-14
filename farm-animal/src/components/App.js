import "../styles/App.css"
import Navbar from "./navbar/Navbar";
import Info from "./navbar/info/Info";
import Contact from "./navbar/Contact";
import Board from "./navbar/Leaderboard";
import Login from "./navbar/Login";
import Register from "./navbar/Register";
import { ForgotP, ForgotU } from "./navbar/forgot";
import { Route, Routes } from "react-router-dom";
import Home from "./navbar/Home";
import Welcome from "./gameplay/Welcome";

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
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/info" element={<Info />} />
          <Route path="/leaderboard" element={<Board />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/welcome" element={<Welcome />} />
          {/* create a route tag in order to use it in the "to" in Link*/}
          <Route path="/ForgotP" element={<ForgotP />} />
          <Route path="/ForgotU" element={<ForgotU />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
