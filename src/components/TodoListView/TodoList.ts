import { computed, observable } from "mobx";
import { Todo } from "./Todo";

export class TodoList {
  @observable public todos: Todo[] = [
    new Todo(),
    new Todo(),
    new Todo(),
    new Todo()
  ];
  @computed get unfinishedTodoCount() {
    return this.todos.filter((todo: Todo) => !todo.finished).length;
  }
}
