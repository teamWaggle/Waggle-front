import { Flex } from "@/components/common";
import PostContent from "@/components/common/Post/PostContent";
import PostRecommend from "@/components/common/Post/PostRecommend";

import type { QuestionDataType } from "@/types/question";

const QuestionContent = ({ questionData }: QuestionDataType) => {
  const { boardId, content, mediaList, recommendCount } = questionData;

  return (
    <Flex styles={{ direction: "column", margin: "60px 0", gap: "60px" }}>
      <PostContent mediaList={mediaList} content={content} />

      <PostRecommend boardId={boardId} recommendCount={recommendCount} />
    </Flex>
  );
};

export default QuestionContent;
