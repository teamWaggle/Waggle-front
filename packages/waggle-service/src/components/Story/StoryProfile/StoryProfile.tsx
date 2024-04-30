import { css } from "@emotion/react";
import { useRecoilValue } from "recoil";

import { Flex, Text, Theme } from "waggle-design-system";

import ProfileOptionMenu from "@/components/common/ProfileOptionMenu";

import { useMemberInfoSaveQuery } from "@/hooks/api/member/useMemberInfoSaveQuery";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";

import { isLoggedInState } from "@/recoil/atoms/auth";
import { PATH } from "@/constants/path";

interface MemberDataType {
  profileImgUrl: string | undefined;
  nickname: string | undefined;
  memberId: number;
  userUrl: string;
}

interface StoryProfileProps {
  memberData: MemberDataType;
  editClick?: () => void;
  deleteClick?: () => void;
}

const StoryProfile = ({ memberData, editClick, deleteClick }: StoryProfileProps) => {
  const { profileImgUrl, nickname, memberId: ownerId, userUrl } = memberData;

  const isLoggedIn = useRecoilValue(isLoggedInState);

  const userData = isLoggedIn && useMemberInfoSaveQuery();

  const memberId = userData ? userData.memberId : null;

  return (
    <Flex
      styles={{ align: "center", justify: "space-between", width: "100%", position: "relative" }}
    >
      <Flex styles={{ align: "center", gap: "10px" }}>
        <img
          src={profileImgUrl}
          alt="profileImg"
          css={profileStyle}
          onClick={() => (window.location.href = `${PATH.MY(userUrl)}?tab=profile`)}
        />
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
  cursor: "pointer",
});
