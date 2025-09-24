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
      options: ["L", "M", "S"],
    },
    variant: {
      control: { type: "select" },
      options: ["fill", "outline", "soft"],
    },
    color: {
      control: { type: "select" },
      options: [
        "primary",
        "secondary",
        "success",
        "warning",
        "danger",
        "information",
        "neutral",
      ],
    },
    state: {
      control: { type: "select" },
      options: ["enabled", "disabled"],
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
    size: "M",
    variant: "fill",
    color: "primary",
    state: "enabled",
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
      <h3>All Variants</h3>
      <div
        style={{
          display: "flex",
          gap: "12px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Button {...args} variant="fill">
          Fill
        </Button>
        <Button {...args} variant="outline">
          Outline
        </Button>
        <Button {...args} variant="soft">
          Soft
        </Button>
      </div>
    </div>
  ),
  args: {
    children: "Button",
    size: "M",
    color: "primary",
    state: "enabled",
    disabled: false,
  },
  argTypes: {
    variant: {
      control: false,
    },
  },
};

export const AllColors: Story = {
  render: (args) => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        alignItems: "center",
      }}
    >
      <h3>All Colors</h3>
      <div
        style={{
          display: "flex",
          gap: "12px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Button {...args} color="primary">
          Primary
        </Button>
        <Button {...args} color="secondary">
          Secondary
        </Button>
        <Button {...args} color="success">
          Success
        </Button>
        <Button {...args} color="warning">
          Warning
        </Button>
        <Button {...args} color="danger">
          Danger
        </Button>
        <Button {...args} color="information">
          Information
        </Button>
        <Button {...args} color="neutral">
          Neutral
        </Button>
      </div>
    </div>
  ),
  args: {
    children: "Button",
    size: "M",
    variant: "fill",
    state: "enabled",
    disabled: false,
  },
  argTypes: {
    color: {
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
        <Button {...args} size="L">
          Large
        </Button>
        <Button {...args} size="M">
          Medium
        </Button>
        <Button {...args} size="S">
          Small
        </Button>
      </div>
    </div>
  ),
  args: {
    children: "Button",
    variant: "fill",
    color: "primary",
    state: "enabled",
    disabled: false,
  },
  argTypes: {
    size: {
      control: false,
    },
  },
};

export const AllCombinations: Story = {
  render: (args) => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        alignItems: "center",
      }}
    >
      <h3>All Combinations</h3>
      {[
        "primary",
        "secondary",
        "success",
        "warning",
        "danger",
        "information",
        "neutral",
      ].map((color) => (
        <div
          key={color}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            alignItems: "center",
          }}
        >
          <h4 style={{ textTransform: "capitalize", margin: 0 }}>{color}</h4>
          <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            <Button {...args} color={color as any} variant="fill" size="L">
              Fill L
            </Button>
            <Button {...args} color={color as any} variant="fill" size="M">
              Fill M
            </Button>
            <Button {...args} color={color as any} variant="fill" size="S">
              Fill S
            </Button>
            <Button {...args} color={color as any} variant="outline" size="L">
              Outline L
            </Button>
            <Button {...args} color={color as any} variant="outline" size="M">
              Outline M
            </Button>
            <Button {...args} color={color as any} variant="outline" size="S">
              Outline S
            </Button>
            <Button {...args} color={color as any} variant="soft" size="L">
              Soft L
            </Button>
            <Button {...args} color={color as any} variant="soft" size="M">
              Soft M
            </Button>
            <Button {...args} color={color as any} variant="soft" size="S">
              Soft S
            </Button>
          </div>
        </div>
      ))}
    </div>
  ),
  args: {
    children: "Button",
    state: "enabled",
    disabled: false,
  },
  argTypes: {
    color: {
      control: false,
    },
    variant: {
      control: false,
    },
    size: {
      control: false,
    },
  },
};
