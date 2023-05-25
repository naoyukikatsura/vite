import { useCallback } from "react";

import type { Task } from ".";

interface taskProps {
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  tasks: Task[];
}
const useHandleChecked = ({ setTasks, tasks }: taskProps) => {
  const handleChecked = useCallback(
    (id: number) => {
      if (tasks[0].value !== "") {
        setTasks((prevTasks) =>
          prevTasks.map((task) => (task.id === id ? { ...task, done: !task.done, completed: !task.completed } : task))
        );
      }
    },
    [setTasks, tasks]
  );

  return { handleChecked };
};

export default useHandleChecked;
