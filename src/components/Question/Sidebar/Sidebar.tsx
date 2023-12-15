import Flex from "@components/common/Flex/Flex";

import Profile from "./Profile/Profile";

import NotificationCard from "@/components/common/NotificationCard/NotificationCard";

const Sidebar = () => {
	return (
		<Flex
			styles={{
				direction: "column",
				width: "315px",
				gap: "14px",
				align: "center",
			}}
			tag="aside"
		>
			<Profile />
			<NotificationCard />
			<NotificationCard />
			<NotificationCard />
		</Flex>
	);
};

export default Sidebar;
