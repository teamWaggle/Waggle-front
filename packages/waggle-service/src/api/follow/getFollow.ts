import { authorizedAxiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

import type { CommonResponseType } from "@/types/common";

export const getFollow = async (userUrl?: string) => {
  const { data } = await authorizedAxiosInstance.get<CommonResponseType>(
    END_POINTS.IS_FOLLOW(userUrl)
  );

  return data;
};
