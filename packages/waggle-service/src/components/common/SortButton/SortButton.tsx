import { useState } from "react";

import { Flex, Box, Text, Theme, getDefaultTextStyle } from "waggle-design-system";

import SortArrowIcon from "@/assets/svg/sort-arrow.svg?react";

import type { sortButtonType } from "@/types/common";

import { boxStyle, innerBoxStyle } from "@/components/common/SortButton/SortButton.style";

const SortButton = ({
  defaultText,
  handleFilterText,
  handleFilterOption,
  filterData,
}: sortButtonType) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box style={{ position: "relative" }}>
      <Flex
        styles={{
          align: "center",
        }}
        css={boxStyle}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <Text css={getDefaultTextStyle(Theme.color.text_02, 500)}>{defaultText}</Text>
        <SortArrowIcon />
      </Flex>

      {isOpen && (
        <Box css={innerBoxStyle}>
          {filterData.map((data) => (
            <Flex
              key={data.text}
              styles={{ align: "center" }}
              onClick={() => {
                handleFilterOption(data.option);
                handleFilterText(data.text);
                setIsOpen(false);
              }}
            >
              {data.text}
            </Flex>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default SortButton;
