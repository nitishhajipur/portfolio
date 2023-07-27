import * as React from "react";
import "./style.scss";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import AvatarImage from "../assests/AvatarImage.jpg";
import ProfileImage from "../assests/ProfileImage.jpg";
import MyImage from "../assests/MyImage.jpg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import AttractionsIcon from "@mui/icons-material/Attractions";
import InfoIcon from "@mui/icons-material/Info";
import FileDownloadTwoToneIcon from "@mui/icons-material/FileDownloadTwoTone";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Resume from "./Resume";
import Contact from "./Contact";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const downloadResume = () => {
  let fetchRes = fetch("Nitish_Resume_2YOP .pdf");
  fetchRes.then((res) =>
    res.blob().then((blob) => {
      // Creating new object of PDF file
      const fileURL = window.URL.createObjectURL(blob);
      // Setting various property values
      let alink = document.createElement("a");
      console.log("102..", alink);
      alink.href = fileURL;
      alink.download = "Nitish_Resume_2YOP .pdf ";
      alink.click();
    })
  );
};

export default function Frame() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [activeSection, setActiveSection] = React.useState("");
  React.useEffect(() => {
    //Function to handle scroll
    const handleScroll = () => {
      const sections = document.querySelectorAll("[id]");
      let currentActive = "";
      sections.forEach((section: any) => {
        console.log("119..",section.id)
        const rect = section.getBoundingClientRect();
        if (rect.top <= 0 && rect.bottom > 0) {
          console.log("122..",section.id)
          currentActive = section.id;
        }
        console.log("120...", currentActive);
      });
      setActiveSection(currentActive);
      console.log("126...", sections);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const jumpToReleventDiv = (id: any) => {
    const releventDiv: any = document.getElementById(id);
    releventDiv.scrollIntoView({ behavior: "smooth" });
  };

  const profile = () => {
    return (
      <>
        <div>
          <div className="d-flex justify-content-center align-items-center">
            <img src={MyImage} alt="Logo" className="profile" />
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <h5>Nitish Kumar</h5>
          </div>
          <div className="social-Icons d-flex justify-content-center align-items-center">
            <LinkedInIcon className="social-icons" />
            <FacebookIcon className="social-icons mx-1" />
            <InstagramIcon className="social-icons mx-1" />
            <TwitterIcon className="social-icons" />
          </div>
        </div>
      </>
    );
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <div
            onClick={downloadResume}
            className="w-100 d-flex justify-content-end download-resume"
          >
            Download Resume
            {/* <FileDownloadOutlinedIcon /> */}
          </div>
          {/* <Typography variant="h6" noWrap component="div">
            Download Resume
          </Typography> */}
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        {profile()}
        <List>
          {["Home", "About", "Skills", "Resume", "Contact"].map(
            (text, index) => (
              <ListItem key={text} className={activeSection === 'hero' ? 'active' : ''} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index === 0 ? (
                      <HomeIcon />
                    ) : index === 1 ? (
                      <PermIdentityIcon />
                    ) : index === 2 ? (
                      <AttractionsIcon />
                    ) : index === 3 ? (
                      <TextSnippetIcon />
                    ) : (
                      <InfoIcon />
                    )}
                  </ListItemIcon>
                  <ListItemText
                    onClick={() =>
                      jumpToReleventDiv(
                        index === 0
                          ? "hero"
                          : index === 1
                          ? "about"
                          : index === 2
                          ? "skills"
                          : index === 3
                          ? "resume"
                          : "contact"
                      )
                    }
                    primary={text}
                  />
                  {/* <a href={index === 0 ? "hero" : index === 1 ? "about" : index === 2 ? "skills": index === 3? "resume" : "contact" } className="nav-link scrollto"><ListItemText primary={text} /></a> */}
                </ListItemButton>
              </ListItem>
            )
          )}
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Home />
        <About />
        <Skills />
        <Resume />
        <Contact />
      </Main>
    </Box>
  );
}
