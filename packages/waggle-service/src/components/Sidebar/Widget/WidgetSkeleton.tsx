import { Flex, Skeleton } from "waggle-design-system";

import { boxStyle } from "@/components/Sidebar/Widget/Widget.style";

const WidgetSkeleton = () => {
  return (
    <Flex
      styles={{
        direction: "column",
        align: "center",
        justify: "center",
      }}
      css={boxStyle}
    >
      <Skeleton width="148px" height="28px" style={{ marginBottom: "16px" }} />
      <Skeleton width="218px" height="24px" />

      <Flex styles={{ direction: "column", justify: "center", gap: "27px", marginTop: "27px" }}>
        {Array.from({ length: 4 }, (_, index) => (
          <Skeleton key={index} width="266px" height="80px" />
        ))}
      </Flex>
    </Flex>
  );
};

export default WidgetSkeleton;
