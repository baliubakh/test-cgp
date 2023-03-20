import { Box } from "@mui/material";
import React from "react";
import Layout from "../common/Layout";
import Navbar from "../common/Navbar";
import ToolbarBlock from "../components/ToolbarBlock";
import ElementsBlock from "../components/ElementsBlock";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import ResultBlock from "../components/ResultBlock";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Layout>
        <Box
          sx={{
            display: "flex",
            minHeight: "calc(100vh - 70px)",
            height: "100%",
          }}
        >
          <DndProvider backend={HTML5Backend}>
            <ToolbarBlock />
            <ElementsBlock />
          </DndProvider>
          <ResultBlock />
        </Box>
      </Layout>
    </>
  );
};

export default HomePage;
