import { Box, Link, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { Fade } from "react-reveal";
import Github from "./Github";

const Work = () => {
  const theme = useTheme();
  const upsm = useMediaQuery(theme.breakpoints.up("sm"));

  const workLink = (
    <Link
      variant={upsm ? "h3" : "h4"}
      color="primary"
      sx={{
        fontFamily: "Poppins",
      }}
    >
      Works
    </Link>
  );

  return (
      <Box
        sx={{
          textAlign: "center",
          py: 4,
          minHeight: "100vh"
        }}
      >
        <Fade top cascade>
          <Box sx={{ pb: 2 }}> {workLink} </Box>
        </Fade>
        <Box>
          <Fade top cascade>
            <Typography
              variant={upsm ? "h4" : "h5"}
              color="initial"
              sx={{ fontFamily: "Poppins" }}
            >
              My Works
            </Typography>
          </Fade>
        </Box>

        <Github />
      </Box>
  );
};

export default Work;
