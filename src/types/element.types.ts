export interface IElement {
  id: string;
  type: "headline" | "image" | "paragraph" | "button";
  text: string;
}

export interface IElementProps {
  text: string;
}
