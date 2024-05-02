import { Fragment } from "react";

import { css } from "@emotion/react";

import { Flex, Heading, getDefaultTextStyle, Theme } from "waggle-design-system";

import StoryCard from "@/components/Story/StoryCard/StoryCard";

import { useMemberStoryQuery } from "@/hooks/api/member/useMemberStoryQuery";
import useObserver from "@/hooks/common/useObserver";

import type { ParamUrlType } from "@/types/common";

const MyPageLog = ({ paramUrl }: ParamUrlType) => {
  const { memberStoryData, hasNextPage, fetchNextPage, isFetching } = useMemberStoryQuery(paramUrl);

  const ref = useObserver(async (entry, observer) => {
    observer.unobserve(entry.target);

    if (hasNextPage && !isFetching) {
      fetchNextPage();
    }
  });

  return (
    <Flex
      tag="main"
      styles={{
        direction: "column",
        gap: "30px",
      }}
      css={layoutStyle}
    >
      <Heading size="small" css={getDefaultTextStyle(Theme.color.text, 700)}>
        Waggle Log
      </Heading>

      <Flex styles={{ align: "center", wrap: "wrap", gap: "16px", width: "789px" }}>
        {memberStoryData.pages.map((storyData, index) => (
          <Fragment key={index}>
            {storyData.result.storyList.map((storyInfo) => (
              <StoryCard
                key={storyInfo.boardId}
                boardId={storyInfo.boardId}
                thumbnail={storyInfo.thumbnail}
              />
            ))}
          </Fragment>
        ))}
      </Flex>

      <div ref={ref} />
    </Flex>
  );
};

export default MyPageLog;

const layoutStyle = css({
  padding: "80px 0 0 30px",
  borderLeft: `1px solid ${Theme.color.border}`,
  height: "100%",
  minHeight: "100vh",
});
