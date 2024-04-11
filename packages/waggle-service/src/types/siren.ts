import type { CommonResponseBaseType } from "./common";
import type { MemberType } from "@/types/auth";

export interface SirenType extends CommonResponseBaseType {
  result: SirenResultType;
}

export interface SirenResultType {
  boardId: number;
  category: string;
  status: string;
  title: string;
  member: MemberType;
  createdDate: Date;
  viewCount: number;
  lostDate: string;
  lostLocate: string;
  content: string;
  petBreed: string;
  petAge: string;
  petGender: string;
  mediaList: string[];
  contact: string;
  recommendCount: number;
}

export interface SirenDataType {
  sirenData: SirenResultType;
}

export interface SirenTitleType extends SirenDataType {
  handleEditSiren?: () => void;
  handleDeleteSiren?: () => void;
}

export interface SirenListType extends CommonResponseBaseType {
  result: SirenListResultType;
}

export interface SirenListResultType {
  sirenList: SirenListInfoType[];
  sirenCount: number;
  isFirst: boolean;
  isLast: boolean;
}

export interface SirenListInfoType {
  boardId: number;
  title: string;
  thumbnail: string;
  createdDate: string;
  lostLocate: string;
  category: string;
  status: string;
  recommendCount: number;
}

export interface SirenRepresentativeType extends CommonResponseBaseType {
  result: SirenRepresentativeResultType;
}

export interface SirenRepresentativeResultType {
  sirenList: SirenListInfoType[];
}

export interface SirenFormData {
  title: string;
  content: string;
  lostLocate: string;
  petBreed: string;
  petGender: string;
  lostDate: string;
  petAge: string;
  contact: string;
  category: string;
  mediaList: string[];
}
