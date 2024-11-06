import { Button, Modal } from "antd";
import React from "react";
import { FlexColumn, FlexRow } from "../BaseStyle";
import { BM, H5 } from "@/theme";
import { TokenService } from "@/service";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";
import { useGetUserQuery } from "@/queries";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const LogoutModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const getUser = useGetUserQuery();
  const queryClient = useQueryClient();

  const handleLogout = async () => {
    TokenService.clearToken();
    queryClient.resetQueries();
    toast.success("로그아웃 성공");
    onClose();
  };

  return (
    <Modal open={isOpen} footer={null} onCancel={onClose} centered>
      <FlexColumn height="120px" gap={20}>
        <H5 style={{ height: "50px" }}>로그아웃</H5>
        <BM>{getUser.data?.userName}님 로그아웃 하시겠습니까?</BM>
        <FlexRow width="100%">
          <FlexRow style={{ flex: 1 }} />
          <FlexRow gap={5}>
            <Button type="primary" onClick={onClose}>
              취소
            </Button>
            <Button onClick={handleLogout}>로그아웃</Button>
          </FlexRow>
        </FlexRow>
      </FlexColumn>
    </Modal>
  );
};

export default LogoutModal;
