import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { PATH } from "@/constants/path";

import { usePetInfoMutation } from "@/hooks/api/pet/usePetInfoMutation";

import type { SignUpPetFormType } from "@/types/auth";

interface UseSignUpPetFormParams {
	uploadMedia: string;
}

export const useSignUpPetForm = ({ uploadMedia }: UseSignUpPetFormParams) => {
	const { mutate: petInfoMutate } = usePetInfoMutation();

	const navigate = useNavigate();

	const [signUpPetRequest, setSignUpPetRequest] = useState({
		name: "",
		age: "",
		gender: "FEMALE",
		breed: "",
		introduction: "",
	});

	const validateForm = () => {
		if (
			!signUpPetRequest.name &&
			!signUpPetRequest.age &&
			!signUpPetRequest.breed &&
			!signUpPetRequest.introduction
		) {
			return false;
		}

		return true;
	};

	const updateInputValue = useCallback(
		<Key extends keyof SignUpPetFormType>(key: Key, value: SignUpPetFormType[Key]) => {
			setSignUpPetRequest((prevSignUpPetRequest) => {
				const data = {
					...prevSignUpPetRequest,
					[key]: value,
				};

				return data;
			});
		},
		[],
	);

	const handleSaveClick = () => {
		const formData = new FormData();

		const createPetRequest = {
			name: signUpPetRequest.name,
			description: signUpPetRequest.introduction,
			breed: signUpPetRequest.breed,
			gender: signUpPetRequest.gender,
			age: signUpPetRequest.age,
			petProfileImg: uploadMedia,
		};

		formData.append("createPetRequest", JSON.stringify(createPetRequest));

		if (validateForm()) {
			petInfoMutate(formData, { onSuccess: () => navigate(PATH.ROOT) });
		}
	};

	return { signUpPetRequest, updateInputValue, handleSaveClick };
};
