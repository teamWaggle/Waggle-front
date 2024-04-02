import { useNavigate } from "react-router-dom";

import { Flex, Heading } from "@/components/common";
import PetAgeInput from "@/components/SignUp/SignUpPet/PetAgeInput/PetAgeInput";
import PetBreedInput from "@/components/SignUp/SignUpPet/PetBreedInput/PetBreedInput";
import PetGenderInput from "@/components/SignUp/SignUpPet/PetGenderInput/PetGenderInput";
import PetIntroductionInput from "@/components/SignUp/SignUpPet/PetIntroductionInput/PetIntroductionInput";
import PetNameInput from "@/components/SignUp/SignUpPet/PetNameInput/PetNameInput";
import PetProfileInput from "@/components/SignUp/SignUpPet/PetProfileInput/PetProfileInput";

import { PATH } from "@/constants/path";

import { useSignUpPetForm } from "@/hooks/auth/useSignUpPetForm";
import { useSingleImgUpload } from "@/hooks/useSingleImgUpload";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import { getNextButtonStyle } from "@/components/SignUp/SignUp.shared.style";
import { formLayoutStyle, buttonLayoutStyle } from "@/components/SignUp/SignUpPet/SignUpPet.style";

const SignUpPet = () => {
	const navigate = useNavigate();

	const { handleImgUpload, uploadMedia } = useSingleImgUpload();

	const { signUpPetRequest, updateInputValue, handleSaveClick } = useSignUpPetForm({ uploadMedia });

	return (
		<Flex styles={{ direction: "column", marginTop: "50px", gap: "30px" }}>
			<Flex styles={{ direction: "column", gap: "40px", align: "center" }}>
				<Heading
					size="xSmall"
					css={getDefaultTextStyle(Theme.color.text, 600)}
					style={{ textAlign: "center" }}
				>
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
				<button css={getNextButtonStyle("건너뛰기")} onClick={() => navigate(PATH.ROOT)}>
					건너뛰기
				</button>

				<button css={getNextButtonStyle("저장하기")} onClick={handleSaveClick}>
					저장하기
				</button>
			</Flex>
		</Flex>
	);
};

export default SignUpPet;
