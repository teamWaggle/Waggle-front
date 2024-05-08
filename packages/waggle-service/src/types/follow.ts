import type { CommonResponseBaseType } from "@/types/common";
import type { MemberType } from "@/types/auth";

export interface FollowListType extends CommonResponseBaseType {
  result: MemberType[];
}
