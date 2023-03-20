import { Box, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import React from "react";
import { useDrag } from "react-dnd";
import { AcceptBlocks } from "../../constants";
import { add } from "../../redux/slices/elementSlice";

interface IToolbarItemProps {
  name: string;
  src: string;
  alt: string;
}

type IDropResult = "button" | "image" | "headline" | "paragraph";

const ToolbarItem = ({ name, src, alt }: IToolbarItemProps) => {
  const dispatch = useDispatch();

  const type = name.toLowerCase();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [{ isDragging }, drag] = useDrag(() => ({
    type: AcceptBlocks.target,
    item: type,
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult<IDropResult>();
      if (item && dropResult) {
        dispatch(
          add({
            id: `${Math.random()}.${Math.random()}`,
            type: type as IDropResult,
            text: "",
          })
        );
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));

  const handleItemClick = () => {
    dispatch(
      add({
        id: `${Math.random()}.${Math.random()}`,
        type: type as IDropResult,
        text: "",
      })
    );
  };

  return (
    <Box
      component="div"
      onClick={handleItemClick}
      ref={drag}
      sx={{
        width: { xl: "110px", lg: "100px", md: "90px", sm: "90px" },
        height: { xl: "83px", lg: "83px", md: "73px", sm: "73px" },
        padding: "15px 10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: "6px",
        backgroundColor: "primary.light",
        cursor: "grab",

        "&:active": {
          cursor: "grabbing",
        },
      }}
    >
      <img style={{ width: "25px", height: "25px" }} src={src} alt={alt} />
      <Typography
        component="span"
        sx={{
          width: "100%",
          textAlign: "center",
          marginTop: "10px",
          fontSize: { xl: "14px", lg: "12px", md: "11px", sm: "12px" },
          letterSpacing: "0.02em",
        }}
      >
        {name}
      </Typography>
    </Box>
  );
};

export default ToolbarItem;
