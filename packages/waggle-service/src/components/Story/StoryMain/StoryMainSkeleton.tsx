import { Flex, Box } from "waggle-design-system";

import Sidebar from "@/components/Sidebar/Sidebar";
import StoryCardSkeleton from "@/components/Story/StoryCard/StoryCardSkeleton";

import { gridBoxStyle } from "@/components/Story/StoryMain/StoryMain.style";

const StoryMainSkeleton = () => {
  return (
    <Box tag="main" styles={{ padding: "32px 0 60px" }}>
      <Flex styles={{ justify: "space-between" }}>
        <Box tag="ol" css={gridBoxStyle}>
          {Array.from({ length: 9 }, (_, index) => (
            <StoryCardSkeleton key={index} />
          ))}
        </Box>
      </Flex>

      <Sidebar />
    </Box>
  );
};

export default StoryMainSkeleton;
