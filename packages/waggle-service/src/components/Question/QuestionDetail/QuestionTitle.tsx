import { Flex, Heading, Text } from "@/components/common";
import PostProfile from "@/components/common/Post/PostProfile";
import ProfileOptionMenu from "@/components/common/ProfileOptionMenu";
import Tag from "@/components/common/Tag/Tag";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import type { QuestionTitleType } from "@/types/question";

import { titleBoxStyle, keywordBoxStyle } from "@/components/common/Post/Post.style";

const QuestionTitle = ({
  questionData,
  handleEditQuestion,
  handleDeleteQuestion,
}: QuestionTitleType) => {
  const { status, title, hashtagList, member, viewCount, createdDate } = questionData;

  const memberId = Number(localStorage.getItem("MEMBER_ID"));

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
