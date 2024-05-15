import { Flex, Skeleton } from "waggle-design-system";

const StorySeacrBarSkeleton = () => {
  return (
    <Flex styles={{ direction: "column", width: "100%" }}>
      <Flex
        styles={{ align: "center", justify: "space-between", width: "100%", marginBottom: "20px" }}
      >
        <Flex styles={{ align: "center", gap: "20px" }}>
          <Skeleton width="233px" height="40px" />
          <Skeleton width="93px" height="35px" />
        </Flex>

        <Skeleton width="252px" height="34px" />
      </Flex>
    </Flex>
  );
};

export default StorySeacrBarSkeleton;
