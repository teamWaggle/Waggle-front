import { Flex, Text } from "waggle-design-system";

import {
  variantTextStyle,
  titleStyle,
  contentStyle,
} from "@/components/common/Notification/NotificationCard/NotificationCard.style";

interface NotificationCardProps {
  nickname: string;
  hasTitle?: boolean;
}

const NotificationCard = ({ nickname, hasTitle }: NotificationCardProps) => {
  return (
    <Flex styles={{ paddingLeft: "22px", direction: "column", gap: "6px" }}>
      <Text size="xLarge" css={variantTextStyle}>
        <span>{nickname}</span>님이 게시물에 댓글을 남겼습니다.
      </Text>

      {hasTitle && (
        <Text size="xLarge" css={titleStyle}>
          강아지 찾는거 도와주세요
        </Text>
      )}

      <Text size="xLarge" css={contentStyle}>
        저 강아지 본 적 있는데.. 지금 어디세요?
      </Text>
    </Flex>
  );
};

export default NotificationCard;
