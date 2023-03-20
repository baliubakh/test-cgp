import { Box, Button } from "@mui/material";
import React from "react";
import { IElementProps } from "../../types/element.types";

const ButtonEl = ({ text }: IElementProps) => {
  return (
    <Box>
      <Button
        variant="contained"
        sx={{
          fontSize: "14px",
          lineHeight: "145%",
          letterSpacing: "0.02em",
          marginBottom: "30px",
          color: "primary.secondary",
          padding: "12px 30px 10px",
        }}
        color="secondary"
      >
        {text}
      </Button>
    </Box>
  );
};

export default ButtonEl;
