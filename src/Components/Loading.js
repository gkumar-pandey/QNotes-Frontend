import React from "react";
import { CircularProgress } from "@mui/material";

const Loading = () => {
  return (
    <>
      <div style={style.loading}>
        <CircularProgress sx={style.loadingBtn} size={25} />
        Loading..
      </div>
    </>
  );
};

const style = {
  loadingBtn: {
    marginRight: "8px",
  },
  loading: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
};

export default Loading;
