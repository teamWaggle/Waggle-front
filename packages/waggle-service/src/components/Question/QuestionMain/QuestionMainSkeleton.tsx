import { Flex, Box, Skeleton } from "waggle-design-system";

import { mainStyle } from "@/components/Question/QuestionMain/QuestionMain.style";

const QuestionMainSkeleton = () => {
  return (
    <Box css={mainStyle}>
      <Flex styles={{ gap: "65px" }}>
        <Box>
          <Flex styles={{ align: "center", justify: "space-between", width: "100%" }}>
            <Skeleton width="89px" height="34px" />
            <Skeleton width="644px" height="34px" />
          </Flex>

          <Flex styles={{ direction: "column", gap: "24px", marginTop: "60px" }}>
            {Array.from({ length: 6 }, (_, index) => (
              <Skeleton width="754px" height="160px" key={index} />
            ))}
          </Flex>
        </Box>

        <Skeleton width="315px" height="279px" />
      </Flex>
    </Box>
  );
};

export default QuestionMainSkeleton;
