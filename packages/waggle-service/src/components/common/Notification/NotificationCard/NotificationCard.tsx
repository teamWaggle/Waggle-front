import { Flex, Text, Button } from "waggle-design-system";

import {
  variantTextStyle,
  titleStyle,
  contentStyle,
  dateTextStyle,
  cardBoxStyle,
} from "@/components/common/Notification/NotificationCard/NotificationCard.style";

interface NotificationCardProps {
  nickname: string;
  hasTitle?: boolean;
  hasContent?: boolean;
  isRequest?: boolean;
  category: string;
  createdDate: string;
  teamName?: string;
  isFollow?: boolean;
}

const NotificationCard = ({
  nickname,
  hasTitle,
  hasContent,
  isRequest,
  category,
  createdDate,
  teamName,
  isFollow,
}: NotificationCardProps) => {
  return (
    <Flex
      styles={{
        direction: "column",
        gap: "4px",
      }}
      css={cardBoxStyle}
    >
      <Text size="xLarge" css={variantTextStyle}>
        <span>{nickname}</span>님이{" "}
        {isRequest
          ? `"${teamName}"에 가입 신청했습니다`
          : isFollow
          ? "회원님을 팔로우 했습니다."
          : "게시물에 댓글을 남겼습니다."}
      </Text>

      {isFollow && <Button style={{ padding: "6px 10px" }}>팔로잉</Button>}

      {isRequest && (
        <Flex styles={{ gap: "6px" }}>
          <Button style={{ padding: "6px 10px" }}>승인</Button>
          <Button variant="disabled" style={{ padding: "6px 10px" }}>
            거절
          </Button>
        </Flex>
      )}

      {hasTitle && (
        <Text size="xLarge" css={titleStyle}>
          강아지 찾는거 도와주세요
        </Text>
      )}

      {hasContent && (
        <Text size="xLarge" css={contentStyle}>
          저 강아지 본 적 있는데.. 지금 어디세요?
        </Text>
      )}

      <Flex styles={{ gap: "14px" }} css={dateTextStyle}>
        <Text size="large">{category}</Text>
        <Text size="large">{createdDate}</Text>
      </Flex>
    </Flex>
  );
};

export default NotificationCard;
