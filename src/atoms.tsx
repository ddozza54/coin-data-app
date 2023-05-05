import { atom, selector } from "recoil";

let local = JSON.parse(localStorage.getItem("toDos") as any);

export enum Categories {
  "TO_DO" = "TO_DO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}
export interface IToDo {
  text: string;
  id: number;
  category: Categories;
}

export const categoryState = atom<Categories>({
  key: "category",
  default: Categories.TO_DO,
});

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: local ? local : [],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState); // get Fn으로 atom state 를 가져올 수 있다.
    const categoty = get(categoryState);
    return toDos.filter((todo) => todo.category === categoty);
  },
});
