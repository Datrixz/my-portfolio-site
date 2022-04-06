import {
  AppBar,
  Link,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import SideBar from "./SideBar";

const NavBar = () => {
  const theme = useTheme();
  const flag = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Box>
      <AppBar position="static" color="grey">
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
            <Link
              color="text.primary"
              underline="none"
              variant="h5"
              component="span"
              sx={{ fontFamily: "Poppins" }}
            >
              Home
            </Link>
            <Link
              color="text.primary"
              underline="none"
              variant="body1"
              component="span"
              sx={{ fontFamily: "Poppins", mx: 2 }}
            >
              About
            </Link>
            <Link
              color="text.primary"
              underline="none"
              variant="h5"
              component="span"
              sx={{ fontFamily: "Poppins", textDecoration: 'none' }}
            >
              Skills
            </Link>
            <Link
              color="text.primary"
              underline="none"
              variant="h6"
              component="span"
              sx={{ fontFamily: "Poppins", mx: 2 }}
            >
              Work
            </Link>
            <Link
              color="text.primary"
              underline="none"
              variant="h6"
              component="span"
              sx={{ fontFamily: "Poppins" }}
            >
              Contact
            </Link>
          </Box>
          
          <Box sx={{
              display: {sm: 'none'}
          }}>
          <SideBar/>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
