import React from "react";
import { IconButton } from "@mui/material";
import { Snackbar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MuiAlert from "@mui/material/Alert";

import { useState } from "react";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function AlertMassage({ message, serverity }) {
  const [open, setOpen] = useState(true);
  function handleClose(event, reason) {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  }

  return (
    <div>
      <Snackbar
        open={open}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={serverity}
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}
