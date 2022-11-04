import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useMediaQuery, useTheme } from "@mui/material";
import Navbar from "./Navbar";

const Header = ({ children }) => {
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
          {children}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

const coustemStyle = {
  logo: {
    fontWeight: "bold",
    // border: "1px solid yellow",
    width: "100%",
  },
};

export default Header;
