import { useParams, useSearchParams } from "react-router-dom";

import { css } from "@emotion/react";

import { Flex, Heading } from "@/components/common";
import Spinner from "@/components/common/Design/Spinner/Spinner";

const RedirectPage = () => {
  const { provider } = useParams();
  const [searchParams] = useSearchParams();

  const code = searchParams.get("code");
  const error = searchParams.get("error");

  console.log(code);

  console.log(provider);

  console.log(error);

  return (
    <Flex css={layoutStyle}>
      <Spinner />
      <Heading size="xSmall">로그인 중입니다</Heading>
    </Flex>
  );
};

export default RedirectPage;

const layoutStyle = css({
  minHeight: "calc(100vh - 81px)",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "32px",
});
