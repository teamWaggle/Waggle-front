import type { ChangeEvent } from "react";

import { Flex } from "waggle-design-system";

import SearchButtonIcon from "@/assets/svg/ic-search-button.svg?react";

import {
  searchButtonStyle,
  searchInputStyle,
  searchStyle,
} from "@/components/common/SearchInput/SearchInput.style";

interface SearchBarProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  width: string;
}

const SearchInput = ({ onChange, width }: SearchBarProps) => {
  return (
    <Flex styles={{ align: "center", position: "relative" }} css={searchStyle(width)}>
      <input
        css={searchInputStyle(width)}
        type="text"
        placeholder="검색어를 입력해주세요."
        onChange={onChange}
      />
      <Flex tag="button" styles={{ align: "center", justify: "center" }} css={searchButtonStyle}>
        <SearchButtonIcon />
      </Flex>
    </Flex>
  );
};
export default SearchInput;
