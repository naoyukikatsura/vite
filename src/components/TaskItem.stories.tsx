import TaskItem from "./TaskItem";

import type { Meta, StoryFn } from "@storybook/react";

const meta: Meta<typeof TaskItem> = {
  component: TaskItem,
  title: 'Task',
}

export default meta

const Template: StoryFn<typeof TaskItem> = (args) => <TaskItem {...args} />

export const Default = Template.bind({})