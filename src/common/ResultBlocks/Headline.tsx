import { Typography } from "@mui/material";
import React from "react";
import { IElementProps } from "../../types/element.types";

const Headline = ({ text }: IElementProps) => {
  return (
    <Typography
      component="h3"
      sx={{
        fontSize: "22px",
        fontWeight: "700",
        letterSpacing: "0.02em",
        lineHeight: "150%",
        color: "text.primary",
        marginBottom: "30px",
      }}
    >
      {text}
    </Typography>
  );
};

export default Headline;
