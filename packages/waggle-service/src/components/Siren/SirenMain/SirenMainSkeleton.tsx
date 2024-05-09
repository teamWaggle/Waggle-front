import { Box, Skeleton } from "waggle-design-system";

import { gridBoxStyle } from "@/components/Siren/SirenMain/SirenMain";

const SirenMainSkeleton = () => {
  return (
    <Box css={gridBoxStyle}>
      {Array.from({ length: 8 }, (_, index) => (
        <Skeleton width="270px" height="340px" key={index} />
      ))}
    </Box>
  );
};

export default SirenMainSkeleton;
