import { Button, Modal } from "antd";
import React from "react";
import { FlexColumn, FlexRow } from "../BaseStyle";
import { BMS, H5 } from "@/theme";
import { useSignUpForm } from "./hook";
import { InputForm } from "../InputForm";
import { usePostSignUpMutation } from "@/queries";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";
import { QUERY_KEYS } from "@/constants";
import { useKeyDown } from "@/hooks";
import { ImageUpload } from "../ImageUpload";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const SignUpModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const {
    imageFile,
    signUpInfo,
    signUpValidate,
    disableSubmit,
    handleInputChange,
    resetForm,
  } = useSignUpForm();
  const postSignUp = usePostSignUpMutation();
  const queryClient = useQueryClient();

  useKeyDown(() => {
    if (!disableSubmit) {
      handleLogin();
    }
  }, ["Enter"]);

  const handleLogin = async () => {
    if (!signUpInfo.userName || !signUpInfo.password) {
      return;
    }

    try {
      const params = {
        userName: signUpInfo.userName,
        password: signUpInfo.password,
        thumbnail: imageFile.current || undefined,
      };

      await postSignUp.mutateAsync(params);
      toast.success("회원가입 성공");
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.USER] });
      onClose();
    } catch (error) {
      console.log(error);
      toast.error("회원가입 실패");
    } finally {
      resetForm();
    }
  };

  const handleCloseModal = () => {
    onClose();
    resetForm();
  };

  return (
    <Modal open={isOpen} footer={null} onCancel={handleCloseModal} centered>
      <FlexColumn>
        <H5 style={{ height: "50px" }}>회원가입</H5>
        <FlexColumn width="100%">
          <InputForm
            title="아이디"
            placeholder="아이디를 입력하세요"
            formKey="userName"
            value={signUpInfo.userName}
            errorMessage={
              signUpValidate.userName === "weak"
                ? "최소 6글자 이상 입력하세요."
                : signUpValidate.userName === "space"
                  ? "공백은 입력할 수 없습니다."
                  : signUpValidate.userName === "duplicate"
                    ? "동일한 유저 아이디가 존재합니다."
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
            value={signUpInfo.password}
            errorMessage={
              signUpValidate.password === "weak"
                ? "최소 6글자 이상 입력하세요."
                : signUpValidate.password === "space"
                  ? "공백은 입력할 수 없습니다."
                  : undefined
            }
            handleInputChange={handleInputChange}
            isNecessary
          />
          <InputForm
            title="비밀번호 재입력"
            placeholder="비밀번호를 재입력하세요"
            formKey="passwordConfirm"
            type="password"
            value={signUpInfo.passwordConfirm}
            errorMessage={
              signUpValidate.passwordConfirm === "incorrect"
                ? "비밀번호가 일치하지 않습니다."
                : undefined
            }
            handleInputChange={handleInputChange}
            isNecessary
          />
          <FlexColumn gap={4}>
            <BMS>이미지 등록</BMS>
            <ImageUpload size={130} fileRef={imageFile} />
          </FlexColumn>
        </FlexColumn>
        <FlexRow width="100%">
          <FlexRow style={{ flex: 1 }} />
          <FlexRow gap={5}>
            <Button type="primary" onClick={handleCloseModal}>
              취소
            </Button>
            <Button disabled={disableSubmit} onClick={handleLogin}>
              회원가입
            </Button>
          </FlexRow>
        </FlexRow>
      </FlexColumn>
    </Modal>
  );
};

export default SignUpModal;
