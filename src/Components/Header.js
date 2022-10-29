import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useMediaQuery, useTheme } from "@mui/material";
import DrawerComp from "./DrawerComp";
import Navbar from "./Navbar";

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
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
          {isMobile ? <DrawerComp /> : <Navbar />}
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
