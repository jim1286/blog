import { Button, Modal } from "antd";
import React from "react";
import { FlexColumn, FlexRow } from "../BaseStyle";
import { H5 } from "@/theme";
import { useDeletePostMutation } from "@/queries";
import { useNavigate } from "react-router-dom";

interface Props {
  postId: string;
  isOpen: boolean;
  onClose: () => void;
}

const DeletePostModal: React.FC<Props> = ({ postId, isOpen, onClose }) => {
  const navigate = useNavigate();
  const deletePost = useDeletePostMutation();

  const handleDeletePost = async () => {
    try {
      await deletePost.mutateAsync({ postId });
      onClose();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal open={isOpen} footer={null} onCancel={onClose} centered>
      <FlexColumn height="100px" gap={20}>
        <H5 style={{ height: "50px" }} color="red">
          글을 삭제하시겠습니까?
        </H5>
        <FlexRow width="100%">
          <FlexRow style={{ flex: 1 }} />
          <FlexRow gap={5}>
            <Button type="primary" onClick={onClose}>
              취소
            </Button>
            <Button onClick={handleDeletePost}>삭제하기</Button>
          </FlexRow>
        </FlexRow>
      </FlexColumn>
    </Modal>
  );
};

export default DeletePostModal;
