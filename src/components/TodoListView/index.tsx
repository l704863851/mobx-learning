import React from "react";
import { TodoList } from "./TodoList";
import { TodoListView } from "./TodoListView";

const store = new TodoList();

export default () => <TodoListView todoList={store} />;
