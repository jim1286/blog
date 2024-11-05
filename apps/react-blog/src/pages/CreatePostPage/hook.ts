import { useCheckInput } from "@/hooks";
import {
  CreatePostFormInfoType,
  CreatePostFormValidateType,
} from "@blog/types";
import { useEffect, useRef, useState } from "react";

export const useCreatePostForm = () => {
  const validate = useValidate();
  const changedKey = useRef<string>("");
  const [tag, setTag] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);
  const [createPostInfo, setCreatePostInfo] = useState<CreatePostFormInfoType>({
    title: "",
    subTitle: "",
    content: "",
    imageFile: null,
  });
  const [createPostValidate, setCreatePostValidate] =
    useState<CreatePostFormValidateType>({
      title: "null",
      subTitle: "null",
      content: "null",
      imageFile: "valid",
    });
  const disableSubmit = Object.values(createPostValidate).some(
    (validate) => validate !== "valid"
  );

  useEffect(() => {
    const newFormValidate = { ...createPostValidate };

    (
      Object.keys(createPostValidate) as Array<keyof CreatePostFormValidateType>
    ).forEach((key, index) => {
      if (changedKey.current === key) {
        validate(key, Object.values(createPostInfo)[index], newFormValidate);
      }
    });

    setCreatePostValidate(newFormValidate);
  }, [createPostInfo]);

  const handleInputChange = (key: string, value: any) => {
    changedKey.current = key;

    setCreatePostInfo({
      ...createPostInfo,
      [key]: value,
    });
  };

  const handleAddTag = () => {
    if (!tag) {
      return;
    }

    setTag("");
    setTags((prev) => [...prev, tag]);
  };

  const handleDeleteTag = (tagName: string) => {
    setTags((prev) => {
      return prev.filter((ele) => ele !== tagName);
    });
  };

  const resetForm = () => {
    setCreatePostInfo({
      title: "",
      subTitle: "",
      content: "",
      imageFile: null,
    });
    setCreatePostValidate({
      title: "null",
      subTitle: "null",
      content: "null",
      imageFile: "valid",
    });
    setTag("");
    setTags([]);
  };

  return {
    tag,
    tags,
    createPostInfo,
    disableSubmit,
    setTag,
    handleAddTag,
    handleDeleteTag,
    handleInputChange,
    resetForm,
  };
};

const useValidate = () => {
  const { checkNull } = useCheckInput();

  const validate = (
    key: keyof CreatePostFormInfoType,
    value: string,
    newFormValidate: CreatePostFormValidateType
  ) => {
    switch (key) {
      case "title":
      case "subTitle":
      case "content": {
        newFormValidate[key] = checkNull(value);
        break;
      }
    }
  };

  return validate;
};
