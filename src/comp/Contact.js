import { Link, Button, useTheme, useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Fade } from "react-reveal";
import emailjs from "@emailjs/browser";
import { useRef, useState, forwardRef } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Contact = () => {
  const theme = useTheme();
  const upsm = useMediaQuery(theme.breakpoints.up("sm"));
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

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
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_d98e9zh",
        "template_jp0b5jn",
        form.current,
        "-GXuZJL3fcy4Xbg7k"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

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
       <Snackbar
            anchorOrigin={{vertical: 'top', horizontal:'center'} }
            open={open}
            autoHideDuration={4000}
            onClose={handleClose}
          >
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{ width: "100%" }}
            >
              Details Sent!
            </Alert>
          </Snackbar>
      <Fade top cascade>
        {contactLink}

        <Box sx={{ px: { xs: 1, sm: 2 }, maxWidth: "820px", mx: "auto" }}>
          <Box ref={form} onSubmit={sendEmail} component="form" noValidate autoComplete="off">
            <TextField
              id="outlined-basic"
              label="Name"
              name="name"
              variant="outlined"
              margin="normal"
              type="text"
              fullWidth
              required
            />
            <TextField
              id="outlined-basic"
              label="Email"
              name="email"
              variant="outlined"
              type="email"
              fullWidth
              required
              sx={{
                my: 2,
              }}
            />
            <TextField
              id="outlined-basic"
              label=""
              name="text"
              variant="outlined"
              margin="normal"
              type="text"
              fullWidth
              multiline
              rows={upsm ? 8 : 5}
              required
            />

            <Button
            type="submit"
              onClick={handleClick}
              variant="contained"
              color="primary"
              size="large"
              sx={{ mt: 1, px: 5 }}
            >
              Send
            </Button>
          </Box>
         
        </Box>
      </Fade>
    </Box>
  );
};

export default Contact;
