import { Box } from "@mui/material";
import React from "react";
import { useHref } from "react-router";
import ToolbarItem from "../../common/ToolbarItem";
import { elementsBtns } from "../../constants";

const ToolbarBlock = () => {
  const basename = useHref("");

  return (
    <Box
      sx={{
        width: "15.8%",
        padding: "30px 30px 0 0",
        minHeight: 1,
        position: "relative",
        borderRight: 1,
        borderColor: "primary.dark",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignContent: "flex-start",
          justifyContent: "center",
          columnGap: "10px",
          rowGap: "10px",
          position: "sticky",
          top: "20px",
        }}
      >
        {elementsBtns.map((btn) => (
          <ToolbarItem
            key={btn.id}
            src={`${basename}${btn.img}`}
            name={btn.name}
            alt={`${btn.name} image`}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ToolbarBlock;
