import React from "react";
import {
  Box,
  Link,
  Typography,
  LinearProgress,
  Paper,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Fade } from "react-reveal";

const skills = [
  {
    name: "HTML",
    per: 50,
    icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgwIiBoZWlnaHQ9IjQ4MCIKdmlld0JveD0iMCAwIDQ4IDQ4IgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxwYXRoIGZpbGw9IiNFNjUxMDAiIGQ9Ik00MSw1SDdsMywzNGwxNCw0bDE0LTRMNDEsNUw0MSw1eiI+PC9wYXRoPjxwYXRoIGZpbGw9IiNGRjZEMDAiIGQ9Ik0yNCA4TDI0IDM5LjkgMzUuMiAzNi43IDM3LjcgOHoiPjwvcGF0aD48cGF0aCBmaWxsPSIjRkZGIiBkPSJNMjQsMjV2LTRoOC42bC0wLjcsMTEuNUwyNCwzNS4xdi00LjJsNC4xLTEuNGwwLjMtNC41SDI0eiBNMzIuOSwxN2wwLjMtNEgyNHY0SDMyLjl6Ij48L3BhdGg+PHBhdGggZmlsbD0iI0VFRSIgZD0iTTI0LDMwLjl2NC4ybC03LjktMi42TDE1LjcsMjdoNGwwLjIsMi41TDI0LDMwLjl6IE0xOS4xLDE3SDI0di00aC05LjFsMC43LDEySDI0di00aC00LjZMMTkuMSwxN3oiPjwvcGF0aD48L3N2Zz4=",
  },
  {
    name: "CSS",
    per: 50,
    icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgwIiBoZWlnaHQ9IjQ4MCIKdmlld0JveD0iMCAwIDQ4IDQ4IgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxwYXRoIGZpbGw9IiMwMjc3QkQiIGQ9Ik00MSw1SDdsMywzNGwxNCw0bDE0LTRMNDEsNUw0MSw1eiI+PC9wYXRoPjxwYXRoIGZpbGw9IiMwMzlCRTUiIGQ9Ik0yNCA4TDI0IDM5LjkgMzUuMiAzNi43IDM3LjcgOHoiPjwvcGF0aD48cGF0aCBmaWxsPSIjRkZGIiBkPSJNMzMuMSAxM0wyNCAxMyAyNCAxNyAyOC45IDE3IDI4LjYgMjEgMjQgMjEgMjQgMjUgMjguNCAyNSAyOC4xIDI5LjUgMjQgMzAuOSAyNCAzNS4xIDMxLjkgMzIuNSAzMi42IDIxIDMyLjYgMjF6Ij48L3BhdGg+PHBhdGggZmlsbD0iI0VFRSIgZD0iTTI0LDEzdjRoLTguOWwtMC4zLTRIMjR6IE0xOS40LDIxbDAuMiw0SDI0di00SDE5LjR6IE0xOS44LDI3aC00bDAuMyw1LjVsNy45LDIuNnYtNC4ybC00LjEtMS40TDE5LjgsMjd6Ij48L3BhdGg+PC9zdmc+",
  },
  {
    name: "JavaScript",
    per: 50,
    icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgwIiBoZWlnaHQ9IjQ4MCIKdmlld0JveD0iMCAwIDQ4IDQ4IgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxwYXRoIGZpbGw9IiNmZmQ2MDAiIGQ9Ik02LDQyVjZoMzZ2MzZINnoiPjwvcGF0aD48cGF0aCBmaWxsPSIjMDAwMDAxIiBkPSJNMjkuNTM4IDMyLjk0N2MuNjkyIDEuMTI0IDEuNDQ0IDIuMjAxIDMuMDM3IDIuMjAxIDEuMzM4IDAgMi4wNC0uNjY1IDIuMDQtMS41ODUgMC0xLjEwMS0uNzI2LTEuNDkyLTIuMTk4LTIuMTMzbC0uODA3LS4zNDRjLTIuMzI5LS45ODgtMy44NzgtMi4yMjYtMy44NzgtNC44NDEgMC0yLjQxIDEuODQ1LTQuMjQ0IDQuNzI4LTQuMjQ0IDIuMDUzIDAgMy41MjguNzExIDQuNTkyIDIuNTczbC0yLjUxNCAxLjYwN2MtLjU1My0uOTg4LTEuMTUxLTEuMzc3LTIuMDc4LTEuMzc3LS45NDYgMC0xLjU0NS41OTctMS41NDUgMS4zNzcgMCAuOTY0LjYgMS4zNTQgMS45ODUgMS45NTFsLjgwNy4zNDRDMzYuNDUyIDI5LjY0NSAzOCAzMC44MzkgMzggMzMuNTIzIDM4IDM2LjQxNSAzNS43MTYgMzggMzIuNjUgMzhjLTIuOTk5IDAtNC43MDItMS41MDUtNS42NS0zLjM2OEwyOS41MzggMzIuOTQ3ek0xNy45NTIgMzMuMDI5Yy41MDYuOTA2IDEuMjc1IDEuNjAzIDIuMzgxIDEuNjAzIDEuMDU4IDAgMS42NjctLjQxOCAxLjY2Ny0yLjA0M1YyMmgzLjMzM3YxMS4xMDFjMCAzLjM2Ny0xLjk1MyA0Ljg5OS00LjgwNSA0Ljg5OS0yLjU3NyAwLTQuNDM3LTEuNzQ2LTUuMTk1LTMuMzY4TDE3Ljk1MiAzMy4wMjl6Ij48L3BhdGg+PC9zdmc+",
  },
  {
    name: "React.js",
    per: 50,
    icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgwIiBoZWlnaHQ9IjQ4MCIKdmlld0JveD0iMCAwIDQ4IDQ4IgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxwYXRoIGZpbGw9IiM4MGRlZWEiIGQ9Ik0yNCwzNEMxMS4xLDM0LDEsMjkuNiwxLDI0YzAtNS42LDEwLjEtMTAsMjMtMTBjMTIuOSwwLDIzLDQuNCwyMywxMEM0NywyOS42LDM2LjksMzQsMjQsMzR6IE0yNCwxNgljLTEyLjYsMC0yMSw0LjEtMjEsOGMwLDMuOSw4LjQsOCwyMSw4czIxLTQuMSwyMS04QzQ1LDIwLjEsMzYuNiwxNiwyNCwxNnoiPjwvcGF0aD48cGF0aCBmaWxsPSIjODBkZWVhIiBkPSJNMTUuMSw0NC42Yy0xLDAtMS44LTAuMi0yLjYtMC43QzcuNiw0MS4xLDguOSwzMC4yLDE1LjMsMTlsMCwwYzMtNS4yLDYuNy05LjYsMTAuMy0xMi40YzMuOS0zLDcuNC0zLjksOS44LTIuNQljMi41LDEuNCwzLjQsNC45LDIuOCw5LjhjLTAuNiw0LjYtMi42LDEwLTUuNiwxNS4yYy0zLDUuMi02LjcsOS42LTEwLjMsMTIuNEMxOS43LDQzLjUsMTcuMiw0NC42LDE1LjEsNDQuNnogTTMyLjksNS40CWMtMS42LDAtMy43LDAuOS02LDIuN2MtMy40LDIuNy02LjksNi45LTkuOCwxMS45bDAsMGMtNi4zLDEwLjktNi45LDIwLjMtMy42LDIyLjJjMS43LDEsNC41LDAuMSw3LjYtMi4zYzMuNC0yLjcsNi45LTYuOSw5LjgtMTEuOQljMi45LTUsNC44LTEwLjEsNS40LTE0LjRjMC41LTQtMC4xLTYuOC0xLjgtNy44QzM0LDUuNiwzMy41LDUuNCwzMi45LDUuNHoiPjwvcGF0aD48cGF0aCBmaWxsPSIjODBkZWVhIiBkPSJNMzMsNDQuNmMtNSwwLTEyLjItNi4xLTE3LjYtMTUuNkM4LjksMTcuOCw3LjYsNi45LDEyLjUsNC4xbDAsMEMxNy40LDEuMywyNi4yLDcuOCwzMi43LDE5CWMzLDUuMiw1LDEwLjYsNS42LDE1LjJjMC43LDQuOS0wLjMsOC4zLTIuOCw5LjhDMzQuNyw0NC40LDMzLjksNDQuNiwzMyw0NC42eiBNMTMuNSw1LjhjLTMuMywxLjktMi43LDExLjMsMy42LDIyLjIJYzYuMywxMC45LDE0LjEsMTYuMSwxNy40LDE0LjJjMS43LTEsMi4zLTMuOCwxLjgtNy44Yy0wLjYtNC4zLTIuNS05LjQtNS40LTE0LjRDMjQuNiw5LjEsMTYuOCwzLjksMTMuNSw1LjhMMTMuNSw1Ljh6Ij48L3BhdGg+PGNpcmNsZSBjeD0iMjQiIGN5PSIyNCIgcj0iNCIgZmlsbD0iIzgwZGVlYSI+PC9jaXJjbGU+PC9zdmc+",
  },
  {
    name: "Tailwind",
    per: 50,
    icon: "https://tailwindcss.com/_next/static/media/tailwindcss-mark.79614a5f61617ba49a0891494521226b.svg",
  },
  {
    name: "MUI",
    per: 50,
    icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgwIiBoZWlnaHQ9IjQ4MCIKdmlld0JveD0iMCAwIDQ4IDQ4IgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxwb2x5Z29uIGZpbGw9IiMyOWI2ZjYiIHBvaW50cz0iMSw1IDcsOSA3LDI5IDEsMjUiPjwvcG9seWdvbj48cG9seWdvbiBmaWxsPSIjMDI4OGQxIiBwb2ludHM9IjQ3LDIwIDQxLDI0IDQxLDM3IDQ3LDMzIj48L3BvbHlnb24+PHBvbHlnb24gZmlsbD0iIzAyODhkMSIgcG9pbnRzPSI0Nyw2IDQxLDEwIDQxLDE3IDQ3LDEzIj48L3BvbHlnb24+PHBvbHlnb24gZmlsbD0iIzAyODhkMSIgcG9pbnRzPSIzNSw1IDI5LDkgMjksMjkgMzUsMjUiPjwvcG9seWdvbj48cG9seWdvbiBmaWxsPSIjMjliNmY2IiBwb2ludHM9IjEsMTIgMTgsMjMgMTgsMTYgMSw1Ij48L3BvbHlnb24+PHBvbHlnb24gZmlsbD0iIzAyODhkMSIgcG9pbnRzPSIzNSwxMiAxOCwyMyAxOCwxNiAzNSw1Ij48L3BvbHlnb24+PHBvbHlnb24gZmlsbD0iIzAyODhkMSIgcG9pbnRzPSIzNSwyNiAxOCwzNyAxOCwzMCAzNSwxOSI+PC9wb2x5Z29uPjxwb2x5Z29uIGZpbGw9IiMwMjg4ZDEiIHBvaW50cz0iNDcsMzQgMzAsNDUgMzAsMzggNDcsMjciPjwvcG9seWdvbj48cG9seWdvbiBmaWxsPSIjMjliNmY2IiBwb2ludHM9IjMwLDM3Ljc2NSAxOCwzMCAxOCwzNyAzMCw0NC43NjUiPjwvcG9seWdvbj48L3N2Zz4=",
  },
];

