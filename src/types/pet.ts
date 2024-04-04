import type { CommonResponseBaseType } from "@/types/common";

export interface PetInfoType extends CommonResponseBaseType {
	result: PetResultType[];
}

export interface PetResultType extends OwnerType {
	petId: number;
	name: string;
	gender: string;
	profileImgUrl: string;
}

interface OwnerType {
	isOwner?: boolean;
}
