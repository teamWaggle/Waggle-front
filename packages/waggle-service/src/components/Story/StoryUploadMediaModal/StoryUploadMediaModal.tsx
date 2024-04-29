import { useEffect } from "react";
import { useRef } from "react";

import { Flex, Text, Button } from "waggle-design-system";

import UploadMediaIcon from "@/assets/svg/ic-media-upload.svg?react";

import StoryUploadModal from "@/components/Story/StoryUploadModal/StoryUploadModal";

import { useDragAndDrop } from "@/hooks/common/useDragAndDrop";
import { useMultipleImgUpload } from "@/hooks/common/useMultipleImgUpload";
import useModal from "@/hooks/common/useModal";

import { uploadMediaBoxStyle } from "@/components/common/Post/PostUploadMedia/PostUploadMedia.style";

const StoryUploadMediaModal = () => {
  const { uploadMediaList, handleImgUpload, dropImgUpload } = useMultipleImgUpload({});

  const { isDragOver, handleDragIn, handleDragOut, handleDragOver, handleDrop } =
    useDragAndDrop(dropImgUpload);

  const { openModal, closeModal } = useModal();

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleImageUploadButton = () => {
    inputRef.current?.click();
  };

  useEffect(() => {
    if (uploadMediaList.length !== 0) {
      closeModal();

      openModal({
        key: `StoryUploadModal`,
        component: () => <StoryUploadModal storyData={{}} uploadMediaList={uploadMediaList} />,
      });
    }
  }, [handleImgUpload, dropImgUpload]);

  return (
    <Flex
      styles={{ justify: "center", align: "center", direction: "column", gap: "20px" }}
      css={uploadMediaBoxStyle(isDragOver, 740, 740, "42px")}
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
        multiple
        id="media"
        onChange={handleImgUpload}
        accept="image/jpeg, image/png, image/heic, image/heif, image/jpg"
        ref={inputRef}
      />
    </Flex>
  );
};

export default StoryUploadMediaModal;
