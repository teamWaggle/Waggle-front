import { useState } from "react";

import { Flex, Text, SearchInput } from "@/components/common";
import SortButton from "@/components/common/SortButton/SortButton";

import { SIREN_TAG_CATEGORY } from "@/constants/siren";

import { Theme } from "@/styles/Theme";

import { tagStyle } from "@/components/common/Tag/Tag.style";

const SirenSearchBar = () => {
  const [tagName, setTagName] = useState("강아지 찾아요");

  return (
    <Flex styles={{ justify: "space-between", align: "center", marginTop: "76px" }}>
      <Flex styles={{ gap: "22px" }}>
        <Flex styles={{ gap: "10px" }}>
          <SortButton defaultText="인기순" />
          <SortButton defaultText="해결" />
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
  );
};

export default SirenSearchBar;
