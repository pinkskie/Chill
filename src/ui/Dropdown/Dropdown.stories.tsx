import { StoryFn } from "@storybook/react";
import { Dropdown, DropdownProps } from "../Dropdown/Dropdown";

export default {
    title: "UI/Dropdown",
    component: Dropdown,
};

const Template: StoryFn<DropdownProps> = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});

Default.args = {
    trigger: <button>Click to open</button>,
    items: [
        { label: "Item 1", onClick: () => console.log("Item 1 clicked") },
        { label: "Item 2", onClick: () => console.log("Item 2 clicked") },
    ],
};
