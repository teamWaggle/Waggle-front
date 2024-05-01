import { Fragment, useState } from "react";

import { Flex, Box } from "waggle-design-system";

import Sidebar from "@/components/Sidebar/Sidebar";
import StoryCard from "@/components/Story/StoryCard/StoryCard";
import StorySearchBar from "@/components/Story/StorySearchBar/StorySearchBar";
import RetryErrorBoundary from "@/components/common/ErrorBoundary/RetryErrorBoundary";
import SortButton from "@/components/common/SortButton/SortButton";

// import { useStoryListQuery } from "@/hooks/api/story/useStoryListQuery";
import { useStoryFilterQuery } from "@/hooks/api/story/useStoryFilterQuery";
import useObserver from "@/hooks/common/useObserver";

import { gridBoxStyle } from "@/components/Story/StoryMain/StoryMain.style";

const StoryMain = () => {
  const [filterOption, setFilterOption] = useState("latest");
  const [filterText, setFilterText] = useState("최신순");

  const { storyListData, hasNextPage, fetchNextPage, isFetching } =
    useStoryFilterQuery(filterOption);

  const ref = useObserver(async (entry, observer) => {
    observer.unobserve(entry.target);

    if (hasNextPage && !isFetching) {
      fetchNextPage();
    }
  });

  const handleFilterOption = (option: string) => {
    setFilterOption(option);
  };

  const handleFilterText = (text: string) => {
    setFilterText(text);
  };

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
            />
          </Flex>

          <Box tag="ol" css={gridBoxStyle}>
            <RetryErrorBoundary>
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
            </RetryErrorBoundary>
          </Box>
          <div ref={ref} />
        </Box>
        <Sidebar />
      </Flex>
    </Box>
  );
};

export default StoryMain;
