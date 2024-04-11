import type { AxiosResponse } from "axios";

import { authorizedAxiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

import type { CommonResponseType } from "@/types/common";

interface EditSirenRequestType {
  sirenId: number;
  formData: FormData;
}

export const putSiren = async ({ sirenId, formData }: EditSirenRequestType) => {
  const config = {
    headers: { "Content-Type": "multipart/form-data" },
  };

  return await authorizedAxiosInstance.put<EditSirenRequestType, AxiosResponse<CommonResponseType>>(
    END_POINTS.SIREN(sirenId),
    formData,
    config
  );
};
