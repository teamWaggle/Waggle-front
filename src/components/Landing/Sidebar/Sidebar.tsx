import { useRecoilValue } from "recoil";

import { Flex } from "@/components/common";
import { Login, Profile, Widget } from "@/components/Landing/Sidebar";
import { isLoggedInState } from "@/recoil/atoms/auth";

const Sidebar = () => {
	const isLoggedIn = useRecoilValue(isLoggedInState);

	return (
		<Flex
			styles={{
				direction: "column",
				gap: "32px",
			}}
			tag="aside"
		>
			{isLoggedIn ? <Profile /> : <Login />}
			<Widget />
		</Flex>
	);
};

export default Sidebar;
