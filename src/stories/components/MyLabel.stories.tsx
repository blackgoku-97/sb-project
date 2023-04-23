import type { Meta, StoryObj } from '@storybook/react';

import { MyLabel } from '../../components/MyLabel'; 
 
const meta = {
    title: 'UI/MyLabel',
    component: MyLabel,
    tags: ['autodocs'],
    argTypes: {
        size:  { control: 'select' },
        color: { control: 'select' },
        fontColor: { control: 'color' }
    }
} as Meta<typeof MyLabel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        size: 'normal',
        AllCaps: false
    },
};

export const AllCaps: Story = {
    args: {
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
        size: 'normal',
        color: 'tertiary'
    },
};

export const CustomFontColor: Story = {
    args: {
        size: 'h1',
        fontColor: '#5517ac'
    },
};

export const CustomBackgroundColor: Story = {
    args: {
        size: 'h1',
        fontColor: 'white',
        backgroundColor: 'black'
    },
};