import { useNavigate } from "react-router-dom";

import { Flex, Tag } from "waggle-design-system";

import type { SirenCardParams } from "@/components/Siren/SirenCard/SirenCard";

import { PATH } from "@/constants/path";

import {
  widgetBoxStyle,
  textStyle,
  subTextStyle,
  tagStyle,
} from "@/components/Sidebar/Widget/SirenWidgetCard/SirenWidgetCard.style";

const SirenWidgetCard = ({ sirenInfo }: SirenCardParams) => {
  const navigate = useNavigate();

  return (
    <Flex
      styles={{
        align: "center",
        gap: "22px",
        position: "relative",
      }}
      css={widgetBoxStyle}
      onClick={() => navigate(PATH.SIREN_DETAIL(String(sirenInfo.boardId)))}
    >
      <img src={sirenInfo.thumbnail} alt="sirenImg" />
      <Flex styles={{ direction: "column", justify: "center", gap: "8px" }}>
        <p css={textStyle}>{sirenInfo.title}</p>
        <p css={subTextStyle}>{sirenInfo.lostLocate}</p>
      </Flex>

      <Flex styles={{ position: "absolute" }} css={tagStyle}>
        <Tag tagText={sirenInfo.category} isSmall />
      </Flex>
    </Flex>
  );
};

export default SirenWidgetCard;
