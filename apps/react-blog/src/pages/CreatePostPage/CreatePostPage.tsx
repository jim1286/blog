import React, { useEffect } from "react";
import { Container } from "./styles";
import MDEditor from "@uiw/react-md-editor";
import { FlexColumn, FlexRow, ImageUpload, InputForm, Tag } from "@/components";
import { useCreatePostForm } from "./hook";
import { Button } from "antd";
import { useCreatePostMutation } from "@/queries";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { BMS } from "@/theme";

export const CreatePostPage: React.FC = () => {
  const {
    tag,
    tags,
    createPostInfo,
    disableSubmit,
    setTag,
    handleAddTag,
    handleDeleteTag,
    handleInputChange,
    resetForm,
  } = useCreatePostForm();
  const createPost = useCreatePostMutation();
  const navigate = useNavigate();

  useEffect(() => {
    return () => resetForm();
  }, []);

  const handleCreatePost = async () => {
    if (disableSubmit) {
      return;
    }

    const { title, subTitle, content } = createPostInfo;

    const params = {
      title,
      subTitle,
      content,
      tags,
      thumbnail: createPostInfo.imageFile || undefined,
    };

    try {
      await createPost.mutateAsync(params);
      toast.success("글 생성 성공");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.success("글 생성 실패");
    }
  };

  return (
    <Container>
      <FlexColumn gap={4}>
        <BMS>썸네일 등록</BMS>
        <ImageUpload
          size={130}
          currentImage={createPostInfo.imageFile}
          onChangeImage={(imageFile) =>
            handleInputChange("imageFile", imageFile)
          }
        />
      </FlexColumn>
      <InputForm
        title="제목"
        placeholder="제목을 입력하세요"
        formKey="title"
        value={createPostInfo.title}
        handleInputChange={handleInputChange}
        isNecessary
      />
      <InputForm
        title="부제목"
        placeholder="부제목 입력하세요"
        formKey="subTitle"
        value={createPostInfo.subTitle}
        handleInputChange={handleInputChange}
        isNecessary
      />
      <MDEditor
        height={"50%"}
        value={createPostInfo.content}
        onChange={(val) => handleInputChange("content", val || "")}
      />
      <FlexRow width="250px" alignItems="center" gap={10}>
        <InputForm
          title="태그"
          placeholder="태그를 입력하세요"
          formKey="subTitle"
          value={tag}
          handleInputChange={(_, value) => setTag(value)}
        />
        <FlexColumn>
          <Button
            type="primary"
            disabled={!!tags.find((ele) => ele === tag)}
            onClick={handleAddTag}
            style={{
              position: "fixed",
            }}
          >
            등록
          </Button>
        </FlexColumn>
      </FlexRow>
      <FlexRow
        width="100%"
        height="60px"
        alignItems="center"
        gap={10}
        style={{ overflowX: "auto" }}
      >
        {tags.map((ele) => (
          <Tag key={ele} tagName={ele} onDeleteTag={handleDeleteTag} />
        ))}
      </FlexRow>
      <FlexRow width="100%" gap={10} justifyContent="flex-end">
        <Button
          type="primary"
          disabled={disableSubmit}
          onClick={handleCreatePost}
        >
          글 등록하기
        </Button>
      </FlexRow>
    </Container>
  );
};

export default CreatePostPage;
