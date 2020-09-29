import React from "react";
import { Component } from "./Component";

import { Meta } from "@storybook/react/types-6-0";

export const Primary: React.FC<{}> = () => (
  <div>
    <Component title="My Title">
      <div>Some content</div>
    </Component>
  </div>
);

export const Secondary: React.FC<{}> = () => (
  <Component title="Another title">
    <div>Secondary component</div>
  </Component>
);

export default {
  title: "Component",
  component: Component,
} as Meta;
