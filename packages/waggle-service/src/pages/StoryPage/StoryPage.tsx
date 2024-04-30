import { Suspense } from "react";

import { Box, Theme } from "waggle-design-system";

import StoryBio from "@/components/Story/StoryBio/StoryBio";
import StoryMain from "@/components/Story/StoryMain/StoryMain";
import StoryMainSkeleton from "@/components/Story/StoryMain/StoryMainSkeleton";

const StoryPage = () => {
  return (
    <>
      <Box tag="section" styles={{ height: "332px", backgroundColor: Theme.color.brand_primary }}>
        <StoryBio />
      </Box>

      <Suspense fallback={<StoryMainSkeleton />}>
        <StoryMain />
      </Suspense>
    </>
  );
};

export default StoryPage;
