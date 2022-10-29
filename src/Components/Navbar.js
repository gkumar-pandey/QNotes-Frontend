import React from "react";
import AvatarComp from "./AvatarComp";
import { Stack, useTheme } from "@mui/system";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Button, useMediaQuery } from "@mui/material";

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Stack
      direction="row"
      justifyContent="flex-end"
      alignItems="center"
      spacing={2}
      sx={{ width: "40%" }}
    >
      <div>
        <AvatarComp />
      </div>
      <div>
        <LightModeIcon />
      </div>
      <div>
        <Button variant="contained">Log out</Button>
      </div>
    </Stack>
  );
};

export default Navbar;
