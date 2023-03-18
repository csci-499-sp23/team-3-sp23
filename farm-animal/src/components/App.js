import "../styles/App.css"
import Navbar from "./navbar/Navbar";
import Info from "./navbar/info/Info";
import Contact from "./navbar/Contact";
import Board from "./navbar/Leaderboard";
import Login from "./auth/Login";
import Register from "./auth/Register";
import ForgotP from "./navbar/forgot";
import { Route, Routes } from "react-router-dom";
import Home from "./navbar/Home";
import Welcome from "./gameplay/Welcome";
import { AuthProvider } from "./context/AuthContext";
import SuccessReg from "./auth/SuccessReg";
import UserProfile from "./auth/UserProfile";
import PrivateRoute from "./auth/PrivateRoute";
import ForgotPassword from "./auth/ForgotPassword"


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="app-container">
        <AuthProvider>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/info" element={<Info />} />
            <Route path="/leaderboard" element={<Board />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/ForgotP" element={<ForgotP />} />
            <Route path="/success-register" element={<SuccessReg />} />
            <Route path="/user-profile" element={
              <PrivateRoute>
                <UserProfile />
              </PrivateRoute>} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>
        </AuthProvider>
      </div>
    </div>
  );
}

export default App;
