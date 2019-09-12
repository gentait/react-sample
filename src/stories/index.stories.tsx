import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import MyHello from "../MyHello";
import TodoApp from "../components/TodoApp";

const components = storiesOf("Components", module);
components
  .add("MyHello", () => <MyHello name="伊藤" />)
  .add("TodoApp", () => <TodoApp />);
