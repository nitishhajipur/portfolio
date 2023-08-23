// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Skills from "./Skills";
import Resume from "./Resume";
import HomeIcon from "@mui/icons-material/Home";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import AttractionsIcon from "@mui/icons-material/Attractions";
import InfoIcon from "@mui/icons-material/Info";
import { HashLink, NavHashLink } from "react-router-hash-link";
const NavBar = () => {
  const [activeSection, setActiveSection] = React.useState("");
  React.useEffect(() => {
    //  const handleScroll = () => {
    //   const sectionOneTop:any = document?.getElementById("hero")?.offsetTop;
    //   const sectionTwoTop:any = document?.getElementById("about")?.offsetTop;
    //   const sectionThreeTop:any = document.getElementById("skills")?.offsetTop;
    //   const sectionFourTop:any = document?.getElementById("resume")?.offsetTop;
    //   const sectionFiveTop:any = document.getElementById("contact")?.offsetTop;


    //   const scrollPosition = window.scrollY;
    //   console.log("27.....",scrollPosition,sectionTwoTop,sectionThreeTop,sectionFourTop,sectionOneTop)

    //   if (scrollPosition >= sectionFiveTop) {
    //     setActiveSection("contact");
    //   } else if (scrollPosition >= sectionFourTop) {
    //     setActiveSection("resume");
    //   }
    //   else if (scrollPosition >= sectionThreeTop) {
    //     setActiveSection("skills");
    //   } else if (scrollPosition >= sectionTwoTop) {
    //     setActiveSection("about");
    //   }
    //    else {
    //     setActiveSection("hero");
    //   }
    // };

    // document.addEventListener("scroll", handleScroll);

    // return () => {
    //   document.removeEventListener("scroll", handleScroll);
    // };
    //Function to handle scroll
    // const handleScroll = () => {
    //   const sections = document.querySelectorAll("[id]");
    //   let currentActive = "";
    //   sections.forEach((section: any) => {
    //     console.log("119..",section.id)
    //     const rect = section.getBoundingClientRect();
    //     console.log("121...",rect,rect.bottom,rect.top)
    //     if (rect.top <= 0 && rect.bottom > 0) {
    //       console.log("122..",section.id)
    //       currentActive = section.id;
    //     }
    //     console.log("120...", currentActive);
    //   });
    //   setActiveSection(currentActive);
    //   console.log("126...", sections);
    // };

    // window.addEventListener("scroll", handleScroll);
    // return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
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
    <div className="navbar">
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
        <li className={activeSection === 'hero' ? 'active' : ''}>
          <HashLink
            scroll={(el: any) => el.scrollIntoView({ behavior: "smooth" })}
            to={"/#hero"}
          >
           <HomeIcon /> Home
          </HashLink>
        </li>
        <li>
          <HashLink
            scroll={(el: any) => el.scrollIntoView({ behavior: "smooth" })}
            to={"/#about"}
          >
           <PermIdentityIcon /> About
          </HashLink>
        </li>
        <li>
          <HashLink
            scroll={(el: any) => el.scrollIntoView({ behavior: "smooth" })}
            to={"/#skills"}
          >
            <AttractionsIcon /> Skills
          </HashLink>
        </li>
        <li>
          <HashLink
            scroll={(el: any) => el.scrollIntoView({ behavior: "smooth" })}
            to={"/#resume"}
          >
            <TextSnippetIcon /> Resume
          </HashLink>
        </li>
        <li>
          <HashLink
            scroll={(el: any) => el.scrollIntoView({ behavior: "smooth" })}
            to={"/#contact"}
          >
           <InfoIcon /> Contact
          </HashLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
