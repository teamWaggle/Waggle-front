import { Flex, Text, getDefaultTextStyle, Theme } from "waggle-design-system";

import InformationIcon from "@/assets/svg/ic-information.svg?react";
import PlusIcon from "@/assets/svg/ic-gallery-plus.svg?react";

import {
  infoIconStyle,
  keywordButtonBoxStyle,
} from "@/components/Question/QuestionUpload/Keyword/Keyword.style";

const Keyword = () => {
  return (
    <Flex styles={{ align: "center", gap: "8px", marginTop: "20px" }}>
      <InformationIcon css={infoIconStyle} />
      <Text size="xLarge" css={getDefaultTextStyle(Theme.color.readonly_text, 500)}>
        연관 키워드 추가
      </Text>
      <Flex styles={{ align: "center", justify: "center" }} css={keywordButtonBoxStyle}>
        <PlusIcon width={12} height={12} />
      </Flex>
    </Flex>
  );
};

export default Keyword;
