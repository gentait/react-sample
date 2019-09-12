import React from "react";

export default function TodoItem(props: { title: string; id: number }) {
  return <li>{props.title}</li>;
}
