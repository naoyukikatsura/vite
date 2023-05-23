import { useCallback, useState } from "react";

import { defaultTaskItem, type Task } from ".";

const useHandleClick = () => {
  const [id, setId] = useState<number>(3);

  const [tasks, setTasks] = useState<Task[]>(defaultTaskItem);

  const handleCreateTask = useCallback(() => {
    if (tasks[0].value !== "") {
      const newId = id + 1;
      setId(newId);
      const newTask: Task = {
        value: "",
        description: "",
        id: newId,
        done: false,
        active: false,
      };

      setTasks([newTask, ...tasks]);
    }
  }, [id, setTasks, tasks]);

  return { tasks, setTasks, handleCreateTask };
};

export default useHandleClick;
