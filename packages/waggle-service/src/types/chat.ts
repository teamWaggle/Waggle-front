import type { CommonResponseBaseType } from "@/types/common";
import type { MemberType } from "@/types/auth";

export interface ChatListType extends CommonResponseBaseType {
  result: ChatListResultType;
}

interface ChatListResultType {
  chatRooms: ChatRoomType[];
}

export interface ChatRoomType {
  id: number;
  name: string;
  description: string;
  chatRoomMembers: ChatRoomMemberType;
  owner: MemberType;
}

export interface ChatRoomInfoType {
  chatRoomInfo: ChatRoomType;
}

interface ChatRoomMemberType {
  memberList: MemberType[];
  memberCount: number;
}

export interface ChatType extends CommonResponseBaseType {
  result: ChatRoomType;
}

export interface MemberChatListType extends CommonResponseBaseType {
  result: MemberChatRoomListType[];
}

interface MemberChatRoomListType {
  chatRooms: MemberChatRoomType;
}

interface MemberChatRoomType {
  id: number;
  name: string;
  unreadCount: number;
  lastMessageContent: string;
}
