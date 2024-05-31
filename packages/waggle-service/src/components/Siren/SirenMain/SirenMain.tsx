import { Fragment, useState, useEffect } from "react";
import { css } from "@emotion/react";

import { Flex, Box, Text, Theme } from "waggle-design-system";

import SirenCard from "@/components/Siren/SirenCard/SirenCard";
import SortButton from "@/components/common/SortButton/SortButton";
import SearchInput from "@/components/common/SearchInput/SearchInput";

import { SIREN_FILTER_TAG_CATEGORY } from "@/constants/siren";
import { QUESTION_FILTER } from "@/constants/filter";

import { useFilter } from "@/hooks/post/useFilter";
import useObserver from "@/hooks/common/useObserver";
import { useSirenListQuery } from "@/hooks/api/siren/useSirenListQuery";
import { useSearch } from "@/hooks/post/useSearch";

import { tagStyle } from "@/components/Siren/SirenEdit/SirenEdit.style";

const SirenMain = () => {
  const { filterOption, filterText, handleFilterOption, handleFilterText } = useFilter();

  const { keyword, handleChangeInput } = useSearch();

  const [category, setCategory] = useState("ALL");

  const { sirenListData, refetch, hasNextPage, fetchNextPage, isFetching } = useSirenListQuery(
    keyword,
    filterOption,
    category
  );

  console.log(sirenListData);

  const ref = useObserver(async (entry, observer) => {
    observer.unobserve(entry.target);

    if (hasNextPage && !isFetching) {
      fetchNextPage();
    }
  });

  useEffect(() => {
    refetch();
  }, [filterOption, category]);

  return (
    <Box>
      <Flex styles={{ justify: "space-between", align: "center", marginTop: "76px" }}>
        <Flex styles={{ gap: "22px", align: "center" }}>
          <Flex styles={{ gap: "10px" }}>
            <SortButton
              defaultText={filterText}
              handleFilterOption={handleFilterOption}
              handleFilterText={handleFilterText}
              filterData={QUESTION_FILTER}
            />
          </Flex>

          <Flex styles={{ gap: "14px" }}>
            {SIREN_FILTER_TAG_CATEGORY.map((tag) => (
              <Flex
                key={tag.tagName}
                css={tagStyle(
                  category === tag.category ? tag.color : Theme.color.border,
                  tag.category === "ALL"
                )}
                onClick={() => {
                  setCategory(tag.category);
                }}
              >
                <Text>{tag.tagName}</Text>
              </Flex>
            ))}
          </Flex>
        </Flex>

        <SearchInput
          keyword={keyword}
          handleChangeInput={handleChangeInput}
          handleSearchClick={() => refetch()}
          width="508px"
        />
      </Flex>

      <Box tag="section" css={gridBoxStyle}>
        {sirenListData.pages.map((sirenData, index) => (
          <Fragment key={index}>
            {sirenData.result.sirenList.map((sirenInfo) => (
              <SirenCard key={sirenInfo.boardId} sirenInfo={sirenInfo} />
            ))}
          </Fragment>
        ))}
        <div ref={ref} />
      </Box>
    </Box>
  );
};

export default SirenMain;

export const gridBoxStyle = css({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "20px",
  marginTop: "50px",
});
