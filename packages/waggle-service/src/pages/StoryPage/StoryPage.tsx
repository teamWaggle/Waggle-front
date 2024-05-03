import { Suspense } from "react";

import { Box, Theme } from "waggle-design-system";

import StoryBio from "@/components/Story/StoryBio/StoryBio";
import StoryMain from "@/components/Story/StoryMain/StoryMain";
import StoryMainSkeleton from "@/components/Story/StoryMain/StoryMainSkeleton";
import RetryErrorBoundary from "@/components/common/ErrorBoundary/RetryErrorBoundary";

const StoryPage = () => {
  return (
    <>
      <Box tag="section" styles={{ height: "332px", backgroundColor: Theme.color.brand_primary }}>
        <StoryBio />
      </Box>

      <RetryErrorBoundary>
        <Suspense fallback={<StoryMainSkeleton />}>
          <StoryMain />
        </Suspense>
      </RetryErrorBoundary>
    </>
  );
};

export default StoryPage;
