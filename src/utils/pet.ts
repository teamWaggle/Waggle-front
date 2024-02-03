const petText = [
	{
		id: 1,
		text: "첫",
	},
	{
		id: 2,
		text: "두",
	},
	{
		id: 3,
		text: "세",
	},
	{
		id: 4,
		text: "네",
	},
	{
		id: 5,
		text: "다섯",
	},
	{
		id: 6,
		text: "여섯",
	},
	{
		id: 7,
		text: "일곱",
	},
	{
		id: 8,
		text: "여덟",
	},
	{
		id: 9,
		text: "아홉",
	},
	{
		id: 10,
		text: "열",
	},
	{
		id: 11,
		text: "열한",
	},
	{
		id: 12,
		text: "열두",
	},
	{
		id: 13,
		text: "열세",
	},
	{
		id: 14,
		text: "열네",
	},
	{
		id: 15,
		text: "열다섯",
	},
	{
		id: 16,
		text: "열여섯",
	},
	{
		id: 17,
		text: "열일곱",
	},
	{
		id: 18,
		text: "열여덟",
	},
	{
		id: 19,
		text: "열아홉",
	},
	{
		id: 20,
		text: "스무",
	},
];

export const convertPetNumToText = (id: string) => {
	const num = Number(id.split("card")[1]);
	let text = "";

	petText.map((data) => {
		if (num === data.id) {
			text = data.text;
		}
	});

	return text;
};
