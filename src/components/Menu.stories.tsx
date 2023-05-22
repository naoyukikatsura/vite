import Menu from "./Menu";

import type { Meta, StoryFn } from "@storybook/react";

const meta: Meta<typeof Menu> = {
  component: Menu,
  title: "Menu",
};

export default meta;

const Template: StoryFn<typeof Menu> = (args) => <Menu {...args} />;

export const Default = Template.bind({});
Default.args = {
  isOpen: false,
  checked: false,
};

export const CheckedMenu = Template.bind({});
CheckedMenu.args = {
  isOpen: true,
  checked: true,
};
