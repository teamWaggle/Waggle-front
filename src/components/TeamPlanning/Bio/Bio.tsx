import Calendar from "@/components/TeamPlanning/Calendar/Calendar";

import { sectionStyle } from "@/components/TeamPlanning/Bio/Bio.style";

const Bio = () => {
	return (
		<section css={sectionStyle}>
			<Calendar />
		</section>
	);
};

export default Bio;
