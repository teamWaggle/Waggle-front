import { Flex, Heading, Text, Logo } from "@/components/common";
import FindEmail from "@/components/Login/FindEmailModal/FindEmail";

import {
  layoutStyle,
  headingStyle,
  textStyle,
} from "@/components/Login/FindEmailModal/FindEmailModal.style";

const FindEmailModal = () => {
  return (
    <Flex css={layoutStyle}>
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
          계정에 등록된 이름과 생년월일이 일치하는 경우
          <br />
          사용중인 계정의 아이디를 알려드립니다
        </Text>
      </Flex>

      <FindEmail />
    </Flex>
  );
};

export default FindEmailModal;
