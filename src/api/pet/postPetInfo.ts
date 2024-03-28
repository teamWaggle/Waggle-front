import type { AxiosResponse } from "axios";

import { authorizedAxiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

import type { CommonResponseType } from "@/types/common";

export const postPetInfo = async (formData: FormData) => {
	const config = {
		headers: { "Content-Type": "multipart/form-data" },
	};

	return authorizedAxiosInstance.post<FormData, AxiosResponse<CommonResponseType>>(
		END_POINTS.PET,
		formData,
		config,
	);
};
