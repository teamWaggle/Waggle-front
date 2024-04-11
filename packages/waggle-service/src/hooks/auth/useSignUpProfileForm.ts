import { useState, useRef, useCallback } from "react";

import { useMemberInfoMutation } from "../api/member/useMemberInfoMutation";

import { SIGN_UP_TAB_KEY, TAB_KEY } from "@/constants/tab";

import { useMemberInfoFirstMutation } from "@/hooks/api/member/useMemberInfoFirstMutation";
import useModal from "@/hooks/useModal";
import { useValidateForm } from "@/hooks/useValidateForm";

import type { SignUpProfileFormType } from "@/types/auth";

interface UseSignUpProfileFormParams {
  name?: string;
  birthday?: string;
  uploadMedia?: string;
  prevReqeust?: { nickname: string; userUrl: string };
  memberId?: number;
}

export const useSignUpProfileForm = ({
  name,
  birthday,
  uploadMedia,
  prevReqeust,
  memberId,
}: UseSignUpProfileFormParams) => {
  const { mutate: memberInfoFirstMutate } = useMemberInfoFirstMutation();
  const { mutate: memberInfoMutate } = useMemberInfoMutation();

  const nicknameRef = useRef<HTMLInputElement>(null);
  const userUrlRef = useRef<HTMLInputElement>(null);

  const modal = useModal();

  const [nicknameCheckComplete, setNicknameCheckComplete] = useState(false);
  const [userUrlCheckComplete, setUserUrlCheckComplete] = useState(false);

  const [signUpProfileRequest, setSignUpProfileRequest] = useState(
    prevReqeust ?? {
      nickname: "",
      userUrl: "",
    }
  );

  const handleNicknameCheckComplete = (complete: boolean) => {
    if (prevReqeust?.nickname === signUpProfileRequest.nickname) {
      setNicknameCheckComplete(true);

      return;
    }
    setNicknameCheckComplete(complete);
  };

  const handleUserUrlCheckComplete = (complete: boolean) => {
    setUserUrlCheckComplete(complete);
  };

  const validateForm = () => {
    if (
      useValidateForm(signUpProfileRequest.nickname, nicknameRef, "닉네임을 입력해주세요") ===
        false ||
      useValidateForm(nicknameCheckComplete, nicknameRef, "닉네임 중복 확인을 해주세요") ===
        false ||
      useValidateForm(signUpProfileRequest.userUrl, userUrlRef, "프로필 주소를 입력해주세요") ===
        false ||
      useValidateForm(userUrlCheckComplete, userUrlRef, "프로필 주소 중복 확인을 해주세요") ===
        false
    ) {
      return false;
    }

    return true;
  };

  const validateEditForm = () => {
    if (
      prevReqeust?.nickname !== signUpProfileRequest.nickname &&
      !useValidateForm(nicknameCheckComplete, nicknameRef, "닉네임 중복 확인을 해주세요")
    ) {
      return false;
    }

    return true;
  };

  const updateInputValue = useCallback(
    <Key extends keyof SignUpProfileFormType>(key: Key, value: SignUpProfileFormType[Key]) => {
      setSignUpProfileRequest((prevSignUpProfileRequest) => {
        const data = {
          ...prevSignUpProfileRequest,
          [key]: value,
        };

        return data;
      });
    },
    []
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();

    const memberProfileRequest = {
      nickname:
        prevReqeust?.nickname !== signUpProfileRequest.nickname
          ? signUpProfileRequest
          : prevReqeust?.nickname,
      name,
      birthday,
      userUrl: signUpProfileRequest.userUrl,
      memberProfileImg: uploadMedia,
    };

    const updateProfileRequest = {
      nickname: signUpProfileRequest.nickname,
      name,
      birthday,
      password: "test1234!",
      memberProfileImg: uploadMedia,
    };

    if (!memberId) {
      if (!validateForm()) {
        return;
      }

      formData.append("memberProfileRequest", JSON.stringify(memberProfileRequest));

      memberInfoFirstMutate(formData, {
        onSuccess: () => {
          window.location.href = `/signup?${TAB_KEY}=${SIGN_UP_TAB_KEY.PET}`;
        },
      });
    } else {
      if (!validateEditForm()) {
        return;
      }

      formData.append("updateMemberRequest", JSON.stringify(updateProfileRequest));

      memberInfoMutate(formData, {
        onSuccess: () => {
          modal.closeModal();
        },
      });
    }
  };

  return {
    nicknameCheckComplete,
    userUrlCheckComplete,
    nicknameRef,
    userUrlRef,
    signUpProfileRequest,
    updateInputValue,
    handleNicknameCheckComplete,
    handleUserUrlCheckComplete,
    handleSubmit,
  };
};
