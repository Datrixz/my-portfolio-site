import About from "./comp/About";
import Main from "./comp/Main";
import Skills from "./comp/Skills";
import Contact from "./comp/Contact";
import Footer from "./comp/Footer";
import Work from "./comp/Work";
import {
  AppBar,
  Button,
  Drawer,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Box } from "@mui/system";
import { Divider } from "@mui/material";
import { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CodeIcon from "@mui/icons-material/Code";
import GitHubIcon from "@mui/icons-material/GitHub";
import ContactsIcon from "@mui/icons-material/Contacts";

function App() {
  const theme = useTheme();
  const flag = useMediaQuery(theme.breakpoints.up("sm"));
  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <div className="App">
      <Box>
        <AppBar position="fixed" color="grey">
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant={flag ? "h4" : "h5"}
              component="div"
              sx={{ fontFamily: "Poppins", ml: { sm: 4 } }}
            >
              Pranjal
            </Typography>

            <Box
              sx={{
                mr: { sm: 4 },
                display: { xs: "none", md: "block" },
              }}
            >
              <Button href="#" sx={{ fontFamily: "Poppins", color: "black" }}>
                Home
              </Button>
              <Button
                href="#about"
                sx={{ fontFamily: "Poppins", color: "black" }}
              >
                About
              </Button>
              <Button
                href="#skills"
                sx={{ fontFamily: "Poppins", color: "black" }}
              >
                Skills
              </Button>
              <Button
                href="#work"
                sx={{ fontFamily: "Poppins", color: "black" }}
              >
                Work
              </Button>
              <Button
                href="#contact"
                sx={{ fontFamily: "Poppins", color: "black" }}
              >
                Contact
              </Button>
            </Box>

            <Box
              sx={{
                display: { sm: "none" },
              }}
            >
              <Box>
                <Button
                  sx={{
                    color: "black",
                  }}
                  onClick={toggleDrawer("right", true)}
                >
                  <MenuIcon />
                </Button>
                <Drawer
                  anchor={"right"}
                  open={state["right"]}
                  onClose={toggleDrawer("right", false)}
                >
                  <Box
                    sx={{ width: 250 }}
                    role="presentation"
                    onClick={toggleDrawer("right", false)}
                    onKeyDown={toggleDrawer("right", false)}
                  >
                    <List>
                      <ListItem button>
                        <Button
                          href="#"
                          sx={{
                            color: "black",
                          }}
                        >
                          <ListItemIcon>
                            <HomeIcon />
                          </ListItemIcon>
                          <ListItemText primary="Home" />
                        </Button>
                      </ListItem>

                      <ListItem button>
                        <Button
                          href="#about"
                          sx={{
                            color: "black",
                          }}
                        >
                          <ListItemIcon>
                            <InfoIcon />
                          </ListItemIcon>
                          <ListItemText primary="About" />
                        </Button>
                      </ListItem>

                      <ListItem button>
                        <Button
                          href="/#skills"
                          sx={{
                            color: "black",
                          }}
                        >
                          <ListItemIcon>
                            <CodeIcon />
                          </ListItemIcon>
                          <ListItemText primary="Skills" />
                        </Button>
                      </ListItem>

                      <ListItem button>
                        <Button
                          href="#work"
                          sx={{
                            color: "black",
                          }}
                        >
                          <ListItemIcon>
                            <GitHubIcon />
                          </ListItemIcon>
                          <ListItemText primary="Work" />
                        </Button>
                      </ListItem>

                      <ListItem button>
                        <Button
                          href="#contact"
                          sx={{
                            color: "black",
                          }}
                        >
                          <ListItemIcon>
                            <ContactsIcon />
                          </ListItemIcon>
                          <ListItemText primary="Contact" />
                        </Button>
                      </ListItem>
                    </List>
                  </Box>{" "}
                </Drawer>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

      {/* Main Section */}
      <div id="main">
        <Main />
      </div>
      <Divider />

      {/* About Section */}
      <div id="about">
        <About />
      </div>
      <Divider />

      {/* Skills Section */}
      <div id="skills">
        <Skills />
      </div>
      <Divider />

      {/* Github Section */}
      <div id="work">
        <Work />
      </div>
      <Divider />

      {/*Contact Section */}
      <div id="contact">
        <Contact />
      </div>
      <Divider />

      {/* Footer Section */}
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
