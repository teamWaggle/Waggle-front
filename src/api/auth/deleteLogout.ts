import { axiosInstance } from "@api/axiosInstance";

export const deleteLogout = () => {
	return axiosInstance.delete("/api/tokens");
};
