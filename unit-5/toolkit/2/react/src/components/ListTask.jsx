import { markComplete, removeTask } from "../features/taskSlice";
import { Button, HStack, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";

export const ListTask = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);

  if (tasks.length === 0) {
    return <Text>0 task found</Text>;
  }

  return (
    <>
      {tasks.map((task) => {
        return (
          <HStack justify='space-between' mb = {5}>
            <Text>{task.title}</Text>
            <Button variant='outline' onClick={() => dispatch(markComplete(task.id))}>
              {task.status ? "Mark uncomplete" : "Mark complete"}
            </Button>
            <Button variant='outline' onClick={() => dispatch(removeTask(task.id))}>
              Remove
            </Button>
          </HStack>
        );
      })}
    </>
  );
};
