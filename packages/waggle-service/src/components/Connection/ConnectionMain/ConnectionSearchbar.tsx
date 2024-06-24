import { Flex, Heading, Theme, getDefaultTextStyle } from "waggle-design-system";

import SearchInput from "@/components/common/SearchInput/SearchInput";

const ConnectionSearchbar = () => {
  return (
    <Flex styles={{ align: "center", justify: "space-between", width: "100%" }}>
      <Heading size="small" css={getDefaultTextStyle(Theme.color.brand_primary, 600)}>
        채팅방 검색
      </Heading>
      <SearchInput
        keyword="test"
        handleChangeInput={() => {}}
        handleSearchClick={() => {}}
        width="600px"
      />
    </Flex>
  );
};

export default ConnectionSearchbar;
