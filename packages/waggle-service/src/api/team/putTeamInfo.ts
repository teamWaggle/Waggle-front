import { authorizedAxiosInstance } from "@/api/axiosInstance";
import { END_POINTS } from "@/constants/api";
import type { CommonResponseResultBooleanType } from "@/types/common";
import type { AxiosResponse } from "axios";

export const putEditTeam = async (teamId: number, formData: FormData) => {
  const { data } = await authorizedAxiosInstance.put<
    FormData,
    AxiosResponse<CommonResponseResultBooleanType>
  >(END_POINTS.EDIT_TEAM(teamId), formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return data;
};
