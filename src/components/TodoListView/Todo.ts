import { observable } from "mobx";

export class Todo {
  public id = Math.random();
  @observable public title = "";
  @observable public finished = false;
}
