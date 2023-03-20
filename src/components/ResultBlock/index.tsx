import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import React from "react";
import { showElements } from "../../redux/slices/elementSlice";
import Headline from "../../common/ResultBlocks/Headline";
import Paragraph from "../../common/ResultBlocks/Paragraph";
import Image from "../../common/ResultBlocks/Image";
import Button from "../../common/ResultBlocks/Button";
import { IElement } from "../../types/element.types";

const ResultBlock = () => {
  const data = useSelector(showElements);

  const getElementByType = (el: IElement) => {
    switch (el.type) {
      case "headline":
        return <Headline key={el.id} text={el.text} />;
      case "image":
        return <Image key={el.id} text={el.text} />;
      case "button":
        return <Button key={el.id} text={el.text} />;
      case "paragraph":
        return <Paragraph key={el.id} text={el.text} />;
      default:
        return <Paragraph key={el.id} text={el.text} />;
    }
  };

  return (
    <Box
      sx={{
        width: "49%",
        padding: "30px 0 30px 30px",
        overflowY: "auto",
        textAlign: "center",
      }}
    >
      {data.elements.map((el) => getElementByType(el))}
    </Box>
  );
};

export default ResultBlock;
