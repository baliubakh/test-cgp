import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IElement } from "../../types/element.types";

const initialState: IElement[] = [
  {
    id: "1",
    type: "image",
    text: "https://picsum.photos/530/230",
  },
  {
    id: "2",
    type: "headline",
    text: "A legendary cap set that feels like new",
  },

  {
    id: "3",
    type: "paragraph",
    text: 'Prompt your customer to revisit your store by showing them the products they left behind. Consider offering them a coupon code to close the deal. Using the "Insert" panel on the right, drag and drop the Abandoned Cart element onto the page below.',
  },
  {
    id: "4",
    type: "button",
    text: "Register now",
  },
];

export const elementSlice = createSlice({
  name: "elements",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<IElement>) => {
      state.push(action.payload);
      return state;
    },
    insert: (
      state,
      action: PayloadAction<{ idx: number; element: IElement }>
    ) => {
      state.splice(action.payload.idx, 0, action.payload.element);
      return state;
    },
    edit: (state, action: PayloadAction<IElement[]>) => {
      state = action.payload;
      return state;
    },

    remove: (state, action: PayloadAction<number>) => {
      state.splice(action.payload, 1);
      return state;
    },
    get: (state, action: PayloadAction<IElement[]>) => {
      state = action.payload;
      return state;
    },
  },
});

export const { insert, add, get, edit, remove } = elementSlice.actions;
export const showElements = (state: { elements: IElement[] }) => state;
export default elementSlice.reducer;
