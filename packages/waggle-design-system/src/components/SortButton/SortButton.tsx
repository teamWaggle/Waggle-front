import type { sortButtonType } from "@/types/common";

import SortArrowIcon from "@/assets/svg/ic-sort-arrow.svg";
import Flex from "@/components/Flex/Flex";
import { textStyle } from "@/components/SortButton/SortButton.style";
import Text from "@/components/Text/Text";
import { Theme } from "@/styles/Theme";

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
