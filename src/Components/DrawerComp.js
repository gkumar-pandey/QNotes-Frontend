import React, { useState } from "react";
import {
  Drawer,
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import AvatarComp from "./AvatarComp";
import { removeCredentialsFromLoacalStorage } from "./Navbar";
import { useNavigate } from "react-router-dom";

const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const navigate = useNavigate();

  const LogOutHandler = () => {
    removeCredentialsFromLoacalStorage();
    navigate("/");
  };
  return (
    <div>
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        PaperProps={{ sx: { width: "40%" } }}
      >
        <List>
          <ListItem>
            <ListItemText>
              <Button>Dark Mode</Button>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <Button onClick={LogOutHandler}>Log out</Button>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <AvatarComp />
      </IconButton>
    </div>
  );
};

export default DrawerComp;
