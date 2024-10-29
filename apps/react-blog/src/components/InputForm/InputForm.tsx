import React from "react";
import { Spacer, ErrorMessage, Input } from "@/components";
import { BS } from "@/theme";
import { Container, InputTitle, Label } from "./styles";
import { useTheme } from "styled-components";

interface InputFormProps {
  title: string;
  formKey: string;
  disabled?: boolean;
  type?: React.HTMLInputTypeAttribute;
  value?: string;
  subTitle?: string;
  isNecessary?: boolean;
  placeholder?: string;
  errorMessage?: string;
  handleInputChange: (key: string, value: string) => void;
}

const InputForm: React.FC<InputFormProps> = ({
  title,
  formKey,
  disabled,
  type,
  value,
  subTitle,
  isNecessary,
  placeholder,
  errorMessage,
  handleInputChange,
}) => {
  const theme = useTheme();

  return (
    <Container subTitle={subTitle}>
      <InputTitle>
        {title}
        {isNecessary && <Label>{"*"}</Label>}
      </InputTitle>
      {subTitle && <BS color={theme.text.secondary}>{subTitle}</BS>}
      <Spacer size={4} type="horizontal" />
      <Input
        disabled={disabled}
        type={type}
        placeholder={placeholder}
        isError={errorMessage ? true : false}
        value={value}
        onChange={(value) => {
          handleInputChange(formKey, value);
        }}
      />
      {errorMessage && (
        <>
          <Spacer size={4} type="horizontal" />
          <ErrorMessage message={errorMessage} />
        </>
      )}
    </Container>
  );
};

export default InputForm;
