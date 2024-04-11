import { useState } from "react";

import RequiredIcon from "@/assets/svg/RequiredIcon.svg?react";

import { Flex, Text } from "@/components/common";
import Button from "@/components/common/Design/Button/Button";

import { useCheckUserUrlMutation } from "@/hooks/api/auth/useCheckUserUrlMutation";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import type { SignUpProfileFormType } from "@/types/auth";

import { getFormTextStyle } from "@/components/SignUp/SignUp.shared.style";
import {
  addressInputStyle,
  getNicknameTextStyle,
} from "@/components/SignUp/SignUpProfile/SignUpProfile.style";

interface UserUrlInputParams {
  userUrl: string;
  updateInputValue: <Key extends keyof SignUpProfileFormType>(
    key: Key,
    value: SignUpProfileFormType[Key]
  ) => void;
  userUrlRef: React.RefObject<HTMLInputElement>;
  userUrlCheckComplete: boolean;
  handleUserUrlCheckComplete: (complete: boolean) => void;
}

const UserUrlInput = ({
  userUrl,
  updateInputValue,
  userUrlRef,
  userUrlCheckComplete,
  handleUserUrlCheckComplete,
}: UserUrlInputParams) => {
  const { mutate: checkUserUrlMutation } = useCheckUserUrlMutation();

  const [isUserUrlCheck, setIsUserUrlCheck] = useState(false);

  const handleUserUrlCheck = () => {
    checkUserUrlMutation(userUrl, {
      onSuccess: () => {
        setIsUserUrlCheck(true);
        handleUserUrlCheckComplete(true);
      },
    });
  };

  return (
    <Flex styles={{ direction: "column", gap: "8px" }}>
      <Flex styles={{ gap: "4px", align: "center" }}>
        <Text css={getFormTextStyle(false)}>프로필 주소</Text>
        <RequiredIcon />
      </Flex>
      <Flex styles={{ align: "center", gap: "6px" }}>
        <Text css={getDefaultTextStyle(Theme.color.text, 500)}>https://www.waggle.com/users/@</Text>

        <input
          css={addressInputStyle}
          placeholder="가입 후 변경이 불가능해요"
          value={userUrl}
          onChange={(e) => updateInputValue("userUrl", e.target.value)}
          ref={userUrlRef}
        />
      </Flex>

      <Flex styles={{ align: "center", gap: "16px" }}>
        <Button variant="outline" onClick={handleUserUrlCheck}>
          프로필 주소 중복 확인
        </Button>

        <Text css={getNicknameTextStyle(isUserUrlCheck && userUrlCheckComplete)}>
          {isUserUrlCheck &&
            (userUrlCheckComplete ? "사용할 수 있는 주소입니다." : "사용할 수 없는 주소입니다")}
        </Text>
      </Flex>
    </Flex>
  );
};

export default UserUrlInput;
