import React from "react";
import Typography from "@mui/material/Typography";
import { Box, Button, Link } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Fade } from "react-reveal";
import Spline from "@splinetool/react-spline";

const Main = () => {
  const theme = useTheme();
  const upsm = useMediaQuery(theme.breakpoints.up("sm"));

  const vt = upsm ? "h2" : "h4";

  const name = (
    <Typography variant={vt} component="span" color="primary">
      Pranjal
    </Typography>
  );

  return (
    <>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          pb: upsm ? 4 : 8,
          mt: 8,
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "-45px",
            width: "100vw",
            overflow: "hidden"
          }}
        >
          <Spline sx={{
            width: "100%",
            height : "auto"
          }} scene="https://draft.spline.design/JgCJmKLUbq9gmGUv/scene.spline" />
        </Box>
        <Box
          sx={{
            pointerEvents: "none",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Fade top>
            <Typography
              variant={vt}
              color="initial"
              sx={{ textAlign: "center" }}
            >
              Hi,
              <br />
              I'm {name}
              <br />
              Web Developer
            </Typography>
            <Button
              href="#footer"
              variant="contained"
              size="large"
              sx={{ mt: 4,
              pointerEvents: 'auto' }}
            >
              Contact
            </Button>
            <Box sx={{ mt: 4, pointerEvents: "auto" }}>
              <Link href="https://www.linkedin.com/in/pranjal-vaishnav" target="_blank" color="#0A66C2">
              <LinkedInIcon fontSize="large" sx={{ mr: 4 }} />
              </Link>
              <Link href="https://github.com/Datrixz?tab=repositories" target="_blank" color="#333333">
              <GitHubIcon fontSize="large" />
              </Link>
            </Box>
          </Fade>
        </Box>
      </Box>
    </>
  );
};

export default Main;
