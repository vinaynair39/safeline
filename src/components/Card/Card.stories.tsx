import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import Card from "./Card";

export default {
  title: "Components/Card",
  component: Card,
} as Meta;

export const Main: React.VFC<{}> = () => <Card />;
