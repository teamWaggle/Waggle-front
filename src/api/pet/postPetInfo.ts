import { authorizedAxiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

export interface FormDataType {
	request: PetFormType;
}

export interface PetFormType {
	name: string;
	breed: string;
	gender: string;
	age: string;
	profileImgUrl: string;
	uploadProfile: boolean;
}

export const postPetInfo = async (formData: FormData) => {
	const config = {
		headers: { "Content-Type": "multipart/form-data" },
	};

	return authorizedAxiosInstance.post<FormDataType>(END_POINTS.PET, formData, config);
};
