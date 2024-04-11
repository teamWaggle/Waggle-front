import { axiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

import type { CommonResponseResultBooleanType } from "@/types/common";

export const getCheckUserUrl = async (userUrl: string) => {
  const { data } = await axiosInstance.get<CommonResponseResultBooleanType>(
    END_POINTS.CHECK_USERURL(userUrl)
  );

  return data;
};
