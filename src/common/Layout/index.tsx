import { Box } from "@mui/material";
import React from "react";

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <Box
      sx={{
        paddingInline: "30px",
        width: "100%",
        minHeight: "calc(100vh - 70px)",
        backgroundColor: "primary.main",
      }}
    >
      {children}
    </Box>
  );
};

export default Layout;
