import { Box, Typography } from "@mui/material";
import { Field } from "formik";
import React, { useState, useEffect } from "react";
import { useHref } from "react-router";
import useComponentVisible from "../../hooks/useComponentVisible";

interface IElementItemProps {
  name: string;
  blockName: string;
  blockImage: string;
  handleDelete: () => void;
  handleMoveTop: () => void;
  handleMoveDown: () => void;
  handleCopy: () => void;
}

const ElementItem = ({
  blockImage,
  blockName,
  name,
  handleCopy,
  handleDelete,
  handleMoveDown,
  handleMoveTop,
}: IElementItemProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { ref, isClicked } = useComponentVisible(true);
  const basename = useHref("");

  useEffect(() => {
    setIsOpen(isClicked);
  }, [isClicked]);

  return (
    <Box
      component="div"
      tabIndex={0}
      ref={ref}
      sx={{
        paddingBlock: "15px",
        width: "100%",
        backgroundColor: isOpen ? "info.dark" : "primary.main",
        display: "flex",
        position: "relative",
        justifyContent: "center",
        borderRadius: "6px",
        cursor: "pointer",
        transition: "background-color 0.3s",

        "&:hover": {
          backgroundColor: "info.main",
        },
      }}
    >
      <Box
        sx={{
          paddingInline: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: 1,
        }}
      >
        <img src={blockImage} alt={`${blockName} img`} />
        <Typography sx={{ marginTop: "10px" }}>{blockName}</Typography>
        {isOpen && (
          <Box
            sx={{
              padding: "5px",
              width: 1,
              marginTop: "10px",
              borderRadius: "6px",
              boxShadow:
                "0px 64px 64px rgba(211, 214, 215, 0.2), 0px 32px 32px rgba(211, 214, 215, 0.2), 0px 16px 16px rgba(211, 214, 215, 0.2), 0px 4px 4px rgba(211, 214, 215, 0.2), 0px 2px 2px rgba(211, 214, 215, 0.2);",
              backgroundColor: "primary.main",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                right: "10px",
                top: "-27px",
                display: "flex",
                columnGap: "5px",
                zIndex: 2,
              }}
            >
              <Box
                sx={{
                  backgroundColor: "secondary.main",
                  padding: "3px",
                  display: "flex",
                  columnGap: "5px",
                  borderRadius: "3px 3px 0px 0px",
                }}
              >
                <Box
                  component="div"
                  onClick={handleMoveDown}
                  sx={{
                    width: "21px",
                    height: "21px",
                    color: "primary.main",
                    padding: "3px",
                    "&:hover": {
                      backgroundColor: "secondary.dark",
                    },
                  }}
                >
                  <img
                    width={15}
                    height={15}
                    src={`${basename}/images/arrow-bottom.svg`}
                    alt="arrow bottom img"
                  />
                </Box>
                <Box
                  component="div"
                  onClick={handleMoveTop}
                  sx={{
                    width: "21px",
                    height: "21px",
                    color: "primary.main",
                    padding: "3px",

                    "&:hover": {
                      backgroundColor: "secondary.dark",
                    },
                  }}
                >
                  <img
                    width={15}
                    height={15}
                    src={`${basename}/images/arrow-top.svg`}
                    alt="arrow top img"
                  />
                </Box>
              </Box>
              <Box
                sx={{
                  height: "27px",
                  backgroundColor: "success.main",
                  padding: "3px",
                  display: "flex",
                  columnGap: "5px",
                  borderRadius: "3px 3px 0px 0px",
                }}
              >
                <Box
                  component="div"
                  onClick={handleCopy}
                  sx={{
                    color: "primary.main",
                    padding: "3px",

                    "&:hover": {
                      backgroundColor: "success.dark",
                    },
                  }}
                >
                  <img
                    width={15}
                    height={15}
                    src={`${basename}/images/copy.svg`}
                    alt="copy img"
                  />
                </Box>
                <Box
                  component="div"
                  onClick={handleDelete}
                  sx={{
                    color: "primary.main",
                    padding: "3px",
                    "&:hover": {
                      backgroundColor: "success.dark",
                    },
                  }}
                >
                  <img
                    width={15}
                    height={15}
                    src={`${basename}/images/trash.svg`}
                    alt="trash img"
                  />
                </Box>
              </Box>
            </Box>
            <Field
              style={{
                width: "100%",
                borderRadius: "6px",
                padding: "5px",
                border: "1px solid #E4E6F1",
                fontSize: "11px",
                lineHeight: "16.5px",
                outline: "none",
              }}
              name={name}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ElementItem;
