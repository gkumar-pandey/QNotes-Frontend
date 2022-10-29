import React from "react";
import { Stack } from "@mui/system";
import { Avatar } from "@mui/material";
import { deepPurple } from "@mui/material/colors";

const AvatarComp = () => {
  return (
    <>
      <Stack direction="row" spacing={2} sx={AvatarStyle.border}>
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
    </>
  );
};

const AvatarStyle = {
  border: {
    width: "100%",
    display: "flex",
    justifyContent: "right",
    float: "right",
  },
};

export default AvatarComp;
