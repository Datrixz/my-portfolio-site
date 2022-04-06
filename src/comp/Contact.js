import { Link, Button, useTheme, useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Fade } from "react-reveal";

const Contact = () => {
  const theme = useTheme();
  const upsm = useMediaQuery(theme.breakpoints.up("sm"));
  const contactLink = (
    <Link
      variant={upsm ? "h3" : "h4"}
      color="primary"
      sx={{
        fontFamily: "Poppins",
      }}
    >
      Contact
    </Link>
  );

  return (
    <Box
      sx={{
        minHeight: "100vh",
        textAlign: "center",
        py: 4,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Fade top cascade>
        {contactLink}

        <Box sx={{ px: { xs: 1, sm: 2 }, maxWidth: "820px", mx: "auto" }}>
          <Box component="form" noValidate autoComplete="off">
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              margin="normal"
              fullWidth
              required
            />
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              fullWidth
              required
            />
            <TextField
              id="outlined-basic"
              label=""
              variant="outlined"
              margin="normal"
              fullWidth
              multiline
              rows={upsm ? 8 : 5}
              required
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row-reverse",
              mt: 1,
            }}
          >
            <Button variant="contained" color="primary" size="large">
              Send
            </Button>
          </Box>
        </Box>
      </Fade>
    </Box>
  );
};

export default Contact;
