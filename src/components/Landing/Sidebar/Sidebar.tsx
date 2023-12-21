import { useRecoilValue } from "recoil";

import { isLoggedInState } from "@store/auth";

import Flex from "@components/common/Flex/Flex";

import Login from "./Login/Login";
import Profile from "./Profile/Profile";
import Widget from "./Widget/Widget";

const Sidebar = () => {
	const isLoggedIn = useRecoilValue(isLoggedInState);

	return (
		<Flex
			styles={{
				direction: "column",
				width: "315px",
				gap: "20px",
			}}
			tag="aside"
		>
			{isLoggedIn ? <Profile /> : <Login />}
			<Widget />
		</Flex>
	);
};

export default Sidebar;
