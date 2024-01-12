import { sectionStyle } from "./Main.style";

import Flex from "@/components/common/Flex/Flex";

import SirenCard from "../SirenCard/SirenCard";

import { useSirenListQuery } from "@/hooks/api/useSirenListQuery";

const Main = () => {
	const { sirenList } = useSirenListQuery(0);

	return (
		<section css={sectionStyle}>
			<Flex
				styles={{
					align: "center",
					wrap: "wrap",
					gap: "8px",
				}}
			>
				{sirenList &&
					sirenList.result.helpList.map((sirenInfo) => (
						<SirenCard
							key={sirenInfo.id}
							id={sirenInfo.id}
							thumbnail={sirenInfo.thumbnail}
							title={sirenInfo.title}
							lostLocate={sirenInfo.lostLocate}
							recommendCount={sirenInfo.recommendCount}
							lostDate={sirenInfo.lostDate}
						/>
					))}
			</Flex>
		</section>
	);
};

export default Main;
