import type { CommonResponseBaseType } from "@/types/common";
import type { MemberType } from "@/types/auth";

export interface ChatType extends CommonResponseBaseType {
  result: ChatResultType;
}

interface ChatResultType {
  chatRooms: ChatRoomType;
}

interface ChatRoomType {
  id: number;
  name: string;
  description: string;
  chatRoomMembers: ChatRoomMemberType;
  owner: MemberType;
}

interface ChatRoomMemberType {
  memberList: MemberType[];
  memberCount: number;
}
