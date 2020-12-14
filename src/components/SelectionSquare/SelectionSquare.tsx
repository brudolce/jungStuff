import React from "react";
import SelectionSquare from "./SelectionSquare.styles";

interface SelectionSquareProps {
  children: any;
  selected?: boolean;
}

const CoolButton: React.FC<SelectionSquareProps> = ({
  children = "test",
  selected = false,
}: SelectionSquareProps) => {
  const CSS = SelectionSquare.Factory();

  return (
    <>
      <div style={CSS.SelectionSquare(selected)}>{children}</div>
    </>
  );
};

export default CoolButton;
