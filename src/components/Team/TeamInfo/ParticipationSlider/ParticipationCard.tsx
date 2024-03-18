import { Flex, Text } from "@/components/common";

import {
	participationCardImgStyle,
	participationCardNameStyle,
	participationCardTextStyle,
} from "@/components/Team/TeamInfo/ParticipationSlider/ParticipationCard.style";
import {
	approveButtonStyle,
	rejectButtonStyle,
} from "@/components/Team/TeamInfo/ParticipationSlider/participationSlider.style";

const ParticipationCard = ({ participatingMember }: { participatingMember: string }) => {
	return (
		<Flex style={{ gap: "4px", marginRight: "6px" }}>
			<Flex css={participationCardNameStyle}>
				<img
					css={participationCardImgStyle}
					src="https://source.unsplash.com/random/32x32"
					alt=""
				/>
				<Text css={participationCardTextStyle}>{participatingMember}</Text>
			</Flex>
			<Flex css={approveButtonStyle}>승인</Flex>
			<Flex css={rejectButtonStyle}>거절</Flex>
		</Flex>
	);
};
export default ParticipationCard;
