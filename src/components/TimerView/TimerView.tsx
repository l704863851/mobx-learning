import { observer } from "mobx-react";
import React from "react";

interface IProps {
  appState: any;
}

@observer
class TimerView extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
    this.onReset = this.onReset.bind(this);
  }
  public render() {
    return (
      <button onClick={this.onReset}>
        Seconds passed: {this.props.appState.timer}
      </button>
    );
  }
  private onReset() {
    this.props.appState.resetTimer();
  }
}

export { TimerView };
