import React from "react";
import Typography from "@mui/material/Typography";

function Heading(props) {
  return (
    <Typography className="heading" variant={props.design}>
      {props.content}
    </Typography>
  );
}

export default Heading;
