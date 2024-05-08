import { isLoggedInState } from "@/recoil/atoms/auth";
import { useRecoilValue } from "recoil";

const LoginAuthorizationContainer = ({ children }: { children: React.ReactNode }) => {
  const isLoggedIn = useRecoilValue(isLoggedInState);
  return <>{isLoggedIn && children}</>;
};

export default LoginAuthorizationContainer;
