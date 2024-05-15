import { Box } from "waggle-design-system";

import SirenMainSkeleton from "@/components/Siren/SirenMain/SirenMainSkeleton";
import SirenBioSkeleton from "@/components/Siren/SirenBio/SirenBioSkeleton";

import { boxStyle } from "@/pages/SirenPage/SirenPage";

const SirenPageSkeleton = () => {
  return (
    <Box css={boxStyle}>
      <SirenBioSkeleton />
      <SirenMainSkeleton />
    </Box>
  );
};

export default SirenPageSkeleton;
