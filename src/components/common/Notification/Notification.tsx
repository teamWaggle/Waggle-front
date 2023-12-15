import NotificationIcon from "@assets/svg/notification.svg?react";

import Flex from "@components/common/Flex/Flex";

import { notificationStyle, cardBoxStyle } from "./Notification.style";

import NotificationCard from "./NotificationCard/NotificationCard";

const Notification = () => {
	return (
		<div css={notificationStyle}>
			<NotificationIcon />
			<Flex styles={{ direction: "column", gap: "14px" }} css={cardBoxStyle}>
				<NotificationCard />
				<NotificationCard />
				<NotificationCard />
			</Flex>
		</div>
	);
};

export default Notification;
