import { useRef } from "react";

import DefaultProfileImg from "@/assets/png/profile.png";

import { Flex, Text } from "@/components/common";
import Button from "@/components/common/Design/Button/Button";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import { inputNoneDisplayStyle, getFormTextStyle } from "@/components/SignUp/SignUp.shared.style";
import { imgStyle } from "@/components/SignUp/SignUpProfile/SignUpProfile.style";

interface ProfileInputParams {
  handleImgUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  uploadMedia: string;
}

const ProfileInput = ({ handleImgUpload, uploadMedia }: ProfileInputParams) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleImageUploadButton = () => {
    inputRef.current?.click();
  };

  return (
    <Flex styles={{ align: "center", gap: "60px" }}>
      <img
        src={uploadMedia.length !== 0 ? uploadMedia : DefaultProfileImg}
        alt="profileImg"
        css={imgStyle}
      />

      <Flex styles={{ direction: "column", gap: "14px" }}>
        <Text css={getFormTextStyle(false)}>프로필 이미지</Text>

        <input
          type="file"
          id="profileImg"
          onChange={handleImgUpload}
          css={inputNoneDisplayStyle}
          ref={inputRef}
        />

        <label htmlFor="profileImg">
          <Button variant="outline" onClick={handleImageUploadButton}>
            컴퓨터에서 파일 선택
          </Button>
        </label>

        <Text size="small" css={getDefaultTextStyle(Theme.color.disabled_text, 500)}>
          확장자: png, jpg, jpeg / 용량: 1MB 이하
        </Text>
      </Flex>
    </Flex>
  );
};

export default ProfileInput;
