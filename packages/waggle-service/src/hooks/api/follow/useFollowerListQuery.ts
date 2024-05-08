import type { AxiosError } from "axios";

import { useSuspenseQuery } from "@tanstack/react-query";

import { getFollowerList } from "@/api/follow/getFollowerList";

import { QUERY_KEYS } from "@/constants/queryKeys";

import type { FollowListType } from "@/types/follow";

export const useFollowerListQuery = (userUrl?: string) => {
  const { data: followerListData } = useSuspenseQuery<FollowListType, AxiosError>({
    queryKey: [QUERY_KEYS.FOLLOWER_LIST],
    queryFn: () => getFollowerList(userUrl),
  });

  return { followerListData };
};
