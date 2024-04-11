import RequiredIcon from "@/assets/svg/RequiredIcon.svg?react";

import { Flex, Text } from "@/components/common";

import { getFormTextStyle, getInputStyle } from "@/components/SignUp/SignUp.shared.style";

interface FindEmailForm {
  value: string;
}

interface NameInputParams {
  name: string;
  updateNameValue: <Key extends keyof FindEmailForm>(key: Key, value: FindEmailForm[Key]) => void;
  nameRef: React.RefObject<HTMLInputElement>;
}

const NameInput = ({ name, updateNameValue, nameRef }: NameInputParams) => {
  return (
    <Flex styles={{ direction: "column", gap: "8px" }}>
      <Flex styles={{ gap: "4px", align: "center" }}>
        <Text css={getFormTextStyle(true)}>이름(실명)</Text>
        <RequiredIcon />
      </Flex>
      <input
        css={getInputStyle("444px")}
        placeholder="이름을 입력해주세요"
        value={name}
        onChange={(e) => updateNameValue("value", e.target.value)}
        ref={nameRef}
      />
    </Flex>
  );
};

export default NameInput;
