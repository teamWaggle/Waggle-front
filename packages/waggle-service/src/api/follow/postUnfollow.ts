import type { AxiosResponse } from "axios";

import { authorizedAxiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

import type { CommonResponseResultBooleanType } from "@/types/common";

export const postUnfollow = async (userUrl?: string) => {
  return await authorizedAxiosInstance.post<number, AxiosResponse<CommonResponseResultBooleanType>>(
    END_POINTS.UNFOLLOW(userUrl)
  );
};
