import { Flex, Box } from "waggle-design-system";

import Sidebar from "@/components/Sidebar/Sidebar";
import StoryCardSkeleton from "@/components/Story/StoryCard/StoryCardSkeleton";
import StorySearchBar from "@/components/Story/StorySearchBar/StorySearchBar";

import { gridBoxStyle } from "@/components/Story/StoryMain/StoryMain.style";

const StoryMainSkeleton = () => {
  return (
    <Box tag="section" styles={{ padding: "32px 0 60px" }}>
      <Flex styles={{ gap: "30px", justify: "center" }}>
        <Box>
          <StorySearchBar />
          <Box tag="ol" css={gridBoxStyle}>
            {Array.from({ length: 9 }, (_, index) => (
              <StoryCardSkeleton key={index} />
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
