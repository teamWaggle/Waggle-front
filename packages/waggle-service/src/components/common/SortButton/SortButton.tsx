import { Flex, Text, Theme, getDefaultTextStyle } from "waggle-design-system";

import SortArrowIcon from "@/assets/svg/sort-arrow.svg?react";

import type { sortButtonType } from "@/types/common";

const SortButton = ({ defaultText }: sortButtonType) => {
  return (
    <Flex
      styles={{
        align: "center",
        padding: "2px 6px 2px 12px",
        borderRadius: "4px",
        border: `1px solid ${Theme.color.border}`,
      }}
    >
      <Text css={getDefaultTextStyle(Theme.color.text_02, 500)}>{defaultText}</Text>
      <SortArrowIcon />
    </Flex>
  );
};

export default SortButton;
