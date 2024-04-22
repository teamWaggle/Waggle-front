import { Box, Theme } from "waggle-design-system";

import StoryBio from "@/components/Story/StoryBio/StoryBio";
import StoryMain from "@/components/Story/StoryMain/StoryMain";

const StoryPage = () => {
  return (
    <>
      <Box tag="section" styles={{ height: "332px", backgroundColor: Theme.color.brand_primary }}>
        <StoryBio />
      </Box>

      <StoryMain />
    </>
  );
};

export default StoryPage;
