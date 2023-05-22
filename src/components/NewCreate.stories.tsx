import NewCreate from "./NewCreate";

import type { Meta, StoryFn } from "@storybook/react";

const meta: Meta<typeof NewCreate> = {
  component: NewCreate,
  title: "NewCreate",
};

export default meta;

const Template: StoryFn<typeof NewCreate> = (args) => <NewCreate {...args} />;

export const Default = Template.bind({});
Default.args = {
  onSubmit: () => {
    alert("新規ボタンがクリックされました");
  },
  createTask: () => {
    alert("新規ボタンがクリックされました");
  },
};
