import { Flex } from "@/components/common";
import PasswordInput from "@/components/SignUp/SignUpEmail/PasswordInput/PasswordInput";
import PasswordValidator from "@/components/SignUp/SignUpEmail/PasswordInput/PasswordValidator";

import type { PasswordFormType } from "@/types/auth";

interface PasswordParams {
  data: { id: string; text: string };
  passwordRequest: { password: string; passwordCheck: string };
  updatePasswordInputValue: <Key extends keyof PasswordFormType>(
    key: Key,
    value: PasswordFormType[Key]
  ) => void;
  passwordRef: React.RefObject<HTMLInputElement>;
  passwordCheckRef: React.RefObject<HTMLInputElement>;
  handleChangeValidateComplete: (complete: boolean) => void;
  isFind?: boolean;
}

const Password = ({
  data,
  passwordRequest,
  updatePasswordInputValue,
  passwordRef,
  passwordCheckRef,
  handleChangeValidateComplete,
  isFind,
}: PasswordParams) => {
  return (
    <Flex key={data.id} styles={{ direction: "column", gap: "8px" }}>
      <PasswordInput
        password={data.id === "password" ? passwordRequest.password : passwordRequest.passwordCheck}
        valueKey={data.id === "password" ? "password" : "passwordCheck"}
        updatePasswordInputValue={updatePasswordInputValue}
        passwordRef={data.id === "password" ? passwordRef : passwordCheckRef}
        title={data.text}
        isFind={isFind}
      />

      {data.id === "password" && (
        <PasswordValidator
          password={passwordRequest.password}
          validateComplete={handleChangeValidateComplete}
        />
      )}
    </Flex>
  );
};

export default Password;
