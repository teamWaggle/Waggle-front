import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";

import { Flex, Text, Theme } from "waggle-design-system";

import { PATH } from "@/constants/path";

import { convertToUTC } from "@/utils/convertToUTC";

import type { MemberType } from "@/types/auth";

interface PostProfilePropsType {
  member: MemberType;
  viewCount: number;
  createdDate: Date;
}

const PostProfile = ({ member, viewCount, createdDate }: PostProfilePropsType) => {
  const navigate = useNavigate();

  return (
    <Flex styles={{ align: "center" }} css={profileStyle}>
      <img
        src={member.profileImgUrl}
        alt="profileImg"
        onClick={() => navigate(`${PATH.MY(member.userUrl)}?tab=profile`)}
      />
      <Text>
        <span>{member.nickname}</span>
        <span>조회 {viewCount}</span>
        <span>{convertToUTC(new Date(createdDate)).date}</span>
      </Text>
    </Flex>
  );
};

export default PostProfile;

const profileStyle = css({
  color: Theme.color.disabled_text,
  fontWeight: 500,

  "& > img": {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    objectFit: "cover",
    cursor: "pointer",
  },

  span: {
    marginLeft: "14px",
  },
});
