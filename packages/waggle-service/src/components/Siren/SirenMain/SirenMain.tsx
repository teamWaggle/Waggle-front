import { useEffect, useState } from "react";

import { Flex, Box, Text, Theme } from "waggle-design-system";

import SirenCard from "@/components/Siren/SirenCard/SirenCard";
import { SearchInput } from "@/components/common";
import SortButton from "@/components/common/SortButton/SortButton";

import { SIREN_TAG_CATEGORY } from "@/constants/siren";
import { QUESTION_FILTER, FILTER_DEFAULT } from "@/constants/filter";

// import { useSirenListQuery } from "@/hooks/api/siren/useSirenListQuery";
import { useSirenFilterQuery } from "@/hooks/api/siren/useSirenFilterQuery";

import { tagStyle } from "@/components/Siren/SirenEdit/SirenEdit.style";

const SirenMain = () => {
  const [filterOption, setFilterOption] = useState(FILTER_DEFAULT.OPTION);
  const [filterText, setFilterText] = useState(FILTER_DEFAULT.TEXT);

  const { sirenListData, refetch } = useSirenFilterQuery(filterOption, 0);

  const [tagName, setTagName] = useState("임시보호");

  const handleFilterOption = (option: string) => {
    setFilterOption(option);
  };

  const handleFilterText = (text: string) => {
    setFilterText(text);
  };

  useEffect(() => {
    refetch();
  }, [filterOption]);

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
                css={tagStyle(tagName === tag.tagName ? tag.color : Theme.color.border)}
                onClick={() => setTagName(tag.tagName)}
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
          marginTop: "76px",
        }}
      >
        {sirenListData.result.sirenList.map((sirenInfo) => (
          <SirenCard key={sirenInfo.boardId} sirenInfo={sirenInfo} />
        ))}
      </Flex>
    </Box>
  );
};

export default SirenMain;
