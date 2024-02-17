import { authorizedAxiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

export interface FormDataType {
	request: SignUpFormType;
}

export interface SignUpFormType {
	nickname: string;
	name: string;
	birthday: string;
	userUrl: string;
	profileImgUrl: string;
}

export const putMemberInfoFirst = async (formData: FormData) => {
	const config = {
		headers: { "Content-Type": "multipart/form-data" },
	};

	return authorizedAxiosInstance.put<FormDataType>(END_POINTS.MEMBER_INFO_FIRST, formData, config);
};
