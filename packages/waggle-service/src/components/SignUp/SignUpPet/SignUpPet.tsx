import { useNavigate } from "react-router-dom";

import { Flex, Heading } from "@/components/common";
import Button from "@/components/common/Design/Button/Button";
import PetAgeInput from "@/components/SignUp/SignUpPet/PetAgeInput/PetAgeInput";
import PetBreedInput from "@/components/SignUp/SignUpPet/PetBreedInput/PetBreedInput";
import PetGenderInput from "@/components/SignUp/SignUpPet/PetGenderInput/PetGenderInput";
import PetIntroductionInput from "@/components/SignUp/SignUpPet/PetIntroductionInput/PetIntroductionInput";
import PetNameInput from "@/components/SignUp/SignUpPet/PetNameInput/PetNameInput";
import PetProfileInput from "@/components/SignUp/SignUpPet/PetProfileInput/PetProfileInput";

import { PATH } from "@/constants/path";

import { useSignUpPetForm } from "@/hooks/auth/useSignUpPetForm";
import { useSingleImgUpload } from "@/hooks/useSingleImgUpload";

import {
  boxStyle,
  formLayoutStyle,
  buttonLayoutStyle,
} from "@/components/SignUp/SignUpPet/SignUpPet.style";

const SignUpPet = () => {
  const navigate = useNavigate();

  const { handleImgUpload, uploadMedia } = useSingleImgUpload({});

  const { signUpPetRequest, updateInputValue, handleSaveClick } = useSignUpPetForm({ uploadMedia });

  return (
    <Flex styles={{ direction: "column", marginTop: "50px", gap: "30px" }}>
      <Flex css={boxStyle}>
        <Heading size="xSmall">
          나의 반려견을 등록해보세요!
          <br />
          My Waggle에서 언제든지 반려견을 등록하고 수정할 수 있어요
        </Heading>

        <Flex css={formLayoutStyle}>
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
        </Flex>
      </Flex>

      <Flex css={buttonLayoutStyle}>
        <Button variant="disabled" onClick={() => navigate(PATH.ROOT)}>
          건너뛰기
        </Button>

        <Button onClick={handleSaveClick}>저장하기</Button>
      </Flex>
    </Flex>
  );
};

export default SignUpPet;
