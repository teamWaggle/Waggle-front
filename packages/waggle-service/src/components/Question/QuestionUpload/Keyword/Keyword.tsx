import { useState, useRef } from "react";

import { Flex, Box, Text, getDefaultTextStyle, Theme } from "waggle-design-system";

import InformationIcon from "@/assets/svg/ic-information.svg?react";
import PlusIcon from "@/assets/svg/ic-gallery-plus.svg?react";

import useClickOutSide from "@/hooks/common/useClickOutSide";

import {
  keywordBoxStyle,
  infoIconStyle,
  keywordButtonBoxStyle,
  tooltipBoxStyle,
} from "@/components/Question/QuestionUpload/Keyword/Keyword.style";

const Keyword = () => {
  const [isToolTipOpen, setIsToolTipOpen] = useState(false);

  const tooltipRef = useRef<HTMLDivElement>(null);

  useClickOutSide(tooltipRef, () => setIsToolTipOpen(false));

  return (
    <div css={keywordBoxStyle} ref={tooltipRef}>
      <InformationIcon css={infoIconStyle} onClick={() => setIsToolTipOpen((prev) => !prev)} />
      <Text size="xLarge" css={getDefaultTextStyle(Theme.color.readonly_text, 500)}>
        연관 키워드 추가
      </Text>
      <Flex styles={{ align: "center", justify: "center" }} css={keywordButtonBoxStyle}>
        <PlusIcon width={12} height={12} />
      </Flex>

      {isToolTipOpen && (
        <Box css={tooltipBoxStyle}>
          <Text size="small" css={getDefaultTextStyle(Theme.color.readonly_text, 500)}>
            상단에 노출되는 키워드를 통해 내 글을 소개해보세요! 공백 미포함 8글자, 특수문자 불가
          </Text>
        </Box>
      )}
    </div>
  );
};

export default Keyword;
