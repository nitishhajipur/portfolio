import React from "react";
import Frame from "./components/Frame";
import AvatarImage from "./assests/AvatarImage.jpg";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import './components/styles.scss'

export default function App() {
  return (
    <div>
      {/* <NavBar /> */}
      {/* <div className="container">
        <div className="row"> 
          <div className="col-4">
            <NavBar />
          </div>
          <div className="col-8" style={{ width: "100%", height: "50%" }}>
            <img
              src={AvatarImage}
              alt="Home"
              style={{ height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </div> */}
      {/* <Frame /> */}
      <Router>
      <Routes>
      <Route  path="/" element={<Frame />} />
      </Routes>
      </Router>
    </div>
  );
}
