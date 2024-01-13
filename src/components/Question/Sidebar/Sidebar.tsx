import Flex from "@/components/common/Flex/Flex";
import NotificationCard from "@/components/common/Notification/NotificationCard/NotificationCard";
import { Profile } from "@/components/Question";

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
