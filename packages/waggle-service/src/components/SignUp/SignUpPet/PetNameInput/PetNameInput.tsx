import { Flex, Text } from "@/components/common";

import type { updatePetInputValueType } from "@/types/auth";

import { getFormTextStyle, getInputStyle } from "@/components/SignUp/SignUp.shared.style";

interface PetNameInputParams extends updatePetInputValueType {
  name?: string;
}

const PetNameInput = ({ name, updateInputValue }: PetNameInputParams) => {
  return (
    <Flex styles={{ direction: "column", gap: "4px" }}>
      <Text css={getFormTextStyle(true)}>강아지 이름</Text>
      <input
        css={getInputStyle("444px")}
        placeholder="사랑스러운 반려견의 이름을 입력해주세요"
        value={name}
        onChange={(e) => updateInputValue("name", e.target.value)}
      />
    </Flex>
  );
};

export default PetNameInput;
