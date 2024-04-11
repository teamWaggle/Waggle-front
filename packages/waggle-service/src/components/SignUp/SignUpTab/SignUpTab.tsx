import { useSearchParams, useNavigate } from "react-router-dom";

import { Flex, Heading, Text, Logo } from "@/components/common";

import { signUpTabData, TAB_KEY } from "@/constants/tab";

import {
  headingStyle,
  boxStyle,
  getCircleBoxStyle,
  circleNumberStyle,
  getCircleTextStyle,
} from "@/components/SignUp/SignUpTab/SignUpTab.style";

const SignUpTab = () => {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  return (
    <>
      <Logo width={138} height={30} />

      <Heading size="small" css={headingStyle}>
        회원가입
      </Heading>

      <Flex styles={{ align: "center", marginTop: "40px", gap: "160px" }}>
        {signUpTabData.map((data) => (
          <Flex
            css={boxStyle}
            key={data.text}
            onClick={() => navigate(`/signup?${TAB_KEY}=${data.id}`)}
          >
            <Flex css={getCircleBoxStyle(searchParams.get(TAB_KEY) === data.id)}>
              <Text size="small" css={circleNumberStyle}>
                {data.number}
              </Text>
            </Flex>
            <Text size="small" css={getCircleTextStyle(searchParams.get(TAB_KEY) === data.id)}>
              {data.text}
            </Text>
          </Flex>
        ))}
      </Flex>
    </>
  );
};

export default SignUpTab;
