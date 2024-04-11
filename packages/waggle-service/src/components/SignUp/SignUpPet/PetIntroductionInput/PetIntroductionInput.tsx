import { Flex, Text } from "@/components/common";

import type { updatePetInputValueType } from "@/types/auth";

import { getFormTextStyle, getTextareaStyle } from "@/components/SignUp/SignUp.shared.style";

interface PetIntroductionInputParams extends updatePetInputValueType {
  introduction: string;
}

const PetIntroductionInput = ({ introduction, updateInputValue }: PetIntroductionInputParams) => {
  return (
    <Flex styles={{ direction: "column", gap: "4px" }}>
      <Text css={getFormTextStyle(true)}>반려견 소개</Text>
      <textarea
        css={getTextareaStyle("70px")}
        placeholder="즐겨먹는 간식, 습관 등으로 반려견을 소개해주세요"
        value={introduction}
        onChange={(e) => updateInputValue("introduction", e.target.value)}
      />
    </Flex>
  );
};

export default PetIntroductionInput;
