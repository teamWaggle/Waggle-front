import { Flex, Box } from "@/components/common";
import { Sidebar } from "@/components/Sidebar";
import StoryCardSkeleton from "@/components/Story/StoryCard/StoryCardSkeleton";
import StorySearchBar from "@/components/Story/StorySearchBar/StorySearchBar";

import {
  mainStyle,
  mainBoxStyle,
  storyBoxStyle,
} from "@/components/Story/StoryMain/StoryMain.style";

const StoryMainSkeleton = () => {
  return (
    <Box tag="main" css={mainStyle}>
      <Flex styles={{ justify: "space-between" }}>
        <Flex tag="section" css={mainBoxStyle}>
          <Flex styles={{ gap: "20px", direction: "column", width: "100%" }}>
            <StorySearchBar />

            <Flex css={storyBoxStyle}>
              {Array.from({ length }, (_, index) => (
                <StoryCardSkeleton key={index} />
              ))}
            </Flex>
          </Flex>
        </Flex>

        <Sidebar />
      </Flex>
    </Box>
  );
};

export default StoryMainSkeleton;
