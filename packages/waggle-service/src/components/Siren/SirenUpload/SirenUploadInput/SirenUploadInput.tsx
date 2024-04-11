import FeMaleDisabledIcon from "@/assets/svg/ic-female-disabled.svg?react";
import FeMaleIcon from "@/assets/svg/ic-female.svg?react";
import MaleDisabledIcon from "@/assets/svg/ic-male-disabled.svg?react";
import MaleIcon from "@/assets/svg/ic-male.svg?react";

import { Flex, Box, Text } from "@/components/common";

import type { SirenFormData } from "@/types/siren";

import {
  textStyle,
  inputStyle,
} from "@/components/Siren/SirenUpload/SirenUploadInput/SirenUploadInput.style";

interface UploadInfoProps {
  value: SirenFormData;
  updateInputValue: <Key extends keyof SirenFormData>(key: Key, value: SirenFormData[Key]) => void;
}

interface SirenDataType {
  valueKey: keyof SirenFormData;
  title: string;
  placeholder?: string;
  value: string;
}

const SirenUploadInput = ({ value, updateInputValue }: UploadInfoProps) => {
  const SIREN_PROTECT_DATA: SirenDataType[] = [
    {
      valueKey: "lostLocate",
      title: "위치",
      placeholder: "관련 위치 정보",
      value: value.lostLocate,
    },
    {
      valueKey: "petBreed",
      title: "견종",
      placeholder: "강아지 견종",
      value: value.petBreed,
    },
    {
      valueKey: "petGender",
      title: "성별",
      value: value.petGender,
    },
    {
      valueKey: "lostDate",
      title: "날짜",
      placeholder: "관련 날짜 정보",
      value: value.lostDate,
    },
    {
      valueKey: "petAge",
      title: "강아지 나이",
      placeholder: "강아지 추정 나이",
      value: value.petAge,
    },
    {
      valueKey: "contact",
      title: "연락처",
      placeholder: "연락처",
      value: value.contact,
    },
  ];

  return (
    <Flex styles={{ align: "center", wrap: "wrap", gap: "58px 72px", marginTop: "90px" }}>
      {SIREN_PROTECT_DATA.map((data) => (
        <Box styles={{ width: "333px" }} key={data.title}>
          <Text size="xLarge" css={textStyle}>
            {data.title}
          </Text>

          {data.title !== "성별" ? (
            <input
              type="text"
              placeholder={data.placeholder}
              css={inputStyle}
              value={data.value}
              onChange={(e) => updateInputValue(data.valueKey, e.target.value)}
            />
          ) : (
            <Flex styles={{ gap: "10px" }}>
              {data.value === "FEMALE" ? (
                <FeMaleIcon onClick={() => updateInputValue(data.valueKey, "FEMALE")} />
              ) : (
                <FeMaleDisabledIcon onClick={() => updateInputValue(data.valueKey, "FEMALE")} />
              )}

              {data.value === "MALE" ? (
                <MaleIcon onClick={() => updateInputValue(data.valueKey, "MALE")} />
              ) : (
                <MaleDisabledIcon onClick={() => updateInputValue(data.valueKey, "MALE")} />
              )}
            </Flex>
          )}
        </Box>
      ))}
    </Flex>
  );
};

export default SirenUploadInput;
