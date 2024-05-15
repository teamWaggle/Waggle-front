import { Box, Theme } from "waggle-design-system";

import StoryBio from "@/components/Story/StoryBio/StoryBio";
import StoryMainSkeleton from "@/components/Story/StoryMain/StoryMainSkeleton";

const StoryPageSkeleton = () => {
  return (
    <>
      <Box tag="section" styles={{ height: "332px", backgroundColor: Theme.color.brand_primary }}>
        <StoryBio />
      </Box>

      <StoryMainSkeleton />
    </>
  );
};

export default StoryPageSkeleton;
