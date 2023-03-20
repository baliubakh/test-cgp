import React from "react";
import { FieldArray, Form, Formik } from "formik";
import { Box, Typography } from "@mui/material";
import { useDrop } from "react-dnd";
import { useSelector, useDispatch } from "react-redux";
import { edit, showElements } from "../../redux/slices/elementSlice";
import ElementItem from "../../common/ElementItem";
import { capitalize } from "../../utils/capitalize";
import { useHref } from "react-router";
import { IElement } from "../../types/element.types";
import { AcceptBlocks } from "../../constants";

const ElementsBlock = () => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: AcceptBlocks.target,
    drop: () => ({ name: "block" }),

    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));
  const baseName = useHref("");
  const dispatch = useDispatch();
  const data = useSelector(showElements);

  const getImageByType = (type: string) => {
    switch (type) {
      case "image":
        return `${baseName}/images/image.svg`;
      case "headline":
        return `${baseName}/images/headline.svg`;
      case "paragraph":
        return `${baseName}/images/paragraph.svg`;
      case "button":
        return `${baseName}/images/image.svg`;
      default:
        return `${baseName}/images/image.svg`;
    }
  };

  const handleSubmit = (values: { elements: IElement[] }) => {
    dispatch(edit(values.elements));
  };

  return (
    <Box
      component="div"
      ref={drop}
      sx={{
        backgroundColor: "info.light",
        width: "35%",
        padding: "25px 30px 0",
        position: "relative",
      }}
    >
      <Formik initialValues={data} onSubmit={handleSubmit} enableReinitialize>
        {({ values }) => (
          <Form>
            <FieldArray name="elements">
              {({ insert, move, remove }) => (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "15px",
                    opacity: isOver ? "0.3" : "1",
                  }}
                >
                  {values.elements.map((element, idx) => (
                    <ElementItem
                      key={element.id}
                      name={`elements[${idx}].text`}
                      blockImage={getImageByType(element.type)}
                      blockName={capitalize(element.type)}
                      handleCopy={() => {
                        insert(idx + 1, {
                          ...element,
                          id: `${Math.random()}.${Math.random()}`,
                        });
                      }}
                      handleMoveDown={() => {
                        if (idx + 1 <= values.elements.length - 1) {
                          move(idx, idx + 1);
                        }
                      }}
                      handleMoveTop={() => {
                        if (idx - 1 >= 0) {
                          move(idx, idx - 1);
                        }
                      }}
                      handleDelete={() => remove(idx)}
                    />
                  ))}
                </Box>
              )}
            </FieldArray>
            {isOver && (
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    color: "secondary.dark",
                    fontSize: "45px",
                    width: "100px",
                    height: "100px",
                    border: "3px dashed",
                    borderStyle: "secondary.main",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  +
                </Box>
                <Typography sx={{ marginTop: "10px", fontSize: "35px" }}>
                  Add Element
                </Typography>
              </Box>
            )}
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default ElementsBlock;
