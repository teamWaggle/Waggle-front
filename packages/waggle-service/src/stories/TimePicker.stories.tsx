import type { Meta, StoryObj } from "@storybook/react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Form, TimePicker } from "@/components/common";
import { Flex } from "waggle-design-system";
import * as yup from "yup";

import { TEAM_SCHEDULE_DEFAULT_VALUES } from "@/constants/team";

const schema = yup.object({
  startTime: yup.date(),
});
const queryClient = new QueryClient();
const meta: Meta<typeof TimePicker> = {
  component: TimePicker,
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

export const Time: Story = {
  render: (args) => {
    return (
      <TimePicker {...args}>
        <TimePicker.Modal />
      </TimePicker>
    );
  },
  args: {
    name: "startTime",
  },
};
