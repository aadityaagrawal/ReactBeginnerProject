import React from "react";

export default function Todolist({ todo, onDelete }) {
  return (
    <>
      <div className="my-3">
        <h4>{todo.title}</h4>
        <p>{todo.desc}</p>
        <button
          className="btn btn-danger p-2 text-center btn-sm"
          onClick={() => {
            onDelete(todo);
          }}
        >
          Delete
        </button>
      </div>
    </>
  );
}
