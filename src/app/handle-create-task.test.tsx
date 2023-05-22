// import { act, render, screen } from "@testing-library/react"
// import userEvent from "@testing-library/user-event"
// import {vi} from 'vitest'

import { renderHook } from "@testing-library/react";
// import { useState, useCallback } from "react";
import { act } from "react-dom/test-utils";

// import NewCreate from "@components/NewCreate"

// import App from './index'

// describe('handleCreateTaskのテスト', () => {

//   test('countが1増える', async() => {
//     render(<NewCreate onSubmit={vi.fn()} createTask={vi.fn()}/>)
//     const c = {count}
//     const button = screen.getByRole('button')
//     await act(()=>userEvent.click(button))
//     expect(c).toBe(4)

//         })
//   })

import HandleCreateTask from "./handle-create-task";

// export const Create = () => {
//   const [count, setCount] = useState<number>(3);

//   const handleCreateTask = useCallback(() => {
//     setCount(count + 1);
//   }, [count]);

//   return { count, handleCreateTask };
// };


describe("handleCreateTaskのテスト", () => {
  const { result } = renderHook(() => HandleCreateTask());

  test("countが1増える", () => {
    act(() => {
      result.current.handleCreateTask();
    });

    expect(result.current.count).toBe(4);
  });
});
