import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export interface Todo {
  id: number;
  name: string;
  completed: boolean;
  date: string;
}

interface TodoState {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  setCompleted: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const useTodoStore = create<TodoState>()(
  devtools(
    persist(
      (set) => {
        return {
          todos: [],
          addTodo: (todo: Todo) =>
            set((state) => {
              return {
                todos: [...state.todos, { ...todo }],
              };
            }),
          setCompleted: (id: number) =>
            set((state) => {
              return {
                todos: state.todos.map((t) =>
                  t.id === id
                    ? {
                        ...t,
                        completed: !t.completed,
                      }
                    : t
                ),
              };
            }),
          deleteTodo: (id: number) =>
            set((state) => {
              return {
                todos: state.todos.filter((t) => t.id !== id),
              };
            }),
        };
      },
      { name: "TodoStore" }
    )
  )
);

export default useTodoStore;
