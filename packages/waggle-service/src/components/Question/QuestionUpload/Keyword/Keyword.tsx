import { useState, useRef, useEffect } from "react";

import { Flex, Box, Text, getDefaultTextStyle, Theme } from "waggle-design-system";

import InformationIcon from "@/assets/svg/ic-information.svg?react";
import PlusIcon from "@/assets/svg/ic-gallery-plus.svg?react";
import CloseIcon from "@/assets/svg/ic-close-modal.svg?react";

import useClickOutSide from "@/hooks/common/useClickOutSide";

import type { QuestionFormData } from "@/types/question";

import {
  keywordBoxStyle,
  infoIconStyle,
  keywordButtonBoxStyle,
  keywordStyle,
  tooltipBoxStyle,
} from "@/components/Question/QuestionUpload/Keyword/Keyword.style";

interface KeywordProps {
  updateInputValue: <Key extends keyof QuestionFormData>(
    key: Key,
    value: QuestionFormData[Key]
  ) => void;
}

const Keyword = ({ updateInputValue }: KeywordProps) => {
  const [isToolTipOpen, setIsToolTipOpen] = useState(false);
  const [isInputOpen, setIsInputOpen] = useState(false);

  const [keyword, setKeyword] = useState("");
  const [keywordList, setKeyWordList] = useState<string[]>([]);

  const tooltipRef = useRef<HTMLDivElement>(null);

  useClickOutSide(tooltipRef, () => setIsToolTipOpen(false));

  const handleDeleteKeyword = (keyword: string) => {
    setKeyWordList((prev) => prev.filter((text) => text !== keyword));
  };

  const handleSubmit = (keyword: string) => {
    setKeyWordList((prev) => [...prev, keyword]);
    setKeyword("");
    setIsInputOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent, keyword: string) => {
    if (e.key === "Enter") {
      handleSubmit(keyword);
    }
  };

  useEffect(() => {
    updateInputValue("hashtagList", keywordList);
  }, [keywordList]);

  return (
    <div css={keywordBoxStyle} ref={tooltipRef}>
      <InformationIcon css={infoIconStyle} onClick={() => setIsToolTipOpen((prev) => !prev)} />
      <Text size="xLarge" css={getDefaultTextStyle(Theme.color.readonly_text, 500)}>
        연관 키워드 추가
      </Text>

      {keywordList.map((keyword, index) => (
        <Box key={`${keyword}${index}`} css={keywordStyle}>
          #{keyword}
          <CloseIcon width={10} height={10} onClick={() => handleDeleteKeyword(keyword)} />
        </Box>
      ))}

      {isInputOpen && (
        <input
          css={keywordStyle}
          placeholder="키워드 입력"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e, keyword)}
          maxLength={8}
        />
      )}

      {keywordList.length <= 4 && (
        <Flex
          styles={{ align: "center", justify: "center" }}
          css={keywordButtonBoxStyle}
          onClick={() => setIsInputOpen((prev) => !prev)}
        >
          {isInputOpen ? <CloseIcon width={12} height={12} /> : <PlusIcon width={12} height={12} />}
        </Flex>
      )}

      {isToolTipOpen && (
        <Box css={tooltipBoxStyle}>
          <Text size="small" css={getDefaultTextStyle(Theme.color.readonly_text, 500)}>
            상단에 노출되는 키워드를 통해 내 글을 소개해보세요! 공백 미포함 8글자, 특수문자 불가
          </Text>
        </Box>
      )}
    </div>
  );
};

export default Keyword;
