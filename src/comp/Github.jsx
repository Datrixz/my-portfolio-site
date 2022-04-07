import React from "react";
import Grid from "@mui/material/Grid";
import { Box, Divider, Link, Paper, Typography } from "@mui/material";
import { Fade } from "react-reveal";
import { GitHub } from "@mui/icons-material";

const imgs = [
  {
    name: "E-Commerce ui",
    url: "/img/fashan.png",
    tech: "React.js, Styled Components, React-router",
    demo: "Fashan.netlify.app"
  },
  {
    name: "Blog Website with CMS",
    url: "/img/blogv.png",
    tech: "React.js, Sanity.io, MUI, React-router",
    demo: "BlogV.netlify.app"
  },
  {
    name: "Dairy Webapp ui mockup",
    url: "/img/dairymock.png",
    tech: "React.js, MUI, React-router",
    demo: "DairyMock.netlify.app"
  },
  {
    name: "Todo List ui",
    url: "/img/todoui.png",
    tech: "React.js, Tailwindcss, React-router",
    demo: "TodoAppUI.netlify.app"
  },
  {
    name: "Anime Quote Generator",
    url: "/img/animq.png",
    tech: "React.js, mui, React-router, Axios",
    demo: "AnimQ.netlify.app"
  },
];

const img = imgs.map((img) => {
  return (
    <Grid item xs={12} sm={4} md={4}>
      <Fade top cascade>
        <Paper
          elevation={3}
          sx={{
            pb: 1,
          }}
        >
          <Typography
            variant="h6"
            color="initial"
            sx={{
              py: 2,
            }}
          >
            <Fade top cascade>
              {img.name}
            </Fade>
          </Typography>
          <Divider/>
          <img src={img.url} alt="alt" width="100%" />
          <Divider/>

          <Box
            sx={{
              display: "flex",
              alignItems: "center"
            }}
          >
            <Typography
              variant="body1"
              color="initial"
              textAlign="left"
              sx={{
                ml: 1,
                flexGrow: 1,
              }}
            >
              Technologies. <Typography variant="body2" sx={{
                fontFamily: "sans-serif"
              }}>{img.tech}</Typography>
              <Typography variant="body2">Demo:{"  "}
              <Link href={`https://${img.demo}`} target="_blank">{img.demo}</Link>
              </Typography>
            </Typography>
            <GitHub fontSize="large" sx={{ mr: 1 }} />
          </Box>
        </Paper>
      </Fade>
    </Grid>
  );
});

const Art = () => {
  return (
    <Box
      sx={{
        m: 2,
      }}
    >
      <Grid container spacing={2}>
        {img}
      </Grid>
    </Box>
  );
};

export default Art;
