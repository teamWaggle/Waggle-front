import { css } from "@emotion/react";

import { Flex, Text } from "@/components/common";

import { Theme } from "@/styles/Theme";

import { convertToUTC } from "@/utils/convertToUTC";

import type { MemberType } from "@/types/auth";

interface PostProfilePropsType {
  member: MemberType;
  viewCount: number;
  createdDate: Date;
}

const PostProfile = ({ member, viewCount, createdDate }: PostProfilePropsType) => {
  return (
    <Flex css={profileStyle}>
      <img src={member.profileImgUrl} alt="profileImg" />
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
  alignItems: "center",
  color: Theme.color.disabled_text,
  fontWeight: 500,

  "& > img": {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    objectFit: "cover",
  },

  span: {
    marginLeft: "14px",
  },
});
