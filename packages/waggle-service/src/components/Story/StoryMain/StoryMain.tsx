import { Fragment, useEffect } from "react";

import { Flex, Box } from "waggle-design-system";

import Sidebar from "@/components/Sidebar/Sidebar";
import StoryCard from "@/components/Story/StoryCard/StoryCard";
import StorySearchBar from "@/components/Story/StorySearchBar/StorySearchBar";
import SortButton from "@/components/common/SortButton/SortButton";

import { STORY_FILTER } from "@/constants/filter";

// import { useStoryListQuery } from "@/hooks/api/story/useStoryListQuery";
import { useStoryFilterQuery } from "@/hooks/api/story/useStoryFilterQuery";
import useObserver from "@/hooks/common/useObserver";
import { useFilter } from "@/hooks/post/useFilter";

import { gridBoxStyle } from "@/components/Story/StoryMain/StoryMain.style";

const StoryMain = () => {
  const { filterOption, filterText, handleFilterOption, handleFilterText } = useFilter();

  const { storyListData, hasNextPage, fetchNextPage, isFetching, refetch } =
    useStoryFilterQuery("latest");

  const ref = useObserver(async (entry, observer) => {
    observer.unobserve(entry.target);

    if (hasNextPage && !isFetching) {
      fetchNextPage();
    }
  });

  useEffect(() => {
    refetch();
  }, [filterOption]);

  return (
    <Box tag="section" styles={{ padding: "32px 0 60px" }}>
      <Flex styles={{ gap: "30px", justify: "center" }}>
        <Box>
          <StorySearchBar />

          <Flex styles={{ justify: "flex-end" }}>
            <SortButton
              defaultText={filterText}
              handleFilterOption={handleFilterOption}
              handleFilterText={handleFilterText}
              filterData={STORY_FILTER}
            />
          </Flex>

          <Box tag="ol" css={gridBoxStyle}>
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
          </Box>
          <div ref={ref} />
        </Box>
        <Sidebar />
      </Flex>
    </Box>
  );
};

export default StoryMain;
