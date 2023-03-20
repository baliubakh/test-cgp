import { Box } from "@mui/material";
import React from "react";
import { IElementProps } from "../../types/element.types";

const Image = ({ text }: IElementProps) => {
  return (
    <Box>
      <img src={text} alt={`${text} img`} style={{ marginBottom: "30px" }} />
    </Box>
  );
};

export default Image;
