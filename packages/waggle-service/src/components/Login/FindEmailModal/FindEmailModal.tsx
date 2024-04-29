import { useState } from "react";

import { Flex, Logo, Heading, Text } from "waggle-design-system";

import FindEmail from "@/components/Login/FindEmailModal/FindEmail";
import ResultEmail from "@/components/Login/FindEmailModal/ResultEmail";

import {
  layoutStyle,
  headingStyle,
  textStyle,
} from "@/components/Login/FindEmailModal/FindEmailModal.style";

const FindEmailModal = () => {
  const [emailList, setEmailList] = useState<string[]>();

  const handleEmailList = (emailList?: string[]) => {
    setEmailList(emailList);
  };

  return (
    <Flex styles={{ direction: "column", align: "center", gap: "60px" }} css={layoutStyle}>
      <Flex
        styles={{
          direction: "column",
          align: "center",
          gap: "14px",
        }}
      >
        <Logo width={138} height={30} />

        <Heading size="xSmall" css={headingStyle}>
          아이디(이메일) 찾기
        </Heading>

        <Text css={textStyle}>
          {emailList === undefined
            ? `계정에 등록된 이름과 생년월일이 일치하는 경우\n사용중인 계정의 아이디를 알려드립니다.`
            : "인증한 이름과 생년월일로 가입된 계정입니다."}
        </Text>
      </Flex>

      {emailList === undefined ? (
        <FindEmail handleEmailList={handleEmailList} />
      ) : (
        <ResultEmail email={emailList} />
      )}
    </Flex>
  );
};

export default FindEmailModal;
