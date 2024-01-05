import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ForgetPassword from "./components/ForgetPassword";
import AuthProvider from "./AuthContext/AuthContext";
import Dashboard from "./Dashboard/Dashboard"
import RequireAuth from "./AuthContext/RequireAuth";

function App() {
  return (
    <>
      <div className="container">
        <Router>
          <AuthProvider>
        
            <Routes>
              
              <Route path="/" element={<Home />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Signup" element={<Signup />} />
              <Route path="/forgetPassword" element={<ForgetPassword />} />
              <Route path="/Dashboard/*" element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
              } />
            </Routes>
          </AuthProvider>

        </Router>

      </div>

    </>
  )
}

export default App







// import './App.css';
// import Home from './components/Home';
// import Header from "./components/Header";

// function App () {
//   return (
//     <div>
//         <Header />
//         <Home />
//     </div>
     
//   )
// }

// export default App;
