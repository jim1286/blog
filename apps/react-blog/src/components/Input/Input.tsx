import React from "react";
import { InputField } from "./styles";

interface InputProps {
  value?: string | number | readonly string[] | undefined;
  type?: React.HTMLInputTypeAttribute;
  size?: "md" | "sm";
  disabled?: boolean;
  isError?: boolean;
  placeholder?: string;
  maxLength?: number;
  defaultValue?: string;
  onChange?: (value: string) => void;
}

const Input: React.FC<InputProps> = ({
  value,
  type,
  size = "md",
  disabled = false,
  isError = false,
  maxLength,
  placeholder,
  defaultValue,
  onChange,
}) => {
  const InputInteractive = () => {
    const errorClass = isError ? "input-error" : "";

    const className = `${errorClass}`;
    return className;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <InputField
      value={value}
      maxLength={maxLength}
      type={type}
      size={size}
      defaultValue={defaultValue}
      disabled={disabled}
      placeholder={placeholder}
      onChange={handleInputChange}
      className={InputInteractive()}
    />
  );
};

export default React.memo(Input);
