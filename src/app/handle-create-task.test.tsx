import { renderHook, act } from "@testing-library/react";

import useHandleClick from "./handle-create-task";

describe("handleCreateTaskのテスト", () => {
  test("新しいタスクが生成", () => {
    const { result } = renderHook(() => useHandleClick());

    const newTaskValue = "";
    const newTaskDescription = "";

    act(() => {
      result.current.handleCreateTask();
    });

    expect(result.current.tasks[0].value).toBe("");
    expect(result.current.tasks[0].description).toBe("");
    expect(result.current.tasks[0].id).toBe(4);
    expect(result.current.tasks[0].done).toBe(false);
    expect(result.current.tasks[0].active).toBe(false);
  });
});
