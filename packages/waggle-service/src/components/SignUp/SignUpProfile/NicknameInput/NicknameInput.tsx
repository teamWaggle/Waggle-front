import { useState } from "react";

import RequiredIcon from "@/assets/svg/RequiredIcon.svg?react";

import { Flex, Text } from "@/components/common";
import Button from "@/components/common/Design/Button/Button";

import { useCheckNicknameMutation } from "@/hooks/api/auth/useCheckNicknameMutation";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import type { SignUpProfileFormType } from "@/types/auth";

import { getFormTextStyle, getInputStyle } from "@/components/SignUp/SignUp.shared.style";
import { getNicknameTextStyle } from "@/components/SignUp/SignUpProfile/SignUpProfile.style";

interface NicknameInputParams {
  nickname: string;
  updateInputValue: <Key extends keyof SignUpProfileFormType>(
    key: Key,
    value: SignUpProfileFormType[Key]
  ) => void;
  nicknameRef: React.RefObject<HTMLInputElement>;
  nicknameCheckComplete: boolean;
  handleNicknameCheckComplete: (complete: boolean) => void;
}

const NicknameInput = ({
  nickname,
  updateInputValue,
  nicknameRef,
  nicknameCheckComplete,
  handleNicknameCheckComplete,
}: NicknameInputParams) => {
  const { mutate: checkNicknameMutation } = useCheckNicknameMutation();

  const [isNicknameCheck, setIsNicknameCheck] = useState(false);

  const handleNicknameCheck = () => {
    checkNicknameMutation(nickname, {
      onSuccess: () => {
        setIsNicknameCheck(true);
      },
      onError: () => {
        setIsNicknameCheck(false);
      },
    });

    handleNicknameCheckComplete(true);
  };

  return (
    <Flex styles={{ direction: "column", gap: "8px" }}>
      <Flex styles={{ gap: "4px", align: "center" }}>
        <Text css={getFormTextStyle(true)}>닉네임</Text>
        <RequiredIcon />
        <Text css={getDefaultTextStyle(Theme.color.disabled_text, 500)}>
          8자 제한, 띄어쓰기 불가, 특수문자 불가
        </Text>
      </Flex>
      <input
        css={getInputStyle("444px")}
        placeholder="닉네임을 입력해주세요! 언제든지 변경 가능해요"
        value={nickname}
        onChange={(e) => updateInputValue("nickname", e.target.value)}
        ref={nicknameRef}
      />
      <Flex styles={{ gap: "16px", align: "center" }}>
        <Button variant="outline" onClick={handleNicknameCheck}>
          닉네임 중복 확인
        </Button>

        <Text css={getNicknameTextStyle(isNicknameCheck && nicknameCheckComplete)}>
          {nicknameCheckComplete &&
            (isNicknameCheck ? "사용할 수 있는 닉네임입니다" : "사용할 수 없는 닉네임입니다.")}
        </Text>
      </Flex>
    </Flex>
  );
};

export default NicknameInput;
