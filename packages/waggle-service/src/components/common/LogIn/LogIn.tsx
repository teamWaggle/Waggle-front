import type { PropsWithChildren } from "react";
import { useLayoutEffect } from "react";

import { useSetRecoilState } from "recoil";

import { ACCESS_TOKEN_KEY } from "@/constants/api";

import { isLoggedInState } from "@/recoil/atoms/auth";

interface LogInProps extends PropsWithChildren {}

const LogIn = ({ children }: LogInProps) => {
  const setIsLoggedIn = useSetRecoilState(isLoggedInState);

  useLayoutEffect(() => {
    if (localStorage.getItem(ACCESS_TOKEN_KEY)) {
      setIsLoggedIn(true);
    }
  }, [setIsLoggedIn]);

  return <>{children}</>;
};

export default LogIn;
