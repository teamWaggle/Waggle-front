import { Fragment, useState } from "react";

import { Flex, Box, Text, Theme, SearchInput } from "waggle-design-system";

import SirenCard from "@/components/Siren/SirenCard/SirenCard";
import SortButton from "@/components/common/SortButton/SortButton";

import { SIREN_TAG_CATEGORY } from "@/constants/siren";
import { QUESTION_FILTER } from "@/constants/filter";

import { useSirenListQuery } from "@/hooks/api/siren/useSirenListQuery";
// import { useSirenFilterQuery } from "@/hooks/api/siren/useSirenFilterQuery";
import { useFilter } from "@/hooks/post/useFilter";
import useObserver from "@/hooks/common/useObserver";

import { tagStyle } from "@/components/Siren/SirenEdit/SirenEdit.style";

const SirenMain = () => {
  const { filterText, handleFilterOption, handleFilterText } = useFilter();

  const { sirenListData, hasNextPage, fetchNextPage, isFetching } = useSirenListQuery();
  // const { sirenListData, refetch } = useSirenFilterQuery(filterOption, 0);

  const [category, setCategory] = useState("PROTECT");

  const ref = useObserver(async (entry, observer) => {
    observer.unobserve(entry.target);

    if (hasNextPage && !isFetching) {
      fetchNextPage();
    }
  });

  // useEffect(() => {
  //   refetch();
  // }, [filterOption]);

  return (
    <Box>
      <Flex styles={{ justify: "space-between", align: "center", marginTop: "76px" }}>
        <Flex styles={{ gap: "22px" }}>
          <Flex styles={{ gap: "10px" }}>
            <SortButton
              defaultText={filterText}
              handleFilterOption={handleFilterOption}
              handleFilterText={handleFilterText}
              filterData={QUESTION_FILTER}
            />
          </Flex>

          <Flex styles={{ gap: "14px" }}>
            {SIREN_TAG_CATEGORY.map((tag) => (
              <Flex
                key={tag.tagName}
                css={tagStyle(category === tag.category ? tag.color : Theme.color.border)}
                onClick={() => {
                  setCategory(tag.category);
                }}
              >
                <Text>{tag.tagName}</Text>
              </Flex>
            ))}
          </Flex>
        </Flex>

        <SearchInput onChange={() => {}} width="508px" />
      </Flex>

      <Flex
        tag="section"
        styles={{
          align: "center",
          wrap: "wrap",
          gap: "20px",
          marginTop: "50px",
        }}
      >
        {sirenListData.pages.map((sirenData, index) => (
          <Fragment key={index}>
            {sirenData.result.sirenList.map((sirenInfo) => (
              <SirenCard key={sirenInfo.boardId} sirenInfo={sirenInfo} />
            ))}
          </Fragment>
        ))}
        <div ref={ref} />
      </Flex>
    </Box>
  );
};

export default SirenMain;
