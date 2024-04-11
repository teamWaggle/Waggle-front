import type { SerializedStyles } from "@emotion/react";

import { Box, Flex } from "@/components/common";

import useSlider from "@/hooks/useSlider";

const Slider = ({
  children,
  dataLength,
  displayCount,
  cardBoxstyle,
  leftIcon,
  rightIcon,
}: {
  children: React.ReactNode;
  dataLength: number;
  displayCount: number;
  cardBoxstyle: (currentIndex: number) => SerializedStyles;
  leftIcon: React.ReactNode;
  rightIcon: React.ReactNode;
}) => {
  const { currentIndex, handlePrevOnClick, handleNextOnClick } = useSlider(
    dataLength,
    displayCount
  );
  return (
    <Box style={{ position: "relative" }}>
      {currentIndex !== 0 && <Box onClick={handlePrevOnClick}>{leftIcon}</Box>}
      <Flex style={{ overflow: "hidden" }}>
        <Box css={cardBoxstyle(currentIndex)}>{children}</Box>
      </Flex>
      {currentIndex <= dataLength - displayCount && (
        <Box onClick={handleNextOnClick}>{rightIcon}</Box>
      )}
    </Box>
  );
};
export default Slider;
