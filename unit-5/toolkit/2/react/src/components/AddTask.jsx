import { addTask } from "../features/taskSlice";
import { Button, Input } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";

export const AddTask = () => {
  const dispatch = useDispatch();
  const [taskName, setTaskName] = useState("");

  const handleTask = () => {
    if (!taskName.trim()) {
      alert("Task must not be empty");
      return;
    }
    const task = { id: Date.now(), title: taskName, status: false };
    dispatch(addTask(task));
    setTaskName('')
  };

  return (
    <>
      <label>
        Add a task :
        <Input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          border='2px solid blue'
        />
      </label>
      <Button m = {10} onClick={handleTask}>Add task</Button>
    </>
  );
};
