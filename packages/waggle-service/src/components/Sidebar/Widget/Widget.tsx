import { Flex, getDefaultTextStyle, Text, Theme } from "waggle-design-system";

import SirenWidgetCard from "@/components/Sidebar/Widget/SirenWidgetCard/SirenWidgetCard";

import { boxStyle, titleStyle } from "@/components/Sidebar/Widget/Widget.style";

import { useSirenRandomQuery } from "@/hooks/api/siren/useSirenRandomQuery";

const Widget = () => {
  const { sirenRandomListData } = useSirenRandomQuery();

  return (
    <Flex
      styles={{
        direction: "column",
        align: "center",
        justify: "center",
      }}
      css={boxStyle}
    >
      <Text size="xLarge" css={titleStyle}>
        Waggle SIREN
      </Text>
      <Text css={getDefaultTextStyle(Theme.color.text, 600)}>
        위험에 처한 강아지들을 도와주세요
      </Text>
      <Flex styles={{ direction: "column", justify: "center", gap: "27px", marginTop: "27px" }}>
        {sirenRandomListData.result.sirenList.map((sirenInfo) => (
          <SirenWidgetCard key={sirenInfo.boardId} sirenInfo={sirenInfo} />
        ))}
      </Flex>
    </Flex>
  );
};

export default Widget;
