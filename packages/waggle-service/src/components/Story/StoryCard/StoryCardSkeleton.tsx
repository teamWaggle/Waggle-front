import { Flex } from "@/components/common";

import Skeleton from "../../common/Design/Skeleton/Skeleton";

const StoryCardSkeleton = () => {
  return (
    <Flex styles={{ align: "center", width: "252px", height: "252px", position: "relative" }}>
      <Skeleton width="252px" height="252px" />
    </Flex>
  );
};

export default StoryCardSkeleton;
