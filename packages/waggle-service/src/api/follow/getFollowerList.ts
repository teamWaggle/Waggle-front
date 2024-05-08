import { axiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

import type { FollowListType } from "@/types/follow";

export const getFollowerList = async (userUrl?: string) => {
  const { data } = await axiosInstance.get<FollowListType>(END_POINTS.FOLLOWER_LIST(userUrl));

  return data;
};
