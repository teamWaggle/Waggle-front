import { Flex, Text } from "@/components/common";
import Birthday from "@/components/common/BirthDay/Birthday";
import Button from "@/components/common/Design/Button/Button";

import { useFindEmailForm } from "@/hooks/auth/useFindEmailForm";

import { formTextStyle, inputStyle } from "@/components/Login/FindEmailModal/FindEmailModal.style";

const FindEmail = () => {
  const {
    selectOpen,
    handleSelectOpen,
    birthdayRequest,
    updateBirthdayValue,
    updateNameValue,
    handleSubmit,
    name,
    nameRef,
  } = useFindEmailForm({});

  return (
    <>
      <Flex styles={{ direction: "column", gap: "20px" }}>
        <Flex styles={{ direction: "column", gap: "8px" }}>
          <Text css={formTextStyle}>이름</Text>
          <input
            css={inputStyle}
            placeholder="이름을 입력해주세요"
            value={name.value}
            ref={nameRef}
            onChange={(e) => updateNameValue("value", e.target.value)}
          />
        </Flex>

        <Birthday
          selectOpen={selectOpen}
          handleSelectOpen={handleSelectOpen}
          birthdayRequest={birthdayRequest}
          updateBirthdayValue={updateBirthdayValue}
        />
      </Flex>
      <Button size="large" onClick={handleSubmit}>
        인증하기
      </Button>
    </>
  );
};

export default FindEmail;
