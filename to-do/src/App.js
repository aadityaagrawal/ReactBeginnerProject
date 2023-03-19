import React, { useState } from "react";
import Header from "./Components/Header.js";
import Footer from "./Components/Footer.js";
import Todos from "./Components/Todos.js";
import AddTodo from "./Components/AddTodo.js";

function App() {
  const addTodo = (todo) => {
    
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const newTodo = {
      sno: sno,
      title: todo.title,
      desc: todo.desc,
    };

    setTodos([...todos, newTodo]);

    console.log(newTodo);
  };

  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go To Market",
      desc: "Have Some Fun! And come back soon. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi culpa corrupti qui error unde maiores?",
    },
    {
      sno: 2,
      title: "Go To Mall",
      desc: "Have Some Fun! And come back soon. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi culpa corrupti qui error unde maiores?",
    },
    {
      sno: 3,
      title: "Go To park",
      desc: "Have Some Fun! And come back soon. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi culpa corrupti qui error unde maiores?",
    }
  ]);

  const onDelete = (todo) => {
    console.log("I am clicked", todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };

  return (
    <>
      <Header title="To Do List" />
      <h3 className="text-center">Add To-Do</h3>
      <AddTodo addTodo={(e) => addTodo(e)} />
      <Todos todos={todos} onDelete={onDelete}></Todos>
      <Footer></Footer>
    </>
  );
}

export default App;
