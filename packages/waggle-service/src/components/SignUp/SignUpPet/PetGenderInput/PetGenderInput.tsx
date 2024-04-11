import FeMaleDisabledIcon from "@/assets/svg/ic-female-disabled.svg?react";
import FeMaleIcon from "@/assets/svg/ic-female.svg?react";
import MaleDisabledIcon from "@/assets/svg/ic-male-disabled.svg?react";
import MaleIcon from "@/assets/svg/ic-male.svg?react";

import { Flex, Text } from "@/components/common";

import type { updatePetInputValueType } from "@/types/auth";

import { getFormTextStyle } from "@/components/SignUp/SignUp.shared.style";

interface PetGenderInputParams extends updatePetInputValueType {
  gender?: string;
}

const PetGenderInput = ({ gender, updateInputValue }: PetGenderInputParams) => {
  return (
    <Flex styles={{ direction: "column", gap: "4px" }}>
      <Text css={getFormTextStyle(false)}>강아지 성별</Text>
      <Flex styles={{ gap: "16px", height: "44px", align: "center" }}>
        {gender === "FEMALE" ? (
          <FeMaleIcon onClick={() => updateInputValue("gender", "FEMALE")} />
        ) : (
          <FeMaleDisabledIcon onClick={() => updateInputValue("gender", "FEMALE")} />
        )}

        {gender === "MALE" ? (
          <MaleIcon onClick={() => updateInputValue("gender", "MALE")} />
        ) : (
          <MaleDisabledIcon onClick={() => updateInputValue("gender", "MALE")} />
        )}
      </Flex>
    </Flex>
  );
};

export default PetGenderInput;
