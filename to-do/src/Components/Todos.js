import React from "react";
import Todolist from "./Todolist";

export default function Todos(props) {
  return (
    <div className="container">
      <h3 className="my-3 text-center">Todos List</h3>
      {props.todos.length === 0
        ? "No Todos to display"
        : props.todos.map((todo) => {
            return (
              <Todolist todo={todo} key={todo.sno} onDelete={props.onDelete} />
            );
          })}
    </div>
  );
}
