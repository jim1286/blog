import React from 'react';
import { InputField } from './styles';

interface InputProps {
  value?: string | number | readonly string[] | undefined;
  type?: React.HTMLInputTypeAttribute;
  size?: 'md' | 'sm';
  disabled?: boolean;
  isError?: boolean;
  placeholder?: string;
  onChange?: (value: string) => void;
  maxLength?: number;
  defaultValue?: string;
}

const Input: React.FC<InputProps> = ({
  value,
  type,
  size = 'md',
  disabled = false,
  isError = false,
  maxLength,
  placeholder,
  onChange,
  defaultValue,
}) => {
  const InputInteractive = () => {
    const errorClass = isError ? 'input-error' : '';

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
