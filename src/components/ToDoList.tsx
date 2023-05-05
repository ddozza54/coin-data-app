import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import CreateToDo from "./CreateToDo";
import { toDoSelector, toDoState } from "../atoms";
import ToDo from "./ToDo";

export default function ToDoList() {
  const [toDo, doing, done] = useRecoilValue(toDoSelector);
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <CreateToDo />
      <ul>
        <h1>To Do</h1>
        {toDo.map((todo) => (
          <ToDo key={todo.id} {...todo} />
        ))}
        <hr />
        <h1>Doing</h1>
        {doing.map((todo) => (
          <ToDo key={todo.id} {...todo} />
        ))}
        <hr />
        <h1>Done</h1>
        {done.map((todo) => (
          <ToDo key={todo.id} {...todo} />
        ))}
        <hr />
      </ul>
    </div>
  );
}
