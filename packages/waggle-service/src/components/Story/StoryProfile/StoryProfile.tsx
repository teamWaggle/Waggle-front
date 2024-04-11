import { css } from "@emotion/react";

import { Flex, Text } from "@/components/common";
import ProfileOptionMenu from "@/components/common/ProfileOptionMenu";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

interface ProfileType {
  img: string | undefined;
  nickname: string | undefined;
  ownerId: number;
  editClick?: () => void;
  deleteClick?: () => void;
}

const StoryProfile = ({ img, nickname, ownerId, editClick, deleteClick }: ProfileType) => {
  const memberId = Number(localStorage.getItem("MEMBER_ID"));

  return (
    <Flex
      styles={{ align: "center", justify: "space-between", width: "100%", position: "relative" }}
    >
      <Flex styles={{ align: "center", gap: "10px" }}>
        <img src={img} alt="profileImg" css={profileStyle} />
        <Text size="small" css={getDefaultTextStyle(Theme.color.text, 700)}>
          {nickname}
        </Text>
      </Flex>

      {memberId === ownerId && (
        <ProfileOptionMenu handleEditMenu={editClick} handleDeleteMenu={deleteClick} isLeft />
      )}
    </Flex>
  );
};

export default StoryProfile;

const profileStyle = css({
  width: "33px",
  height: "33px",
  borderRadius: "50%",
  objectFit: "cover",
});
