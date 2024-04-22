import { Flex, Modal, Button } from "waggle-design-system";

import PetAgeInput from "@/components/SignUp/SignUpPet/PetAgeInput/PetAgeInput";
import PetBreedInput from "@/components/SignUp/SignUpPet/PetBreedInput/PetBreedInput";
import PetGenderInput from "@/components/SignUp/SignUpPet/PetGenderInput/PetGenderInput";
import PetIntroductionInput from "@/components/SignUp/SignUpPet/PetIntroductionInput/PetIntroductionInput";
import PetNameInput from "@/components/SignUp/SignUpPet/PetNameInput/PetNameInput";
import PetProfileInput from "@/components/SignUp/SignUpPet/PetProfileInput/PetProfileInput";

import { useSignUpPetForm } from "@/hooks/auth/useSignUpPetForm";
import { useSingleImgUpload } from "@/hooks/common/useSingleImgUpload";

import type { PetParams } from "@/types/pet";

import { layoutStyle } from "@/components/MyPage/MyPageMain/PetAddModal/PetAddModal.style";

interface PetAddModalParams extends PetParams {
  isOpen: boolean;
  onClose: () => void;
}

const PetAddModal = ({
  isOpen,
  onClose,
  profileImgUrl,
  gender,
  name,
  petId,
}: PetAddModalParams) => {
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
    onClose,
  });

  return (
    <Modal isOpen={isOpen} closeModal={onClose}>
      <Flex styles={{ direction: "column", gap: "30px" }} css={layoutStyle}>
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

        <Button style={{ alignSelf: "flex-end" }} onClick={handleSaveClick}>
          저장
        </Button>
      </Flex>
    </Modal>
  );
};

export default PetAddModal;
