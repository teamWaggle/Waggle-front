import type { CommonResponseBaseType } from "@/types/common";
import type { MemberType } from "@/types/auth";

export interface ChatListType extends CommonResponseBaseType {
  result: ChatListResultType;
}

interface ChatListResultType {
  chatRooms: ChatRoomType[];
  nextPageParam: number;
}

export interface ChatRoomType {
  id: number;
  name: string;
  description: string;
  isPrivate: boolean;
  chatRoomMemberCount: number;
}

export interface ChatRoomInfoType {
  chatRoomInfo: ChatRoomType;
}

export interface MemberChatRoomInfoType {
  memberChatRoomInfo: MemberChatRoomType;
}

export interface ChatType extends CommonResponseBaseType {
  result: ChatRoomDetailType;
}

export interface ChatRoomDetailType {
  id: number;
  name: string;
  description: string;
  isPrivate: boolean;
  password: string;
  chatRoomMembers: MemberListType;
  owner: MemberType;
}

interface MemberListType {
  memberList: MemberType[];
  memberCount: number;
}

export interface MemberChatListType extends CommonResponseBaseType {
  result: MemberChatRoomListType;
}

interface MemberChatRoomListType {
  chatRooms: MemberChatRoomType[];
  nextPageParam: number;
}

interface MemberChatRoomType {
  id: number;
  name: string;
  unreadCount: number;
  lastMessageContent: string;
  lastSenderProfileImgUrl: string;
}
