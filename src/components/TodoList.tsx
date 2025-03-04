import { Box, Typography } from "@mui/material";
import useTodoStore from "../store/store";
import { MdDelete, MdDoneOutline, MdOutlineRemoveDone } from "react-icons/md";
import { useCallback } from "react";

const TodoList = () => {
  const { todos, setCompleted, deleteTodo } = useTodoStore();

  const handleSetCompleted = useCallback(
    (id: number) => {
      setCompleted(id);
    },
    [setCompleted]
  );

  return (
    <div className="col-span-4 md:col-span-2 lg:col-span-2 p-4 rounded-[0.5rem]  shadow-lg shadow-black-500/50 bg-white">
      <h4 className="font-bold text-2xl">Todo List</h4>

      {todos ? (
        <div className="mt-3">
          <Box>
            {todos.map((todo) => (
              <div
                className="flex justify-between items-center gap-2 mb-1"
                key={todo.id}>
                <Typography
                  key={todo.id}
                  sx={{
                    flex: 1,
                    color: "GrayText",
                    fontSize: "1rem",
                    fontWeight: "bold",
                    whiteSpace: "normal",
                    wordBreak: "break-word",
                  }}>
                  {todo.name}
                </Typography>
                <div className="flex flex-row gap-5">
                  <button onClick={() => handleSetCompleted(todo.id)}>
                    {todo.completed ? (
                      <MdDoneOutline className="text-green-600" />
                    ) : (
                      <MdOutlineRemoveDone className="text-gray-500" />
                    )}
                  </button>
                  <button onClick={() => deleteTodo(todo.id)}>
                    <MdDelete className="text-red-700" />
                  </button>
                </div>
              </div>
            ))}
          </Box>
        </div>
      ) : (
        <p>No todos</p>
      )}
    </div>
  );
};

export default TodoList;
