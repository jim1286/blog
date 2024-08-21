import { Button, Modal } from "antd";
import React from "react";
import { FlexColumn, FlexRow } from "../BaseStyle";
import { H5 } from "@/theme";
import { useLoginForm } from "./hook";
import { InputForm } from "../InputForm";
import { usePostSignInMutation } from "@/queries";
import { TokenService } from "@/service";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const { loginInfo, loginValidate, disableSubmit, handleInputChange } =
    useLoginForm();
  const postSignIn = usePostSignInMutation();

  const handleLogin = async () => {
    if (!loginInfo.id || !loginInfo.password) {
      return;
    }

    try {
      const params = {
        userName: loginInfo.id,
        password: loginInfo.password,
      };

      const res = await postSignIn.mutateAsync(params);
      TokenService.setToken(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal open={isOpen} footer={null} onCancel={onClose} centered>
      <FlexColumn height="300px">
        <H5 style={{ height: "50px" }}>로그인</H5>
        <FlexColumn width="100%" style={{ flex: 1 }} gap={10}>
          <InputForm
            title="아이디"
            placeholder="아이디를 입력하세요"
            formKey="id"
            value={loginInfo.id}
            errorMessage={
              loginValidate.id === "space"
                ? "공백은 입력할 수 없습니다."
                : undefined
            }
            handleInputChange={handleInputChange}
            isNecessary
          />
          <InputForm
            title="비밀번호"
            placeholder="비밀번호를 입력하세요"
            formKey="password"
            type="password"
            value={loginInfo.password}
            errorMessage={
              loginValidate.password === "space"
                ? "공백은 입력할 수 없습니다."
                : undefined
            }
            handleInputChange={handleInputChange}
            isNecessary
          />
        </FlexColumn>
        <FlexRow width="100%">
          <FlexRow style={{ flex: 1 }} />
          <FlexRow gap={5}>
            <Button disabled={disableSubmit} onClick={handleLogin}>
              로그인
            </Button>
            <Button type="primary" onClick={onClose}>
              취소
            </Button>
          </FlexRow>
        </FlexRow>
      </FlexColumn>
    </Modal>
  );
};

export default LoginModal;
