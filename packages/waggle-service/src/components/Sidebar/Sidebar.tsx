import { useRecoilValue } from "recoil";

import { Flex } from "waggle-design-system";

import Login from "@/components/Login/Login";
import Profile from "@/components/Sidebar/Profile/Profile";
import Widget from "@/components/Sidebar/Widget/Widget";

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
      {isLoggedIn ? <Profile /> : <Login />}
      <Widget />
    </Flex>
  );
};

export default Sidebar;
