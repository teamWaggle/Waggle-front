import { useNavigate } from "react-router-dom";

import { useRecoilValue } from "recoil";

import DisLikeIcon from "@/assets/svg/ic-question-dislike.svg?react";
import LikeIcon from "@/assets/svg/ic-question-like.svg?react";

import { Flex, Heading, Text } from "@/components/common";
import Tag from "@/components/common/Tag/Tag";

import { PATH } from "@/constants/path";

import { useGetIsRecommend } from "@/hooks/api/recommend/useGetIsRecommend";

import { isLoggedInState } from "@/recoil/atoms/auth";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import { convertToUTC } from "@/utils/convertToUTC";

import type { SirenListInfoType } from "@/types/siren";

import {
  cardStyle,
  tagBoxStyle,
  infoStyle,
  subStyle,
  textStyle,
  bottomBoxStyle,
} from "@/components/Siren/SirenCard/SirenCard.style";

interface SirenCardParams {
  sirenInfo: SirenListInfoType;
  isMyPage?: boolean;
}

const SirenCard = ({ sirenInfo, isMyPage }: SirenCardParams) => {
  const { boardId, thumbnail, title, lostLocate, recommendCount, category, status, createdDate } =
    sirenInfo;

  const isLoggedIn = useRecoilValue(isLoggedInState);

  const isRecommend = isLoggedIn ? useGetIsRecommend(boardId) : false;

  const navigate = useNavigate();

  return (
    <Flex css={cardStyle(isMyPage)} onClick={() => navigate(PATH.SIREN_DETAIL(String(boardId)))}>
      <Flex css={tagBoxStyle}>
        <Tag tagText={category} />
        <Tag tagText={status} isResolveTag />
      </Flex>

      <img src={thumbnail} alt="thumbnail" />
      <Flex css={infoStyle}>
        <Heading size="xSmall" css={getDefaultTextStyle(Theme.color.brand_primary, 700)}>
          {title}
        </Heading>

        <Text css={subStyle}>{lostLocate}</Text>

        <Flex css={bottomBoxStyle}>
          <Flex styles={{ gap: "6px", align: "center" }}>
            {isRecommend ? (
              <LikeIcon width={18} height={18} />
            ) : (
              <DisLikeIcon width={18} height={18} />
            )}

            <Text size="xSmall" css={textStyle(isRecommend)}>
              {recommendCount}
            </Text>
          </Flex>

          <Text size="xSmall" css={getDefaultTextStyle(Theme.color.disabled_text, 500)}>
            {convertToUTC(new Date(createdDate)).date}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SirenCard;
