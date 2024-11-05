import { useCheckInput, useDebounce } from "@/hooks";
import { usePostCheckUserNameMutation } from "@/queries";
import { SignUpFormInfoType, SignUpFormValidateType } from "@blog/types";
import { useEffect, useRef, useState } from "react";

export const useSignUpForm = () => {
  const validate = useValidate();
  const changedKey = useRef<string>("");
  const postCheckUserName = usePostCheckUserNameMutation();
  const [signUpInfo, setSignUpInfo] = useState<SignUpFormInfoType>({
    userName: "",
    password: "",
    passwordConfirm: "",
    imageFile: null,
  });
  const [signUpValidate, setSignUpValidate] = useState<SignUpFormValidateType>({
    userName: "null",
    password: "null",
    passwordConfirm: "null",
    imageFile: "valid",
  });
  const disableSubmit = Object.values(signUpValidate).some(
    (validate) => validate !== "valid"
  );

  const checkUserNameDebounce = useDebounce(async (value) => {
    if (!value) {
      return;
    }

    try {
      const res = await postCheckUserName.mutateAsync({ userName: value });

      if (res.message === "동일한 유저 아이디가 존재합니다.") {
        setSignUpValidate({ ...signUpValidate, userName: "duplicate" });
      }
    } catch (error) {
      console.log(error);
    }
  }, 100);

  useEffect(() => {
    const newFormValidate = { ...signUpValidate };

    (
      Object.keys(signUpValidate) as Array<keyof SignUpFormValidateType>
    ).forEach((key, index) => {
      if (changedKey.current === key) {
        validate(
          key,
          Object.values(signUpInfo)[index],
          signUpInfo.password,
          newFormValidate
        );
      }
    });

    setSignUpValidate(newFormValidate);
  }, [signUpInfo]);

  const handleInputChange = (key: string, value: any) => {
    changedKey.current = key;

    if (key === "userName") {
      checkUserNameDebounce(value as string);
    }

    setSignUpInfo({
      ...signUpInfo,
      [key]: value,
    });
  };

  const resetForm = () => {
    setSignUpInfo({
      userName: "",
      password: "",
      passwordConfirm: "",
      imageFile: null,
    });
    setSignUpValidate({
      userName: "null",
      password: "null",
      passwordConfirm: "null",
      imageFile: "valid",
    });
  };

  return {
    signUpInfo,
    signUpValidate,
    disableSubmit,
    handleInputChange,
    resetForm,
  };
};

const useValidate = () => {
  const { checkWeakAndSpace, checkPasswordConfirm } = useCheckInput();

  const validate = (
    key: keyof SignUpFormInfoType,
    value: string,
    password: string,
    newFormValidate: SignUpFormValidateType
  ) => {
    switch (key) {
      case "userName":
      case "password": {
        newFormValidate[key] = checkWeakAndSpace(value, 6);
        break;
      }
      case "passwordConfirm": {
        newFormValidate[key] = checkPasswordConfirm(value, password);
        break;
      }
    }
  };

  return validate;
};
