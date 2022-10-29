import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { deepOrange, deepPurple } from "@mui/material/colors";
import { Avatar } from "@mui/material";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#06283D" }}>
        <Toolbar variant="dense">
          <Typography
            variant="h6"
            color="inherit"
            component="div"
            sx={coustemStyle.logo}
          >
            QNotes
          </Typography>
          <Stack direction="row" spacing={2} sx={coustemStyle.border}>
            <Avatar
              sx={{
                bgcolor: deepPurple[500],
                height: 36,
                weight: 20,
                margin: "8px",
              }}
            >
              OP
            </Avatar>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

const coustemStyle = {
  border: {
    // border: "1px solid red",
    width: "100%",
    display: "flex",
    justifyContent: "right",
    float: "right",
  },
  logo: {
    fontWeight: "bold",
    // border: "1px solid yellow",
  },
  avatar: {
    height: 24,
    weight: 24,
  },
};

export default Header;
