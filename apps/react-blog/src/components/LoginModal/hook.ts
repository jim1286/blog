import { useCheckInput } from "@/hooks";
import { LoginFormInfoType, LoginFormValidateType } from "@blog/types";
import { useEffect, useState } from "react";

export const useLoginForm = () => {
  const validate = useValidate();
  const [loginInfo, setLoginInfo] = useState<LoginFormInfoType>({
    userName: "",
    password: "",
  });
  const [loginValidate, setLoginValidate] = useState<LoginFormValidateType>({
    userName: "null",
    password: "null",
  });

  const disableSubmit = Object.values(loginValidate).some(
    (validate) => validate !== "valid"
  );

  useEffect(() => {
    const newFormValidate = { ...loginValidate };

    (Object.keys(loginValidate) as Array<keyof LoginFormValidateType>).forEach(
      (key, index) => {
        validate(key, Object.values(loginInfo)[index], newFormValidate);
      }
    );

    setLoginValidate(newFormValidate);
  }, [loginInfo]);

  const handleInputChange = (key: string, value: string) => {
    setLoginInfo({
      ...loginInfo,
      [key]: value,
    });
  };

  const resetForm = () => {
    setLoginInfo({
      userName: "",
      password: "",
    });
    setLoginValidate({
      userName: "null",
      password: "null",
    });
  };

  return {
    loginInfo,
    loginValidate,
    disableSubmit,
    handleInputChange,
    resetForm,
  };
};

const useValidate = () => {
  const { checkSpace } = useCheckInput();

  const validate = (
    key: keyof LoginFormInfoType,
    value: string,
    newFormValidate: LoginFormValidateType
  ) => {
    newFormValidate[key] = checkSpace(value);
  };

  return validate;
};
