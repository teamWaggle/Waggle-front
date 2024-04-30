import { useRecoilValue } from "recoil";

import { Flex, Heading, Tag, getDefaultTextStyle, Theme } from "waggle-design-system";

import PostProfile from "@/components/common/Post/PostProfile";
import ProfileOptionMenu from "@/components/common/ProfileOptionMenu";

import { useMemberInfoSaveQuery } from "@/hooks/api/member/useMemberInfoSaveQuery";

import { isLoggedInState } from "@/recoil/atoms/auth";

import type { SirenTitleType } from "@/types/siren";

const SirenTitle = ({ sirenData, handleEditSiren, handleDeleteSiren }: SirenTitleType) => {
  const { category, title, member, status, createdDate, viewCount } = sirenData;

  const isLoggedIn = useRecoilValue(isLoggedInState);

  const userData = isLoggedIn && useMemberInfoSaveQuery();

  const memberId = userData ? userData.memberId : null;

  return (
    <Flex
      styles={{
        direction: "column",
        gap: "12px",
        position: "relative",
        width: "100%",
      }}
    >
      <Flex styles={{ gap: "14px" }}>
        <Tag tagText={category} />
        <Tag tagText={status} isResolveTag />
      </Flex>

      <Heading css={getDefaultTextStyle(Theme.color.text, 700)}>{title}</Heading>

      <PostProfile member={member} viewCount={viewCount} createdDate={createdDate} />

      {member.memberId === memberId && (
        <ProfileOptionMenu handleEditMenu={handleEditSiren} handleDeleteMenu={handleDeleteSiren} />
      )}
    </Flex>
  );
};

export default SirenTitle;
