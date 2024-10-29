import { useCheckInput } from "@/hooks";
import {
  CreatePostFormInfoType,
  CreatePostFormValidateType,
} from "@blog/types";
import { useEffect, useRef, useState } from "react";

export const useCreatePostForm = () => {
  const validate = useValidate();
  const imageFile = useRef<File | null>(null);
  const changedKey = useRef<string>("");
  const [tag, setTag] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);
  const [createPostInfo, setCreatePostInfo] = useState<CreatePostFormInfoType>({
    title: "",
    subTitle: "",
    content: "",
  });
  const [createPostValidate, setCreatePostValidate] =
    useState<CreatePostFormValidateType>({
      title: "null",
      subTitle: "null",
      content: "null",
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

  const handleInputChange = (key: string, value: string) => {
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
    setCreatePostInfo({ title: "", subTitle: "", content: "" });
    setCreatePostValidate({
      title: "null",
      subTitle: "null",
      content: "null",
    });
    setTag("");
    setTags([]);
    imageFile.current = null;
  };

  return {
    tag,
    tags,
    imageFile,
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
    newFormValidate: CreatePostFormInfoType
  ) => {
    newFormValidate[key] = checkNull(value);
  };

  return validate;
};
