import SelectArrowIcon from "@/assets/svg/ic-select-arrow.svg?react";

import { Flex, Box, Text } from "@/components/common";

import { yearData, monthData, dayData } from "@/constants/auth";

import type { BirthdayForm } from "@/hooks/auth/useFindEmailForm";

import { formTextStyle, getSelectBoxStyle } from "@/components/common/BirthDay/Birthday.style";

interface BirthdayParams {
  selectOpen: BirthdayForm;
  handleSelectOpen: <Key extends keyof BirthdayForm>(key: Key, value: BirthdayForm[Key]) => void;
  birthdayRequest: BirthdayForm;
  updateBirthdayValue: <Key extends keyof BirthdayForm>(key: Key, value: BirthdayForm[Key]) => void;
}

const Birthday = ({
  selectOpen,
  handleSelectOpen,
  birthdayRequest,
  updateBirthdayValue,
}: BirthdayParams) => {
  return (
    <Flex styles={{ direction: "column", gap: "8px" }}>
      <Text css={formTextStyle}>생년월일</Text>
      <Flex styles={{ gap: "13px" }}>
        {/* 생년 */}
        <Box css={getSelectBoxStyle(selectOpen.year, birthdayRequest.year !== "생년")}>
          <Text onClick={() => handleSelectOpen("year", selectOpen.year ? false : true)}>
            {birthdayRequest.year}
          </Text>

          {selectOpen.year && (
            <ul>
              {yearData.map((data) => (
                <li
                  key={data.selectText}
                  onClick={() => updateBirthdayValue("year", String(data.selectText))}
                  aria-label="YEAR"
                >
                  {data.selectText}
                </li>
              ))}
            </ul>
          )}

          <SelectArrowIcon />
        </Box>

        {/* 월 선택 */}
        <Box css={getSelectBoxStyle(selectOpen.month, birthdayRequest.month !== "월 선택")}>
          <Text onClick={() => handleSelectOpen("month", selectOpen.month ? false : true)}>
            {birthdayRequest.month}
          </Text>

          {selectOpen.month && (
            <ul>
              {monthData.map((data) => (
                <li
                  key={data.selectText}
                  onClick={() => updateBirthdayValue("month", String(data.selectText))}
                  aria-label="MONTH"
                >
                  {data.selectText}
                </li>
              ))}
            </ul>
          )}

          <SelectArrowIcon />
        </Box>

        {/* 일 선택 */}
        <Box css={getSelectBoxStyle(selectOpen.day, birthdayRequest.day !== "일 선택")}>
          <Text onClick={() => handleSelectOpen("day", selectOpen.day ? false : true)}>
            {birthdayRequest.day}
          </Text>

          {selectOpen.day && (
            <ul>
              {dayData.map((data) => (
                <li
                  key={data.selectText}
                  onClick={() => updateBirthdayValue("day", String(data.selectText))}
                  aria-label="DAY"
                >
                  {data.selectText}
                </li>
              ))}
            </ul>
          )}

          <SelectArrowIcon />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Birthday;
