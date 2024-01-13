import ProfileImg from "@/assets/png/post-sample.png";
import Flex from "@/components/common/Flex/Flex";
import { Theme } from "@/styles/Theme";

import { imgStyle, layoutStyle, textStyle } from "./NotificationCard.style";

const NotificationCard = () => {
	return (
		<Flex
			styles={{
				align: "center",
				gap: "18px",
				padding: "18px",
				borderRadius: "20px",
				border: `1px solid ${Theme.color.border}`,
				width: "315px",
			}}
			css={layoutStyle}
		>
			<img src={ProfileImg} alt="profileImg" css={imgStyle} />
			<p css={textStyle}>내가 팔로우하는 @ksjdkla님이 아직 고민해결을 못했어요 😭</p>
		</Flex>
	);
};

export default NotificationCard;
