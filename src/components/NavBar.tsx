import * as React from "react";
import "./style.scss";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import HomeIcon from "@mui/icons-material/Home";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import CancelIcon from "@mui/icons-material/Cancel";
import ProfileImage from "../assests/ProfileImage.jpg";
import AvatarImage from "../assests/AvatarImage.jpg";
import MyImage from "../assests/MyImage.jpg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function NavBar() {
  const [navBarState, setNavBarState] = React.useState(true);
  const [activeSection, setActiveSection] = React.useState("");
  React.useEffect(() => {
    //Function to handle scroll
    alert("...")
    const handleScroll = () => {
      const sections = document.querySelectorAll("[id]");
      let currentActive = '';
      setActiveSection(currentActive);
      console.log("35...",sections);
    };

    window.addEventListener('scroll',handleScroll);
  }, []);
  const toggleDrawer = () => {
    setNavBarState(!navBarState);
  };

  const profile = () => {
    return (
      <>
        <div>
          <img src={MyImage} alt="Logo" className="profile" />
          <div>Nitish Kumar</div>
          <div className="social-Icons">
            <LinkedInIcon />
            <FacebookIcon />
            <InstagramIcon />
            <TwitterIcon />
          </div>
        </div>
      </>
    );
  };

  const navList = () => {
    return (
      <>
        <Box sx={{ width: "100%", maxWidth: 360 }}>
          <nav aria-label="main mailbox folders">
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <PermIdentityIcon />
                  </ListItemIcon>
                  <ListItemText primary="About" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <TextSnippetIcon />
                  </ListItemIcon>
                  <ListItemText primary="Resume" />
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
        </Box>
      </>
    );
  };
  return (
    <React.Fragment>
      <Button onClick={toggleDrawer}>
        <MenuIcon />
      </Button>
      <Drawer className="drawer" open={navBarState} /*onClose={toggleDrawer}*/>
        {profile()}
        {navList()}
        {/* <CancelIcon onClick={toggleDrawer} />  */}
      </Drawer>
    </React.Fragment>
  );
}
