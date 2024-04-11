import { Flex, Text } from "@/components/common";

import type { updatePetInputValueType } from "@/types/auth";

import { getFormTextStyle, getInputStyle } from "@/components/SignUp/SignUp.shared.style";

interface PetBreedInputParams extends updatePetInputValueType {
  breed: string;
}

const PetBreedInput = ({ breed, updateInputValue }: PetBreedInputParams) => {
  return (
    <Flex styles={{ direction: "column", gap: "4px" }}>
      <Text css={getFormTextStyle(true)}>강아지 종</Text>
      <input
        css={getInputStyle("444px")}
        placeholder="강아지종을 입력해주세요"
        value={breed}
        onChange={(e) => updateInputValue("breed", e.target.value)}
      />
    </Flex>
  );
};

export default PetBreedInput;
