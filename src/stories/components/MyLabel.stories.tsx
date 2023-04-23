import type { Meta, StoryObj } from '@storybook/react';
import { MyLabel } from "../../components/MyLabel";
 
const meta = {
    title: 'UI/MyLabel',
    component: MyLabel,
    tags: ['autodocs'],
    argTypes: {
        size:  { control: 'select' },
        color: { control: 'select' },
        fontColor: { control: 'color' }
    }
} satisfies Meta<typeof MyLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        label: '',
        size: 'normal',
        AllCaps: false
    },
};

export const AllCaps: Story = {
    args: {
        label: '',
        size: 'normal',
        AllCaps: true
    },
};

export const Secondary: Story = {
    args: {
        label: '',
        size: 'normal',
        color: 'secondary'
    },
};

export const Tertiary: Story = {
    args: {
        label: '',
        size: 'normal',
        color: 'tertiary'
    },
};

export const CustomFontColor: Story = {
    args: {
        label: '',
        size: 'h1',
        fontColor: '#5517ac'
    },
};