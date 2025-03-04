import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { FC, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { MdAssignmentAdd } from "react-icons/md";
import { RiAddCircleFill } from "react-icons/ri";
import { TiTickOutline } from "react-icons/ti";

import useTodoStore from "../store/store.ts";

const Aside: FC = () => {
  const [showDialog, setShowDialog] = useState(false);
  const openDialog = () => setShowDialog(true);
  const closeDialog = () => setShowDialog(false);
  const handleClose = (e: React.MouseEvent, reason?: string) => {
    e.preventDefault();
    if (reason === "backdropClick") return; // Prevent closing on backdrop click
    setShowDialog(false);
  };

  const { addTodo } = useTodoStore();

  const [todo, setTodo] = useState<string>("");

  const handleAddTodo = (e: React.MouseEvent) => {
    e.preventDefault();
    if (todo.trim() === "") return;
    addTodo({
      id: Math.floor(Math.random() * 1000),
      name: todo,
      completed: false,
      date: new Date().toLocaleDateString(),
    });
    setTodo("");
    closeDialog();
  };
  return (
    <aside className="lg:p-3 col-span-4 md:col-span-1 lg:col-span-1 p-4  rounded-[0.5rem] shadow-lg shadow-black-500/50 bg-white ">
      <div className="flex flex-row md:flex-col lg:flex-col justify-center items-center gap-2">
        {/* <h4 className="text-2xl">CRUD LIST</h4> */}
        <span>
          <button
            className="px-4 py-2 rounded-2xl cursor-pointer bg-amber-400"
            onClick={openDialog}>
            <span className="flex justify-center items-center">
              <RiAddCircleFill size={25} /> Add
            </span>
          </button>
        </span>
      </div>
      {/* Open modal to add todo */}
      <Modal open={showDialog} onClose={handleClose}>
        <Box
          className="lg:w-[40%] md:w-[60%] w-80"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            // width: "80%",
            bgcolor: "background.paper",
            border: "none",
            boxShadow: 24,
            p: 4,
            outline: "none",
            borderRadius: "0.5rem",
          }}>
          <div className="flex items-center justify-between">
            <Typography
              className="flex justify-start items-center gap-1"
              id="modal-modal-title"
              variant="h6"
              component="h2">
              <MdAssignmentAdd />
              Add Task
            </Typography>
            <IoCloseSharp
              size={25}
              className="cursor-pointer hover:bg-amber-600 hover:rounded-full"
              onClick={closeDialog}
            />
          </div>
          <div className="mt-4 flex flex-col gap-2 justify-center items-center">
            <TextField
              id="todo"
              label="Add Your Todo Here"
              fullWidth
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
            />
            <Button
              variant="contained"
              color="success"
              sx={{
                width: { sm: "100%", lg: "auto", md: "auto" },
                marginTop: "0.5rem",
              }}
              onClick={handleAddTodo}>
              <TiTickOutline size={20} />
              Save
            </Button>
          </div>
        </Box>
      </Modal>
    </aside>
  );
};

export default Aside;