const SkillCard = skills.map((skills) => {
  return (
    <Fade top>
    <Box
      key={skills.name}
      sx={{
        display: "flex",
        alignItems: "center",
        pt: 2,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          display: "flex",
          flexDirection: "column",
          p: 1,
          flexGrow: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="subtitle1"
            color="initial"
            sx={{
              fontStyle: "bold",
            }}
          >
            {skills.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {skills.per}%
          </Typography>
        </Box>
        <Box sx={{ width: "100%" }}>
          <LinearProgress variant="determinate" value={skills.per} />
        </Box>
      </Paper>
      <Paper
        elevation={3}
        sx={{
          display: { xs: "none", sm: "flex" },
          ml: 4,
        }}
      >
        <Box
          component="img"
          src={skills.icon}
          alt={skills.name}
          sx={{
            height: "48px",
            width: "48px",
            p:1,
          }}
        />
      </Paper>
    </Box>
    </Fade>
  );
});

const Skills = () => {
  const theme = useTheme();
  const upsm = useMediaQuery(theme.breakpoints.up("sm"));
  const skillLink = (
    <Link
      variant={upsm ? "h3" : "h4"}
      color="primary"
      sx={{
        fontFamily: "Poppins",
      }}
    >
      Skills
    </Link>
  );
  return (
    <Box sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
    }}>
    <Box
      sx={{
        py: 4,
        mx: 2,
        textAlign: "center"
      }}
    >
      <Box sx={{pb:2}}>{skillLink}</Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: { xs: "center", sm: "space-around" },
          alignItems: { xs: "center", sm: "center" },
        }}
      >
        <Box
          sx={{
            textAlign: { sm: "center" },
          }}
        >
          <Typography
            variant={upsm ? "h4" : "h5"}
            color="initial"
            sx={{ fontFamily: "Poppins" }}
          >
            Professional Skills
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
            Some of my skills and technologies that I worked on.
          </Typography>
          {SkillCard}
        </Box>
      </Box>
    </Box>
    </Box>
  );
};

export default Skills;
