import React, { TextareaHTMLAttributes } from "react";
import { InputContainer } from "./styles";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  id: string;
  isRequired?: boolean;
  error?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ error, label, id, isRequired = false, className = "", ...props }: TextareaProps, ref) => {
    return (
      <InputContainer error={error}>
        <label htmlFor={id}>
          {label} {isRequired && <span>*</span>}
        </label>
        <textarea
          id={id}
          ref={ref}
          {...props}
        />
        {error && <span className="error">{error}</span>}
      </InputContainer>
    );
  }
);