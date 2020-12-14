import React from "react";
import CoolButtonStyles from "./CoolButton.styles";

interface CoolButtonProps {
  children: any;
  onClick?: (event:any) => any;
}

const CoolButton: React.FC<CoolButtonProps> = ({
  children,
  onClick,
}: CoolButtonProps) => {
  const CSS = CoolButtonStyles.Factory();

  return (
    <>
      <button style={CSS.coolButton()} type="button" onClick={onClick}>
        {children}
      </button>
    </>
  );
};

export default CoolButton;
