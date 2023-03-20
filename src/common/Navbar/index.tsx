import { AppBar, Slide, Typography, useScrollTrigger } from "@mui/material";
import React from "react";

interface Props {
  children: React.ReactElement;
}

const HideOnScroll = ({ children }: Props) => {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

const Navbar = () => {
  return (
    <HideOnScroll>
      <AppBar
        position="static"
        sx={{
          boxShadow: 0,
          paddingInline: "30px",
          height: "70px",
          justifyContent: "center",
          borderBottom: 1,
          borderColor: "primary.dark",
        }}
      >
        <Typography variant="h6" component="div">
          REACT EDITOR Test
        </Typography>
      </AppBar>
    </HideOnScroll>
  );
};

export default Navbar;
