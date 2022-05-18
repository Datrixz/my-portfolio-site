import { Link, Typography, Box, useTheme, useMediaQuery } from "@mui/material";
import { Fade } from "react-reveal";

const About = () => {
  const theme = useTheme();
  const upsm = useMediaQuery(theme.breakpoints.up("sm"));

  const aboutLink = (
    <Link
      variant={upsm ? "h3" : "h4"}
      component="div"
      color="primary"
      sx={{
        fontFamily: "Poppins",
      }}
    >
      About
    </Link>
  );

  return (
    <>
      <Box
        sx={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          py: 4,
          minHeight: "100vh"
        }}
      >
        <Fade top cascade>
        <Box sx={{ pb: 4 }}>{aboutLink}</Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: { xs: "center", sm: "space-around" },
            alignItems: { xs: "center", sm: "center" },
          }}
        >
          <Box
            component="img"
            height="auto"
            src="img/dp2.jpg"
            alt="my pic"
            sx={{
              borderRadius: "15px",
              width: "300px",
            }}
          />

          <Box sx={{ p: 2, width: { sm: "50%" } }}>
            <Typography
              variant={upsm ? "h4" : "h5"}
              color="initial"
              sx={{ fontFamily: "Poppins", textAlign: { sm: "left" } }}
            >
              I'm Pranjal Vaishnav
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mt: 2, textAlign: { sm: "left" } }}
            >
              I am a passionate Web Developer from India. Currently I'm Under
              Graduating in Computer Science Field. I Mostly like to work at frontend stuffs in React.js and using various libraries including Tailwindcss, MaterialUI, React-Router, Vite, Framer Motion etc. And REST api's to fetch data like Axios. I also have some knowledge of backend which involve Node.js / Express.js. 
            </Typography>
          </Box>
        </Box>
        </Fade>
      </Box>
    </>
  );
};

export default About;
