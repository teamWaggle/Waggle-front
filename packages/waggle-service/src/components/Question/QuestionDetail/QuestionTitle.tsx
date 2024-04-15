import { useRecoilValue } from "recoil";

import { Flex, Heading, Text } from "@/components/common";
import PostProfile from "@/components/common/Post/PostProfile";
import ProfileOptionMenu from "@/components/common/ProfileOptionMenu";
import Tag from "@/components/common/Tag/Tag";

import { useMemberInfoSaveQuery } from "@/hooks/api/member/useMemberInfoSaveQuery";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import { isLoggedInState } from "@/recoil/atoms/auth";

import type { QuestionTitleType } from "@/types/question";

import { titleBoxStyle, keywordBoxStyle } from "@/components/common/Post/Post.style";

const QuestionTitle = ({
  questionData,
  handleEditQuestion,
  handleDeleteQuestion,
}: QuestionTitleType) => {
  const { status, title, hashtagList, member, viewCount, createdDate } = questionData;

  const isLoggedIn = useRecoilValue(isLoggedInState);

  const userData = isLoggedIn && useMemberInfoSaveQuery();

  const memberId = userData ? userData.memberId : null;

  return (
    <Flex css={titleBoxStyle}>
      <Tag tagText={status} isResolveTag />

      <Heading css={getDefaultTextStyle(Theme.color.brand_primary, 700)}>Q. {title}</Heading>

      <Flex css={keywordBoxStyle}>
        {hashtagList &&
          hashtagList.map((tag) => (
            <Text size="xLarge" key={tag}>
              #{tag}
            </Text>
          ))}
      </Flex>

      <PostProfile member={member} viewCount={viewCount} createdDate={createdDate} />

      {member.memberId === memberId && (
        <ProfileOptionMenu
          handleEditMenu={handleEditQuestion}
          handleDeleteMenu={handleDeleteQuestion}
        />
      )}
    </Flex>
  );
};

export default QuestionTitle;
