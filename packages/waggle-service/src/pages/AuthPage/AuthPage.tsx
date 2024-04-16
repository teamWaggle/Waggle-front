import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

import { useSetRecoilState } from "recoil";

import { css } from "@emotion/react";

import { authorizedAxiosInstance } from "@/api/axiosInstance";

import { Flex, Heading } from "@/components/common";
import Spinner from "@/components/common/Design/Spinner/Spinner";

import { ACCESS_TOKEN_KEY } from "@/constants/api";
import { PATH } from "@/constants/path";

import { isLoggedInState } from "@/recoil/atoms/auth";

import { isAuthProvider } from "@/utils/checkAuthProvider";

const AuthPage = () => {
  const setIsLoggedIn = useSetRecoilState(isLoggedInState);

  const [searchParams] = useSearchParams();

  const navigate = useNavigate();

  const code = searchParams.get("code");
  const error = searchParams.get("error");
  const provider = searchParams.get("provider");
  const isGuest = searchParams.get("isGuest");

  if (error || !code || !isAuthProvider(provider)) {
    throw new Error("로그인/회원가입에 실패했습니다.");
  }

  useEffect(() => {
    localStorage.setItem(ACCESS_TOKEN_KEY, code);

    authorizedAxiosInstance.defaults.headers.Authorization = `Bearer ${code}`;

    setIsLoggedIn(true);

    if (isGuest) {
      navigate(`${PATH.SIGN_UP}?tab=profile`);
    } else {
      navigate(PATH.ROOT);
    }
  }, [code, provider]);

  return (
    <Flex css={layoutStyle}>
      <Spinner />
      <Heading size="xSmall">로그인 중입니다</Heading>
    </Flex>
  );
};

export default AuthPage;

const layoutStyle = css({
  minHeight: "calc(100vh - 81px)",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "32px",
});
