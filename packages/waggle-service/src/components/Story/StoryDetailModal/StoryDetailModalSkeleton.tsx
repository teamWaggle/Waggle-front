import { Flex, Spinner } from "waggle-design-system";

import { layoutStyle } from "@/components/Story/StoryDetailModal/StoryDetailModal";

const StoryDetailModalSkeleton = () => {
  return (
    <Flex styles={{ align: "center", justify: "center" }} css={layoutStyle}>
      <Spinner />
    </Flex>
  );
};

export default StoryDetailModalSkeleton;
