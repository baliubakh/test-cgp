import { Typography } from "@mui/material";
import React from "react";
import { IElementProps } from "../../types/element.types";

const Paragraph = ({ text }: IElementProps) => {
  return (
    <Typography
      component="p"
      sx={{
        marginBottom: "30px",
        fontSize: "14px",
        color: "text.secondary",
        letterSpacing: "0.02em",
      }}
    >
      {text}
    </Typography>
  );
};

export default Paragraph;
