import { sectionStyle } from "./Main.style";

import Flex from "@/components/common/Flex/Flex";

import SirenCard from "../SirenCard/SirenCard";

const mockItems = [
	{
		id: 1,
	},
	{
		id: 2,
	},
	{
		id: 3,
	},
	{
		id: 4,
	},
	{
		id: 5,
	},
	{
		id: 6,
	},
	{
		id: 7,
	},
	{
		id: 8,
	},
	{
		id: 9,
	},
	{
		id: 10,
	},
];

const Main = () => {
	return (
		<section css={sectionStyle}>
			<Flex
				styles={{
					align: "center",
					wrap: "wrap",
					gap: "8px",
				}}
			>
				{mockItems.map((data) => (
					<SirenCard key={data.id} />
				))}
			</Flex>
		</section>
	);
};

export default Main;
