import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import useHandleOpen from "./handle-open";

describe("handleCreateTaskのテスト", () => {
  const { result } = renderHook(() => useHandleOpen());

  test("isOpenの真偽値が反転する", () => {
    act(() => {
      result.current.handleOpen();
    });

    expect(result.current.isOpen).toBe(true);
  });
});
