import { Flex, Text } from "@/components/common";
import SirenWidgetCard from "@/components/Sidebar/Widget/SirenWidgetCard";

import { Theme } from "@/styles/Theme";

import { titleStyle, subStyle } from "@/components/Sidebar/Widget/Widget.style";

const Widget = () => {
  return (
    <Flex
      styles={{
        direction: "column",
        align: "center",
        justify: "center",
        padding: "32px 0 26px",
        border: `1px solid ${Theme.color.brand_primary}`,
        borderRadius: "14px",
        boxShadow: Theme.boxShadow.shadow2,
        width: "310px",
      }}
    >
      <Text size="xLarge" css={titleStyle}>
        Waggle SIREN
      </Text>
      <Text css={subStyle}>위험에 처한 강아지들을 도와주세요</Text>
      <Flex styles={{ direction: "column", justify: "center", gap: "27px" }}>
        <SirenWidgetCard />
        <SirenWidgetCard />
        <SirenWidgetCard />
        <SirenWidgetCard />
      </Flex>
    </Flex>
  );
};

export default Widget;
