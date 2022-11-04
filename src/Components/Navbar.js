import React from "react";
import AvatarComp from "./AvatarComp";
import { Stack, useTheme } from "@mui/system";
import { Button, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";

function removeCredentialsFromLoacalStorage() {
  localStorage.removeItem("User");
  localStorage.removeItem("token");
}

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();
  const isLogedIn = localStorage.getItem("User");

  const logOutdHandler = () => {
    removeCredentialsFromLoacalStorage();
    navigate("/");
  };

  return (
    <Stack
      direction="row"
      justifyContent="flex-end"
      alignItems="center"
      spacing={2}
      sx={{ width: isMobile ? "100%" : "40%" }}
    >
      <div>{isLogedIn && <AvatarComp />}</div>

      <div>
        <Button onClick={logOutdHandler} variant="contained">
          Log out
        </Button>
      </div>
    </Stack>
  );
};

export default Navbar;
export { removeCredentialsFromLoacalStorage };
