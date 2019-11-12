import { action, observable } from "mobx";
import React from "react";
import { TimerView } from "./TimerView";

interface IObserver {
  timer: number;
  resetTimer?: () => void;
}

const appState: IObserver = observable({
  timer: 0
});

appState.resetTimer = action(function reset() {
  appState.timer = 0;
});

setInterval(
  action(function tick() {
    appState.timer += 1;
  }),
  1000
);

export default () => <TimerView appState={appState} />;
