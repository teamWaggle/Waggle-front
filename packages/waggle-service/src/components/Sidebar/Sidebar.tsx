import { Suspense } from "react";

import { useRecoilValue } from "recoil";

import { Flex } from "@/components/common";
import { Login, Profile, Widget } from "@/components/Sidebar";

import { isLoggedInState } from "@/recoil/atoms/auth";

const Sidebar = () => {
  const isLoggedIn = useRecoilValue(isLoggedInState);

  return (
    <Flex
      styles={{
        direction: "column",
        gap: "32px",
      }}
      tag="aside"
    >
      <Suspense fallback={<div>로딩중</div>}>{isLoggedIn ? <Profile /> : <Login />}</Suspense>
      <Widget />
    </Flex>
  );
};

export default Sidebar;
