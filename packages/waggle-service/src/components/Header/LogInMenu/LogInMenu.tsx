import { useNavigate } from "react-router-dom";

import { Text } from "@/components/common";

import { PATH } from "@/constants/path";

import { useMemberInfoQuery } from "@/hooks/api/member/useMemberInfoQuery";

import type { MemberIdType } from "@/types/common";

import { textStyle } from "@/components/Header/Header.style";

const LogInMenu = ({ memberId }: MemberIdType) => {
  const { memberData } = useMemberInfoQuery(memberId);

  const navigate = useNavigate();

  return (
    <Text
      size="xLarge"
      css={textStyle}
      onClick={() => navigate(PATH.MY(memberData.result.userUrl))}
    >
      My waggle
    </Text>
  );
};

export default LogInMenu;
