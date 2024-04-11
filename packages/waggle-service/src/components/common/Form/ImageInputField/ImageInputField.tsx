import type { FieldPath, FieldValues } from "react-hook-form";
import { useController, useFormContext } from "react-hook-form";
import { toast } from "react-toastify";

import PhotoIcon from "@/assets/svg/ic-media-upload.svg?react";

import { Box, Flex } from "@/components/common";

import { FILE_SIZE_MAX_LIMIT } from "@/constants/file";

import useImagePreview from "@/hooks/useImagePreview";

import {
  imageBoxStyle,
  imageInputBoxStyle,
  imageInputStyle,
  imageStyle,
  resetImageButtonStyle,
} from "@/components/common/Form/ImageInputField/ImageInputField.style";

const ImageInputField = ({ name }: { name: FieldPath<FieldValues> }) => {
  const { control } = useFormContext();
  const { field: imageField } = useController({
    control,
    name,
  });
  const { value, onChange } = imageField;

  const imagePreview = useImagePreview(value);

  const handleResetImage = () => {
    onChange({ target: { value: "", name: "image" } });
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files;
    if (!file) return;
    if (file[0].size > FILE_SIZE_MAX_LIMIT) {
      toast.error("업로드 가능한 최대 용량은 1MB입니다.");
      return;
    }
    if (file) {
      onChange({ target: { value: file[0], name: "image" } });
    }
  };
  return (
    <Box css={imageInputBoxStyle}>
      <input
        type="file"
        multiple={false}
        accept="image/*"
        css={imageInputStyle}
        id="image"
        onChange={handleOnChange}
      />
      <label css={imageBoxStyle(!!imagePreview)} htmlFor="image">
        {imagePreview && <img css={imageStyle} src={imagePreview} alt="team image" />}
        {!imagePreview && <PhotoIcon style={{ width: "40px" }} />}
      </label>
      <Flex onClick={handleResetImage} css={resetImageButtonStyle}>
        사진 초기화
      </Flex>
    </Box>
  );
};
export default ImageInputField;
