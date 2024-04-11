import type { CommonResponseBaseType } from "@/types/common";

export interface TokenType extends CommonResponseBaseType {
  result: ResultType;
}

export interface ResultType {
  accessToken: string;
  grantType: string;
  refreshToken: string;
  member: MemberType;
}

export interface UserType {
  email: string;
  password: string;
}

export interface EmailAuthVerifyType {
  email: string;
  authCode: string;
}

export interface MemberType {
  memberId: number;
  nickname: string;
  profileImgUrl: string;
  userUrl: string;
}

export interface FindEmailResultType {
  emailList: string[];
}

export interface MemberInfoResponseType extends CommonResponseBaseType {
  result: MemberInfoResultType;
}

export interface MemberInfoResultType {
  memberId: number;
  userUrl: string;
  nickname: string;
  name: string;
  birthday: string;
  profileImgUrl: string;
}

export interface FindEmailResponseType extends CommonResponseBaseType {
  result: FindEmailResultType;
}

export interface PasswordFormType {
  password: string;
  passwordCheck: string;
}

export interface SignUpProfileFormType {
  nickname: string;
  userUrl: string;
}

export interface SignUpPetFormType {
  name: string;
  age: string;
  gender: string;
  breed: string;
  introduction: string;
}

export interface updatePetInputValueType {
  updateInputValue: <Key extends keyof SignUpPetFormType>(
    key: Key,
    value: SignUpPetFormType[Key]
  ) => void;
}

export interface MemberInfoType {
  profileImgUrl: string;
  nickname: string;
  memberId: number;
  name: string;
  birthday: string;
}
