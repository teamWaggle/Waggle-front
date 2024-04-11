import { axiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

import type { TokenType } from "@/types/auth";

export const postRefreshToken = async () => {
  const { data } = await axiosInstance.post<TokenType>(END_POINTS.TOKEN);

  console.log(data);

  return data;
};
