import type { AxiosResponse } from "axios";

import { authorizedAxiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

import type { CommonResponseType } from "@/types/common";

interface EditPetRequestType {
  petId: number;
  formData: FormData;
}

export const putPetInfo = async ({ petId, formData }: EditPetRequestType) => {
  const config = {
    headers: { "Content-Type": "multipart/form-data" },
  };

  return await authorizedAxiosInstance.put<EditPetRequestType, AxiosResponse<CommonResponseType>>(
    END_POINTS.PET(petId),
    formData,
    config
  );
};
