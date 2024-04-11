import { Flex, Box, Text } from "@/components/common";
import PetAgeInput from "@/components/SignUp/SignUpPet/PetAgeInput/PetAgeInput";
import PetBreedInput from "@/components/SignUp/SignUpPet/PetBreedInput/PetBreedInput";
import PetGenderInput from "@/components/SignUp/SignUpPet/PetGenderInput/PetGenderInput";
import PetIntroductionInput from "@/components/SignUp/SignUpPet/PetIntroductionInput/PetIntroductionInput";
import PetNameInput from "@/components/SignUp/SignUpPet/PetNameInput/PetNameInput";
import PetProfileInput from "@/components/SignUp/SignUpPet/PetProfileInput/PetProfileInput";

import { useSignUpPetForm } from "@/hooks/auth/useSignUpPetForm";
import { useSingleImgUpload } from "@/hooks/useSingleImgUpload";

import type { PetParams } from "@/types/pet";

import {
  layoutStyle,
  buttonStyle,
} from "@/components/MyPage/MyPageMain/PetAddModal/PetAddModal.style";

const PetAddModal = ({ profileImgUrl, gender, name, petId }: PetParams) => {
  const { handleImgUpload, uploadMedia } = useSingleImgUpload({ prevImg: profileImgUrl });

  const { signUpPetRequest, updateInputValue, handleSaveClick } = useSignUpPetForm({
    uploadMedia,
    isMyPage: true,
    prevRequest: {
      name,
      gender,
      age: "test",
      breed: "test",
      introduction: "test",
    },
    petId,
  });

  return (
    <Flex css={layoutStyle}>
      <PetProfileInput handleImgUpload={handleImgUpload} uploadMedia={uploadMedia} />

      <PetNameInput name={signUpPetRequest.name} updateInputValue={updateInputValue} />

      <Flex styles={{ align: "center", gap: "60px" }}>
        <PetAgeInput age={signUpPetRequest.age} updateInputValue={updateInputValue} />

        <PetGenderInput gender={signUpPetRequest.gender} updateInputValue={updateInputValue} />
      </Flex>

      <PetBreedInput breed={signUpPetRequest.breed} updateInputValue={updateInputValue} />

      <PetIntroductionInput
        introduction={signUpPetRequest.introduction}
        updateInputValue={updateInputValue}
      />

      <Box tag="button" css={buttonStyle} onClick={handleSaveClick}>
        <Text size="large">저장</Text>
      </Box>
    </Flex>
  );
};

export default PetAddModal;
