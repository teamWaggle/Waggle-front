import { Flex, Heading, Theme } from "waggle-design-system";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { SearchInput } from "@/components/common";

const ConnectionSearchbar = () => {
  return (
    <Flex styles={{ align: "center", justify: "space-between", width: "100%" }}>
      <Heading size="small" css={getDefaultTextStyle(Theme.color.brand_primary, 600)}>
        채팅방 검색
      </Heading>
      <SearchInput onChange={() => {}} width="600px" />
    </Flex>
  );
};

export default ConnectionSearchbar;
