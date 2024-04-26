import type { CommonResponseBaseType } from "@/types/common";

export interface PetInfoType extends CommonResponseBaseType {
  result: PetResultType[];
}

interface PetResultType {
  petId: number;
  name: string;
  breed: string;
  gender: string;
  description: string;
  age: string;
  profileImgUrl: string;
}

export interface PetDataType extends OwnerType {
  petData: PetResultType;
}

interface OwnerType {
  isOwner?: boolean;
}
