// import { useCallback } from "react";

// import type { Task } from ".";

// interface TaskProps {
//   setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
//   tasks: Task[];
// }
// const useHandleChecked = ({ tasks, setTasks }: TaskProps) => {

//   const handleChecked = useCallback(
//     (id: number) => {
//       if (tasks[0].value !== "") {
//         setTasks((prevTasks) =>
//           prevTasks.map((task) => (task.id === id ? { ...task, done: !task.done } : task))
//         );
//       }
//     },
//     [setTasks, tasks]
//   );

//   return { handleChecked };
// };

// export default useHandleChecked;
