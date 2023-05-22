import { renderHook, act } from "@testing-library/react";

import useHandleClick from "./handle-create-task";

describe("handleCreateTaskのテスト", () => {
  const { result } = renderHook(() => useHandleClick());

  test("新しいタスクが追加される", () => {
    // const initialTask = [
    //   {
    //     Value: 'タイトル1',
    //     description: '説明1',
    //     id: 1,
    //     done: false,
    //     active: false,
    //   },
    // ];

    // act(() => {
    //   result.current.setTasks(initialTask);
    // });

    act(() => {
      result.current.handleCreateTask();
    });

    expect(result.current.tasks).length(4);
    expect(result.current.tasks[0].id).toBe(4);
    expect(result.current.tasks[0].value).toBe("");
    expect(result.current.tasks[0].description).toBe("");
    expect(result.current.tasks[0].done).toBe(false);
    expect(result.current.tasks[0].active).toBe(false);
  });
});
