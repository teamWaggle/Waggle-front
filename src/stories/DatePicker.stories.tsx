import type { Meta, StoryObj } from "@storybook/react";

import {
	DatePicker,
	DatePickerCalendarModal,
	DatePickerTimeModal,
	Flex,
} from "@/components/common";

const meta: Meta<typeof DatePicker> = {
	component: DatePicker,
	subcomponents: { DatePickerCalendarModal, DatePickerTimeModal }, //👈 Adds the ListItem component as a subcomponent
	decorators: [
		(Story) => (
			<Flex style={{ height: "10px" }}>
				<Story />
			</Flex>
		),
	],
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Calendar: Story = {
	render: (args) => {
		return (
			<DatePicker {...args}>
				<DatePickerCalendarModal />
			</DatePicker>
		);
	},
	args: {
		name: "startDate",
		selectedDate: new Date(),
		editSelectedDate: (date: Date) => console.log(date),
	},
};

export const Time: Story = {
	render: (args) => {
		return (
			<DatePicker {...args}>
				<DatePickerTimeModal />
			</DatePicker>
		);
	},
	args: {
		name: "startTime",
		selectedDate: new Date(),
		editSelectedDate: (date: Date) => console.log(date),
	},
};
