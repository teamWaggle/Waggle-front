import { Fragment } from "react";

import { Flex, Heading } from "@/components/common";
import StoryCard from "@/components/Story/StoryCard/StoryCard";

import { useMemberStoryQuery } from "@/hooks/api/member/useMemberStoryQuery";
import useObserver from "@/hooks/useObserver";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import type { MemberIdType } from "@/types/common";

import { layoutStyle, storyBoxStyle } from "@/components/MyPage/MyPageLog/MyPageLog.style";

const MyPageLog = ({ memberId }: MemberIdType) => {
  const { memberStoryData, hasNextPage, fetchNextPage, isFetching } = useMemberStoryQuery(memberId);

  const ref = useObserver(async (entry, observer) => {
    observer.unobserve(entry.target);

    if (hasNextPage && !isFetching) {
      fetchNextPage();
    }
  });

  return (
    <Flex tag="main" css={layoutStyle}>
      <Heading size="small" css={getDefaultTextStyle(Theme.color.text, 700)}>
        Waggle Log
      </Heading>

      <Flex css={storyBoxStyle}>
        {memberStoryData.pages.map((storyData, index) => (
          <Fragment key={index}>
            {storyData.result.storyList.map((storyInfo) => (
              <StoryCard boardId={storyInfo.boardId} thumbnail={storyInfo.thumbnail} />
            ))}
          </Fragment>
        ))}
      </Flex>

      <div ref={ref} />
    </Flex>
  );
};

export default MyPageLog;
