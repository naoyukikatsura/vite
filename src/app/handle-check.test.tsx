// import { renderHook } from "@testing-library/react";
// import { act } from "react-dom/test-utils";

// import useHandleChecked from "./handle-check";

// describe("handleCreateTaskのテスト", () => {
//   const { result } = renderHook(() => useHandleChecked(tasks, setTasks));

//   test("isOpenの真偽値が反転する", () => {
//     act(() => {
//       result.current.handleChecked();
//     });

//     expect(result.current.handleChecked).toBe(true);
//   });
// });