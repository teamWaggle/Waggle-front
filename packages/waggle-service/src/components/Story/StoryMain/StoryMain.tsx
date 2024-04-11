import { Fragment } from "react";

import { Flex, Box } from "@/components/common";
import { Sidebar } from "@/components/Sidebar";
import StoryCard from "@/components/Story/StoryCard/StoryCard";
import StorySearchBar from "@/components/Story/StorySearchBar/StorySearchBar";

import { useStoryListQuery } from "@/hooks/api/story/useStoryListQuery";
import useObserver from "@/hooks/useObserver";

import {
  mainStyle,
  mainBoxStyle,
  storyBoxStyle,
} from "@/components/Story/StoryMain/StoryMain.style";

const StoryMain = () => {
  const { storyListData, hasNextPage, fetchNextPage, isFetching } = useStoryListQuery();

  const ref = useObserver(async (entry, observer) => {
    observer.unobserve(entry.target);

    if (hasNextPage && !isFetching) {
      fetchNextPage();
    }
  });

  return (
    <Box tag="main" css={mainStyle}>
      <Flex styles={{ justify: "space-between" }}>
        <Flex tag="section" css={mainBoxStyle}>
          <Flex styles={{ gap: "20px", direction: "column", width: "100%" }}>
            <StorySearchBar />

            <Flex css={storyBoxStyle}>
              {storyListData.pages.map((storyData, index) => (
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
        </Flex>

        <Sidebar />
      </Flex>
    </Box>
  );
};

export default StoryMain;
