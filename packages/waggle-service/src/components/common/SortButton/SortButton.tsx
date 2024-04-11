import SortArrowIcon from "@/assets/svg/sort-arrow.svg?react";

import { Flex, Text } from "@/components/common";

import { Theme } from "@/styles/Theme";

import type { sortButtonType } from "@/types/common";

import { textStyle } from "@/components/common/SortButton/SortButton.style";

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
      <Text css={textStyle}>{defaultText}</Text>
      <SortArrowIcon />
    </Flex>
  );
};

export default SortButton;
