import { Flex, Box, Skeleton } from "waggle-design-system";

import SidebarSkeleton from "@/components/Sidebar/SidebarSkeleton";
import StorySeacrBarSkeleton from "@/components/Story/StorySearchBar/StorySearchBarSkeleton";

import { gridBoxStyle } from "@/components/Story/StoryMain/StoryMain.style";

const StoryMainSkeleton = () => {
  return (
    <Box styles={{ padding: "32px 0 60px" }}>
      <Flex styles={{ gap: "30px", justify: "center" }}>
        <Box>
          <StorySeacrBarSkeleton />

          <Flex styles={{ justify: "flex-end" }}>
            <Skeleton width="89px" height="34px" />
          </Flex>

          <Box tag="ol" css={gridBoxStyle}>
            {Array.from({ length: 9 }, (_, index) => (
              <Skeleton width="252px" height="252px" key={index} />
            ))}
          </Box>
        </Box>
        <SidebarSkeleton />
      </Flex>
    </Box>
  );
};

export default StoryMainSkeleton;
