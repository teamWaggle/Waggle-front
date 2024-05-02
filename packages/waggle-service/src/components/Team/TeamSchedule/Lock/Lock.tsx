import { useNavigate } from "react-router-dom";

import LockIcon from "@/assets/svg/lock.svg?react";

import { Flex, Text } from "waggle-design-system";

const Lock = () => {
  const navigate = useNavigate();
  const handleOtherTeam = () => {
    navigate("/planning");
  };
  return (
    <Flex styles={{ direction: "column", align: "center", width: "100%" }}>
      <LockIcon />
      <Text size="xLarge">팀원만 일정을 볼 수 있어요!</Text>
      <Flex>가입 신청하기</Flex>
      <Flex onClick={handleOtherTeam}>다른 팀 보기</Flex>
    </Flex>
  );
};
export default Lock;
