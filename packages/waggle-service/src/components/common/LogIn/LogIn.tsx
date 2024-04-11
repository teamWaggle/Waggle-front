import type { PropsWithChildren } from "react";
import { useLayoutEffect } from "react";

import { useSetRecoilState } from "recoil";

import { ACCESS_TOKEN_KEY } from "@/constants/api";

import { isLoggedInState, memberIdState } from "@/recoil/atoms/auth";

interface LogInProps extends PropsWithChildren {}

const LogIn = ({ children }: LogInProps) => {
  const setIsLoggedIn = useSetRecoilState(isLoggedInState);
  const setMemberId = useSetRecoilState(memberIdState);

  useLayoutEffect(() => {
    if (localStorage.getItem(ACCESS_TOKEN_KEY)) {
      setIsLoggedIn(true);
    }

    if (localStorage.getItem("MEMBER_ID")) {
      setMemberId(Number(localStorage.getItem("MEMBER_ID")));
    }
  }, [setIsLoggedIn, setMemberId]);

  return <>{children}</>;
};

export default LogIn;
