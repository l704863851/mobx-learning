import { observer } from "mobx-react";
import React from "react";
import { TodoList } from "./TodoList";

interface IProps {
  todoList: TodoList;
}

@observer
export class TodoListView extends React.Component<IProps> {
  public render() {
    return (
      <div>
        <ul>
          {this.props.todoList.todos.map((todo) => (
            <TodoView todo={todo} key={todo.id} />
          ))}
        </ul>
        Tasks left: {this.props.todoList.unfinishedTodoCount}
      </div>
    );
  }
}

const TodoView = observer(({ todo }) => {
  const onClickFinished = () => (todo.finished = !todo.finished);
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.finished}
        onClick={onClickFinished}
      />
      {todo.title}
    </li>
  );
});
