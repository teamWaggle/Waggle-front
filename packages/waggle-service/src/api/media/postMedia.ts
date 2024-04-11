import type { AxiosResponse } from "axios";

import { axiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

import type { CommonResponseBaseType } from "@/types/common";

interface ImgUrlType {
  imgUrl: string;
}

interface MediaResultType {
  mediaList: ImgUrlType[];
}

export interface MediaType extends CommonResponseBaseType {
  result: MediaResultType;
}

export const postMedia = async (formData: FormData) => {
  const config = {
    headers: { "Content-Type": "multipart/form-data" },
  };

  const { data } = await axiosInstance.post<FormData, AxiosResponse<MediaType>>(
    END_POINTS.MEDIA,
    formData,
    config
  );

  return data;
};
