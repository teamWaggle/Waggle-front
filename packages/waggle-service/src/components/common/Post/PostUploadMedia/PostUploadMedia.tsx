import { useRef } from "react";

import UploadMediaIcon from "@/assets/svg/ic-media-upload.svg?react";

import { Flex, Text } from "@/components/common";
import Button from "@/components/common/Design/Button/Button";

import { useDragAndDrop } from "@/hooks/useDragAndDrop";

import { uploadMediaBoxStyle } from "@/components/common/Post/PostUploadMedia/PostUploadMedia.style";

interface PostUploadMediaParams {
  handleImgUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  dropImgUpload: (e: React.DragEvent<HTMLDivElement>) => void;
}

const PostUploadMedia = ({ handleImgUpload, dropImgUpload }: PostUploadMediaParams) => {
  const { isDragOver, handleDragIn, handleDragOut, handleDragOver, handleDrop } =
    useDragAndDrop(dropImgUpload);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleImageUploadButton = () => {
    inputRef.current?.click();
  };

  return (
    <Flex
      css={uploadMediaBoxStyle(isDragOver, 536, 466, "20px")}
      onDrop={handleDrop}
      onDragEnter={handleDragIn}
      onDragLeave={handleDragOut}
      onDragOver={handleDragOver}
    >
      <UploadMediaIcon />
      <Text size="xLarge">사진과 동영상을 여기다 끌어다 놓으세요</Text>
      <label htmlFor="media">
        <Button variant={isDragOver ? "default" : "white"} onClick={handleImageUploadButton}>
          컴퓨터에서 선택
        </Button>
      </label>
      <input
        type="file"
        multiple={true}
        id="media"
        onChange={handleImgUpload}
        accept="image/jpeg, image/png, image/heic, image/heif, image/jpg"
        ref={inputRef}
      />
    </Flex>
  );
};

export default PostUploadMedia;
