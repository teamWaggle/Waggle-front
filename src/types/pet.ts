import type { CommonResponseBaseType } from "@/types/common";

export interface PetInfoType extends CommonResponseBaseType {
	result: PetResultType[];
}

export interface PetResultType {
	petId: number;
	name: string;
	gender: string;
	profileImgUrl: string;
}
