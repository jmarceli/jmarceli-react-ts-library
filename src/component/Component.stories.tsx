import React from "react";
import { Component } from "./Component";

import { Meta } from "@storybook/react/types-6-0";

// Primary will be the name for the first story
export const Primary: React.FC<{}> = () => (
  <div>
    <Component title="My Title">
      <div>Some content</div>
    </Component>
  </div>
);

// Secondary will be the name for the second story
export const Secondary: React.FC<{}> = () => (
  <Component title="Another title">
    <div>Secondary component</div>
  </Component>
);

export default {
  title: "Component", // Title of you main menu entry for this group of stories
  component: Component, // This is the component documented by this Storybook page
} as Meta;
