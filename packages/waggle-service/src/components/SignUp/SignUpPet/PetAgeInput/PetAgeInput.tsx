import { Flex, Text } from "@/components/common";

import type { updatePetInputValueType } from "@/types/auth";

import { getFormTextStyle, getInputStyle } from "@/components/SignUp/SignUp.shared.style";

interface PetAgeInputParams extends updatePetInputValueType {
  age: string;
}

const PetAgeInput = ({ age, updateInputValue }: PetAgeInputParams) => {
  return (
    <Flex styles={{ direction: "column", gap: "4px" }}>
      <Text css={getFormTextStyle(true)}>강아지 나이</Text>
      <input
        css={getInputStyle("214px")}
        placeholder="강아지 나이를 입력해주세요"
        value={age}
        onChange={(e) => updateInputValue("age", e.target.value)}
      />
    </Flex>
  );
};

export default PetAgeInput;
