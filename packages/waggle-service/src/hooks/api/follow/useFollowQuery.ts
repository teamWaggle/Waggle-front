import type { AxiosError } from "axios";

import { useSuspenseQuery } from "@tanstack/react-query";

import { getFollow } from "@/api/follow/getFollow";

import { QUERY_KEYS } from "@/constants/queryKeys";

import type { CommonResponseType } from "@/types/common";

export const useFollowQuery = (userUrl?: string) => {
  const { data: followData } = useSuspenseQuery<CommonResponseType, AxiosError>({
    queryKey: [QUERY_KEYS.FOLLOW],
    queryFn: () => getFollow(userUrl),
  });

  const isFollow = followData.result;

  return { isFollow };
};
