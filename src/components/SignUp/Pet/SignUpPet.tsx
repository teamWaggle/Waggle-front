import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Flex, Heading } from "@/components/common";
import {
	PetGender,
	PetAge,
	PetBreed,
	PetIntroduction,
	PetName,
	PetProfile,
} from "@/components/SignUp/Pet/PetForm";

import { usePetInfoMutation } from "@/hooks/api/pet/usePetInfoMutation";
import { useSingleImgUpload } from "@/hooks/useSingleImgUpload";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import { formLayoutStyle, buttonLayoutStyle } from "@/components/SignUp/Pet/SignUpPet.style";
import { getNextButtonStyle } from "@/components/SignUp/SignUp.shared.style";

const SignUpPet = () => {
	const { mutate: petInfoMutation } = usePetInfoMutation();

	const { handleImgUpload, uploadMedia } = useSingleImgUpload();

	const navigate = useNavigate();

	const [name, setName] = useState("");
	const [age, setAge] = useState("");
	const [gender, setGender] = useState("FEMALE");
	const [breed, setBreed] = useState("");
	const [introduction, setIntroduction] = useState("");

	const validateForm = () => {
		if (!name && !age && !breed && !introduction) {
			return false;
		}

		return true;
	};

	const handleSaveClick = () => {
		const formData = new FormData();

		const createPetRequest = {
			name,
			description: introduction,
			breed,
			gender,
			age,
			petProfileImg: uploadMedia,
		};

		formData.append("createPetRequest", JSON.stringify(createPetRequest));

		if (validateForm()) {
			petInfoMutation(formData, { onSuccess: () => navigate("/") });
		}
	};

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
					{/* 프로필 영역 */}
					<PetProfile handleImgUpload={handleImgUpload} uploadMedia={uploadMedia} />

					{/* 강아지 이름 영역 */}
					<PetName name={name} changeName={setName} />

					<Flex styles={{ align: "center", gap: "60px" }}>
						{/* 강아지 나이 영역 */}
						<PetAge age={age} changeAge={setAge} />

						{/* 강아지 성별 영역 */}
						<PetGender gender={gender} changeGender={setGender} />
					</Flex>

					{/* 강아지 종 영역 */}
					<PetBreed breed={breed} changeBreed={setBreed} />

					{/* 반려견 소개 영역 */}
					<PetIntroduction introduction={introduction} changeIntroduction={setIntroduction} />
				</Flex>
			</Flex>

			<Flex css={buttonLayoutStyle}>
				<button css={getNextButtonStyle("이전")} onClick={() => navigate("/")}>
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
