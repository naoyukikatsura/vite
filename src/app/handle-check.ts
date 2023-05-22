import { useCallback } from "react";

import type { Task } from ".";

interface taskProps{
  tasks: Task[]
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

const useHandleChecked = ({tasks, setTasks}: taskProps) => {

  const handleChecked = useCallback((id: number, done: boolean, active: boolean) => {
      setTasks((prevTasks) => prevTasks.map((task) => (task.id === id ? { ...task, done: true } : task)));
    }, [setTasks])

  return {handleChecked}

  }

  export default useHandleChecked