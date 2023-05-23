import TaskItem from "./task-item";

import type { Meta, StoryFn } from "@storybook/react";

const meta: Meta<typeof TaskItem> = {
  component: TaskItem,
  title: "Task",
};

export default meta;

const Template: StoryFn<typeof TaskItem> = (args) => <TaskItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: "ストーリータイトル",
  description: "ストーリー説明",
  id: 1,
  done: false,
  active: false,
  onChecked: () => {
    alert("タスクがチェックされました");
  },
};

export const CheckedTask = Template.bind({});
CheckedTask.args = {
  ...Default.args,
  done: true,
  active: true,
};
