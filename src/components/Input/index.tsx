import React, { InputHTMLAttributes } from "react";
import { InputContainer } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  isRequired?: boolean;
  className?: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ error, label, id, isRequired = false, className = "", ...props }: InputProps, ref) => {
    return (
      <InputContainer error={error}>
        <label htmlFor={id}>
          {label} {isRequired && <span>*</span>}
        </label>
        <input
          id={id}
          ref={ref}
          {...props}
        />
        {error && <span className="error">{error}</span>}
      </InputContainer>
    );
  }
);