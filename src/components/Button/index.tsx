import React, { ButtonHTMLAttributes } from "react";
import { ButtonContainer } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <ButtonContainer {...props}>{children}</ButtonContainer>;
};