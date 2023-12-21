import Flex from "@components/common/Flex/Flex";

// import Login from "./Login/Login";
import Profile from "./Profile/Profile";
import Widget from "./Widget/Widget";

const Sidebar = () => {
	return (
		<Flex
			styles={{
				direction: "column",
				width: "315px",
				gap: "20px",
			}}
			tag="aside"
		>
			{/* <Login /> */}
			<Profile />
			<Widget />
		</Flex>
	);
};

export default Sidebar;
