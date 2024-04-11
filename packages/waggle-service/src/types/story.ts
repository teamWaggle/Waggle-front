import type { MemberType } from "@/types/auth";
import type { CommonResponseBaseType } from "@/types/common";

export interface StoryType {
  isSuccess: boolean;
  code: number;
  message: string;
  result: StoryResultType;
}

export interface StoryResultType {
  boardId: number;
  content: string;
  createdDate: string | Date;
  hashtagList: string[];
  mediaList: string[];
  member: MemberType;
  recommendCount: number;
}

export interface StoryDataType {
  storyData: StoryResultType;
}

export interface StoryListType extends CommonResponseBaseType {
  result: StoryListResultType;
}

export interface StoryListResultType {
  storyList: StoryListInfoType[];
  nextPageParam: number;
}

export interface StoryListInfoType {
  boardId: number;
  thumbnail: string;
}

export interface StoryFormData {
  content?: string;
  hashtagList?: string[];
  mediaList?: string[];
}
