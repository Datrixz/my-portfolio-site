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
              I am a Web Developer. Currently I'm Under
              Graduating in Computer Science Field. I Mostly like to do frontend stuffs in React.js and using various libraries. I also have some basic knowledge of backend which involve Node.js. And some apis to fetch data like Axios.
            </Typography>
          </Box>
        </Box>
        </Fade>
      </Box>
    </>
  );
};

export default About;
