import Flex from "@/components/common/Flex/Flex";
import { SirenCard } from "@/components/Siren";
import { useSirenListQuery } from "@/hooks/api/useSirenListQuery";

import { sectionStyle } from "@/components/Siren/Main/Main.style";

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
