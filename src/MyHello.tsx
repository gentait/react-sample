import React from "react";

type Props = {
  name: string;
};
export default class MyHello extends React.Component<Props> {
  render() {
    return <div>こんにちは、{this.props.name}さん！</div>;
  }
}
