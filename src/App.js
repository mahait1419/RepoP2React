import React from "react";
import "./App.css";
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import React, { Component } from 'react'
// import {connect} from 'react-redux';



function Todo({ todo, index, doneTodo, removeTodo }) {
  return (
    <div
      className="todo"

    >
      <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span>
      <div>
        <Button variant="success" onClick={() => doneTodo(index)}>Done</Button>{' '}
        <br />
        <Button variant="danger" onClick={() => removeTodo(index)}>Remove</Button>
      </div>
    </div>
  );
}

function FormTodo({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label><b>HI ..<br /> Your Task To Track It :  </b></Form.Label>
        <Form.Control type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new todo" />
      </Form.Group>
      <br />
      Click Here To Add Task : <br /><Button variant="primary mb-3" type="submit">
        Add Task
      </Button>
      <br />
      <br />
      List Of Task :
      <br />
    </Form>
  );
}

function App() {
  const [todos, setTodos] = React.useState([
    {
      text: "test",
      isDone: false
    }
  ]); 

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const doneTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-4" > Track Your Task </h1>
        <FormTodo addTodo={addTodo} />
        <div>
          {todos.map((todo, index) => (
            <Todo
              key={index}
              index={index}
              todo={todo}
              doneTodo={doneTodo}
              removeTodo={removeTodo}
            />))}
        </div></div>
    </div>
  );
}

export default App;