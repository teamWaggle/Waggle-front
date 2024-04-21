import { Flex, Divider, Spinner } from "waggle-design-system";

import { commentLayoutStyle } from "./StoryComment";

const StoryCommentSkeleton = () => {
  return (
    <>
      <Divider length="309px" />

      <Flex styles={{ align: "center", justify: "center" }} css={commentLayoutStyle}>
        <Spinner />
      </Flex>
    </>
  );
};

export default StoryCommentSkeleton;
