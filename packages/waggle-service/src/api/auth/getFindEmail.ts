import type { AxiosResponse } from "axios";

import { axiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

import type { FindEmailResponseType } from "@/types/auth";

interface FindEmailRequestType {
  name: string;
  birthday: string;
}

export const getFindEmail = async ({ name, birthday }: FindEmailRequestType) => {
  const { data } = await axiosInstance.get<
    FindEmailRequestType,
    AxiosResponse<FindEmailResponseType>
  >(END_POINTS.FIND_EMAIL(name, birthday));

  return data;
};
