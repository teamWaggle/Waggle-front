import Flex from "@components/common/Flex/Flex";

import Profile from "./Profile/Profile";

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
		</Flex>
	);
};

export default Sidebar;
