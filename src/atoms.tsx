import { atom, selector } from "recoil";

type category = "TO_DO" | "DOING" | "DONE";

export interface IToDo {
  text: string;
  id: number;
  category: category;
}

export const categoryState = atom<category>({
  key: "category",
  default: "TO_DO",
});

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState); // get Fn으로 atom state 를 가져올 수 있다.
    const categoty = get(categoryState);
    return toDos.filter((todo) => todo.category === categoty);
  },
});
