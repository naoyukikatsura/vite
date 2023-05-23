import { useCallback } from "react";

import type { Task } from ".";

interface taskProps {
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const useHandleChecked = ({ setTasks }: taskProps) => {
  const handleChecked = useCallback(
    (id: number) => {
      setTasks((prevTasks) => prevTasks.map((task) => (task.id === id ? { ...task, done: true } : task)));
    },
    [setTasks]
  );

  return { handleChecked };
};

export default useHandleChecked;
