// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Skills from "./Skills";
import Resume from "./Resume";
import { HashLink, NavHashLink } from "react-router-hash-link";
const NavBar = () => {
  return (
    // <React.Fragment>
    //      </React.Fragment>
    // <Router>
    //   <div>
    //     <nav>
    //       <div>
    //       <Link to="/#hero">Home</Link>
    //       </div>
    //       <Link to="/#about">About</Link>
    //       <div>
    //       <Link to="/#skills">Skills</Link>
    //       </div>
    //       <div>
    //       <Link to="/#resume">Resume</Link>
    //       </div>
    //       <div>
    //       <Link to="/#contact">Contact</Link>
    //       </div>
    //     </nav>
    //     <Routes>
    //       <Route path="/#hero" element={<Home />} />
    //       <Route  path="/#about" element={<About />} />
    //       <Route path="/#skills" element={<Skills />} />
    //       <Route  path="/#resume" element={<Resume />} />
    //       <Route path="/#contact" element={<Contact />} />
    //     </Routes>
    //     {/* <Route  path="/" element={<Home />} /> */}
    //     {/* <Route exact path="/"> */}
    //     {/* <Home /> */}
    //     {/* </Route> */}
    //     {/* <Route path="/#section-two">
    //       <SectionTwo />
    //     </Route>
    //     <Route path="/#section-three">
    //       <SectionThree />
    //     </Route> */}
    //   </div>
    // </Router>
    <div>
      <ul>
        {/* <li>
          <NavHashLink
            smooth
            activeStyle={{ fontWeight: "bold" }}
            to={"/#hero "}
          >
            Home
          </NavHashLink>
        </li> */}
        <li>
          <HashLink
            scroll={(el: any) => el.scrollIntoView({ behavior: "smooth" })}
            to={"/#hero"}
          >
            Home
          </HashLink>
        </li>
        <li>
          <HashLink
            scroll={(el: any) => el.scrollIntoView({ behavior: "smooth" })}
            to={"/#about"}
          >
            About
          </HashLink>
        </li>
        <li>
          <HashLink
            scroll={(el: any) => el.scrollIntoView({ behavior: "smooth" })}
            to={"/#skills"}
          >
            Skills
          </HashLink>
        </li>
        <li>
          <HashLink
            scroll={(el: any) => el.scrollIntoView({ behavior: "smooth" })}
            to={"/#resume"}
          >
            Resume
          </HashLink>
        </li>
        <li>
          <HashLink
            scroll={(el: any) => el.scrollIntoView({ behavior: "smooth" })}
            to={"/#contact"}
          >
            Contact
          </HashLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
