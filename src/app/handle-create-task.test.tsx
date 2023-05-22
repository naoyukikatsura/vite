import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import useHandleCreateTask from "./handle-create-task";

describe("handleCreateTaskのテスト", () => {
  const { result } = renderHook(() => useHandleCreateTask());

  test("countが1増える", () => {
    act(() => {
      result.current.handleCreateTask();
    });

    expect(result.current.count).toBe(4);
  });
});
