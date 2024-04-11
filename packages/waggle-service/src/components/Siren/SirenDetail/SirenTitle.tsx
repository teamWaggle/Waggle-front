import { Flex, Heading } from "@/components/common";
import PostProfile from "@/components/common/Post/PostProfile";
import ProfileOptionMenu from "@/components/common/ProfileOptionMenu";
import Tag from "@/components/common/Tag/Tag";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import type { SirenTitleType } from "@/types/siren";

import { titleBoxStyle } from "@/components/common/Post/Post.style";

const SirenTitle = ({ sirenData, handleEditSiren, handleDeleteSiren }: SirenTitleType) => {
  const { category, title, member, status, createdDate, viewCount } = sirenData;

  const memberId = Number(localStorage.getItem("MEMBER_ID"));

  return (
    <Flex css={titleBoxStyle}>
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
