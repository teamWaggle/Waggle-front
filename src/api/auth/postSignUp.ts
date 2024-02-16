import { axiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

import type { FormDataType } from "@/types/auth";

export const postSignUp = async (formData: FormData) => {
	const config = {
		headers: { "Content-Type": "multipart/form-data" },
	};

	// const { data } = await axiosInstance.post<SignUpFormType, AxiosResponse<SignUpResponseType>>(
	// 	END_POINTS.SIGN_UP,
	// 	formData,
	// 	config,
	// );

	return axiosInstance.post<FormDataType>(END_POINTS.SIGN_UP, formData, config);

	// return data;
};
