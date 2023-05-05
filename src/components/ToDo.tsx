import React from "react";
import { Categories, IToDo, toDoState } from "../atoms";
import { useRecoilState, useSetRecoilState } from "recoil";

export default function ToDo({ text, category, id }: IToDo) {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const TODOS = "toDos";

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, category: name as any };
      localStorage.setItem(TODOS, JSON.stringify(toDos));
      const newToDos = [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
      localStorage.setItem(TODOS, JSON.stringify(newToDos));
      return newToDos;
    });
  };
  const handleDelete = () => {
    setToDos((oldToDos) => oldToDos.filter((todo) => todo.id !== id));
    localStorage.setItem(TODOS, JSON.stringify(toDos));
  };
  return (
    <li>
      <span>{text}</span>
      {category !== Categories.TO_DO && (
        <button name={Categories.TO_DO} onClick={onClick}>
          To Do
        </button>
      )}
      {category !== Categories.DOING && (
        <button name={Categories.DOING} onClick={onClick}>
          Doing
        </button>
      )}
      {category !== Categories.DONE && (
        <button name={Categories.DONE} onClick={onClick}>
          Done
        </button>
      )}
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}
