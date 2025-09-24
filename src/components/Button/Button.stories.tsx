import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: { type: "text" },
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    appearance: {
      control: { type: "select" },
      options: [
        "primary",
        "secondary",
        "outline",
        "ghost",
        "success",
        "warning",
        "error",
      ],
    },
    disabled: {
      control: { type: "boolean" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    children: "Button",
    size: "md",
    appearance: "primary",
    disabled: false,
  },
};

export const AllVariants: Story = {
  render: (args) => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        alignItems: "center",
      }}
    >
      <h3>All Appearance Variants</h3>
      <div
        style={{
          display: "flex",
          gap: "12px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Button {...args} appearance="primary">
          Primary
        </Button>
        <Button {...args} appearance="secondary">
          Secondary
        </Button>
        <Button {...args} appearance="outline">
          Outline
        </Button>
        <Button {...args} appearance="ghost">
          Ghost
        </Button>
        <Button {...args} appearance="success">
          Success
        </Button>
        <Button {...args} appearance="warning">
          Warning
        </Button>
        <Button {...args} appearance="error">
          Error
        </Button>
      </div>
    </div>
  ),
  args: {
    children: "Button",
    size: "md",
    disabled: false,
  },
  argTypes: {
    appearance: {
      control: false,
    },
  },
};

export const AllSizes: Story = {
  render: (args) => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        alignItems: "center",
      }}
    >
      <h3>All Sizes</h3>
      <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
        <Button {...args} size="sm">
          Small
        </Button>
        <Button {...args} size="md">
          Medium
        </Button>
        <Button {...args} size="lg">
          Large
        </Button>
      </div>
    </div>
  ),
  args: {
    children: "Button",
    appearance: "primary",
    disabled: false,
  },
  argTypes: {
    size: {
      control: false,
    },
  },
};
