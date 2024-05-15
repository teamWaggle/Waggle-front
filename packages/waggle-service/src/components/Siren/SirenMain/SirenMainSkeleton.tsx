import { Flex, Box, Skeleton } from "waggle-design-system";

import { gridBoxStyle } from "@/components/Siren/SirenMain/SirenMain";

const SirenMainSkeleton = () => {
  return (
    <Box>
      <Flex styles={{ justify: "space-between", align: "center", marginTop: "76px" }}>
        <Flex styles={{ gap: "22px", align: "center" }}>
          <Skeleton width="89px" height="34px" />
          <Skeleton width="426px" height="32px" />
        </Flex>
        <Skeleton width="508px" height="34px" />
      </Flex>
      <Box css={gridBoxStyle}>
        {Array.from({ length: 8 }, (_, index) => (
          <Skeleton width="270px" height="340px" key={index} />
        ))}
      </Box>
    </Box>
  );
};

export default SirenMainSkeleton;
