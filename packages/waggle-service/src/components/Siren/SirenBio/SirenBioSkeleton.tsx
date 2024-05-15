import { Flex, Skeleton } from "waggle-design-system";

const SirenBioSkeleton = () => {
  return (
    <Flex styles={{ gap: "50px" }}>
      <Flex styles={{ marginTop: "50px", direction: "column", gap: "28px" }}>
        <Flex styles={{ direction: "column", gap: "10px" }}>
          {Array.from({ length: 3 }, (_, index) => (
            <Skeleton width="240px" height="36px" key={index} />
          ))}
        </Flex>
        <Skeleton width="93px" height="35px" />
      </Flex>

      <Flex styles={{ gap: "12px" }}>
        {Array.from({ length: 3 }, (_, index) => (
          <Skeleton width="270px" height="340px" key={index} />
        ))}
      </Flex>
    </Flex>
  );
};

export default SirenBioSkeleton;
