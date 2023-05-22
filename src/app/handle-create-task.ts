import { useCallback, useState } from "react";

const HandleCreateTask = () => {
  const [count, setCount] = useState<number>(3);
  const handleCreateTask = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return { count, handleCreateTask };
};

export default HandleCreateTask;
