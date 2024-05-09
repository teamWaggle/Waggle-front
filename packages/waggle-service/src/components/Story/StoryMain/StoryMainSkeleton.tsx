import { Flex, Box, Skeleton } from "waggle-design-system";

import Sidebar from "@/components/Sidebar/Sidebar";
import StorySearchBar from "@/components/Story/StorySearchBar/StorySearchBar";

import { gridBoxStyle } from "@/components/Story/StoryMain/StoryMain.style";

const StoryMainSkeleton = () => {
  return (
    <Box styles={{ padding: "32px 0 60px" }}>
      <Flex styles={{ gap: "30px", justify: "center" }}>
        <Box>
          <StorySearchBar />
          <Box tag="ol" css={gridBoxStyle}>
            {Array.from({ length: 9 }, (_, index) => (
              <Skeleton width="252px" height="252px" key={index} />
            ))}
          </Box>
        </Box>
        <Sidebar />
      </Flex>

      <Sidebar />
    </Box>
  );
};

export default StoryMainSkeleton;
