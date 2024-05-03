import type { ChangeEvent } from "react";

import SearchButtonIcon from "@/assets/svg/search-button.svg?react";

import Flex from "@/components/Flex/Flex";
import {
  searchButtonStyle,
  searchInputStyle,
  searchStyle,
} from "@/components/SearchInput/SearchInput.style";

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
