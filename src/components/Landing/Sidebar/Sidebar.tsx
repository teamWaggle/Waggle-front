import Flex from "@components/common/Flex/Flex";

import Login from "./Login/Login";

const Sidebar = () => {
	return (
		<Flex styles={{ direction: "column", width: "315px", gap: "20px" }}>
			<Login />
		</Flex>
	);
};

export default Sidebar;
