import ProfileImg from "@/assets/png/post-sample.png";

import { Flex, Text } from "@/components/common";

import { layoutStyle } from "./NotificationCard.style";

const NotificationCard = () => {
  return (
    <Flex css={layoutStyle}>
      <img src={ProfileImg} alt="profileImg" />
      <Text size="small">
        내가 팔로우하는 @ksjdkla님이 아직 고민해결을 못했어요 😭sadfsadfasdfs
      </Text>
    </Flex>
  );
};

export default NotificationCard;
