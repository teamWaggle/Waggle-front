import type { SerializedStyles } from "@emotion/react";

import { Box, Flex } from "waggle-design-system";

import useSlider from "@/hooks/common/useSlider";
import { createContext } from "react";

export const SliderContext = createContext<{ displayCount: number }>({
  displayCount: 0,
});

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
        <SliderContext.Provider value={{ displayCount }}>
          <Box css={cardBoxstyle(currentIndex)}>{children}</Box>
        </SliderContext.Provider>
      </Flex>
      {currentIndex <= dataLength - displayCount && (
        <Box onClick={handleNextOnClick}>{rightIcon}</Box>
      )}
    </Box>
  );
};
export default Slider;
