import type { Meta, StoryObj } from "@storybook/react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { DatePicker, DatePickerCalendarModal, Flex, Form } from "@/components/common";
import * as yup from "yup";

import { TEAM_SCHEDULE_DEFAULT_VALUES } from "@/constants/team";

const queryClient = new QueryClient();
const schema = yup.object({
  startDate: yup.date(),
});
const meta: Meta<typeof DatePicker> = {
  component: DatePicker,
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <Flex style={{ height: "10px" }}>
          <Form onSubmit={() => {}} defaultValues={TEAM_SCHEDULE_DEFAULT_VALUES} schema={schema}>
            <Story />
          </Form>
        </Flex>
      </QueryClientProvider>
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
  },
};
