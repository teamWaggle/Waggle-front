import type { AxiosError } from "axios";

import { useSuspenseQuery } from "@tanstack/react-query";

import { getFollowingList } from "@/api/follow/getFollowingList";

import { QUERY_KEYS } from "@/constants/queryKeys";

import type { FollowListType } from "@/types/follow";

export const useFollowingListQuery = (userUrl?: string) => {
  const { data: followingListData } = useSuspenseQuery<FollowListType, AxiosError>({
    queryKey: [QUERY_KEYS.FOLLOWING_LIST],
    queryFn: () => getFollowingList(userUrl),
  });

  return { followingListData };
};
