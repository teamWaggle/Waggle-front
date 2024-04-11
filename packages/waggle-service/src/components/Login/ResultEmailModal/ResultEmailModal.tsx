import { Flex, Heading, Text, Logo } from "@/components/common";
import ResultEmail from "@/components/Login/ResultEmailModal/ResultEmail";

import {
  layoutStyle,
  headingStyle,
  textStyle,
} from "@/components/Login/FindEmailModal/FindEmailModal.style";

interface ResultEmailParams {
  emailList: string[];
}

const ResultEmailModal = ({ emailList }: ResultEmailParams) => {
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

        <Text css={textStyle}>인증한 이름과 생년월일로 가입된 계정입니다.</Text>
      </Flex>

      <ResultEmail email={emailList} />
    </Flex>
  );
};

export default ResultEmailModal;
