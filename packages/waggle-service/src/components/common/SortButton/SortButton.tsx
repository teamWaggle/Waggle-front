import { css } from "@emotion/react";

import { useState } from "react";

import { Flex, Box, Text, Theme, getDefaultTextStyle } from "waggle-design-system";

import SortArrowIcon from "@/assets/svg/sort-arrow.svg?react";

import type { sortButtonType } from "@/types/common";

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

const boxStyle = css({
  padding: "2px 6px 2px 12px",
  borderRadius: "4px",
  border: `1px solid ${Theme.color.border}`,
  cursor: "pointer",
  height: "34px",
  width: "89px",
});

const innerBoxStyle = css({
  position: "absolute",
  top: "calc(100% + 4px)",
  zIndex: 1,
  borderRadius: "4px",
  border: `1px solid ${Theme.color.border}`,
  cursor: "pointer",
  backgroundColor: Theme.color.white,

  "& > div": {
    padding: "2px 6px 2px 12px",
    height: "34px",
    width: "87px",
    cursor: "pointer",

    "&:first-of-type": {
      borderBottom: `1px solid ${Theme.color.border}`,
    },
  },
});
