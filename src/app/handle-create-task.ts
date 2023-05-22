import { useCallback, useState } from "react";

import { defaultTaskItem, type Task } from ".";

const useHandleClick = () => {
  const [count, setCount] = useState<number>(3);

  const [tasks, setTasks] = useState<Task[]>(defaultTaskItem);

  const handleCreateTask = useCallback(() => {

    if (tasks[0].Value !== "" && tasks[0].description !== "") {
      setCount((prevCount)=>prevCount+1)
      const newTask: Task = {
        Value: "",
        description: "",
        id: count+1,
        done: false,
        active: false,
    };

    setTasks([newTask, ...tasks]);
      }
    }, [count, tasks])


  return { tasks, setTasks, handleCreateTask };
};

export default useHandleClick;
