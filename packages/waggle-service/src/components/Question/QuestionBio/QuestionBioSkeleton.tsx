import { Flex, Box, Skeleton } from "waggle-design-system";

import { sectionStyle, boxStyle } from "@/components/Question/QuestionBio/QuestionBio.style";

const QuestionBioSkeleton = () => {
  return (
    <Box css={sectionStyle}>
      <Flex styles={{ margin: "0 auto", justify: "space-between" }} css={boxStyle}>
        <Flex styles={{ direction: "column", gap: "52px", marginTop: "54px" }}>
          <Flex styles={{ direction: "column", gap: "10px" }}>
            {Array.from({ length: 4 }, (_, index) => (
              <Skeleton key={index} width="198px" height="32px" />
            ))}
          </Flex>

          <Skeleton width="93px" height="35px" />
        </Flex>

        <Flex styles={{ direction: "column", gap: "24px" }}>
          {Array.from({ length: 3 }, (_, index) => (
            <Skeleton width="754px" height="160px" key={index} />
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

export default QuestionBioSkeleton;
