import FeMaleIcon from "@/assets/svg/ic-female.svg?react";
import MaleIcon from "@/assets/svg/ic-male.svg?react";

import { Flex, Box, Text, Divider } from "@/components/common";
import PostContent from "@/components/common/Post/PostContent";
import PostRecommend from "@/components/common/Post/PostRecommend";

import type { SirenDataType } from "@/types/siren";

import {
  textStyle,
  subTextStyle,
} from "@/components/Siren/SirenDetail/SirenContent/SirenContent.style";

const SirenContent = ({ sirenData }: SirenDataType) => {
  const {
    boardId,
    lostLocate,
    petBreed,
    petGender,
    lostDate,
    petAge,
    contact,
    mediaList,
    content,
    recommendCount,
  } = sirenData;

  const sirenContentTitleData = [
    {
      title: "강아지 실종 장소",
      data: lostLocate,
    },
    {
      title: "강아지 견종",
      data: petBreed,
    },
    {
      title: "강아지 성별",
      data: petGender,
    },
    {
      title: "강아지 실종 날짜",
      data: lostDate,
    },
    {
      title: "강아지 추정 나이",
      data: petAge,
    },
    {
      title: "연락처",
      data: contact,
    },
  ];

  return (
    <Flex styles={{ direction: "column", margin: "60px 0", gap: "60px" }}>
      <Flex styles={{ align: "center", wrap: "wrap", gap: "58px 72px" }}>
        {sirenContentTitleData.map((contentData) => (
          <Box styles={{ width: "333px" }} key={contentData.title}>
            <Text size="xLarge" css={textStyle}>
              {contentData.title}
            </Text>

            {contentData.title === "강아지 성별" ? (
              <>{contentData.data === "Male" ? <MaleIcon /> : <FeMaleIcon />}</>
            ) : (
              <>
                <Text size="large" css={subTextStyle}>
                  {contentData.data}
                </Text>
                <Divider />
              </>
            )}
          </Box>
        ))}
      </Flex>

      <PostContent mediaList={mediaList} content={content} />

      <PostRecommend boardId={boardId} recommendCount={recommendCount} />
    </Flex>
  );
};

export default SirenContent;
