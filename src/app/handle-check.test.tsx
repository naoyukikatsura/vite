import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";


import useHandleChecked from "./handle-check";
import useHandleClick from "./handle-create-task";

describe('handleCheckedのテスト', () => {
  test('タスク一覧が非表示になる', () => {

    const { result } = renderHook(() =>
    {
      const {setTasks, tasks} = useHandleClick()
      const {handleChecked} = useHandleChecked({setTasks})

      return {handleChecked, tasks}
    })

    act(() => {
      result.current.handleChecked(1);
    });

    expect(result.current.tasks).toEqual([
  {
    "active": false,
    "description": "説明3",
    "done": false,
    "id": 3,
    "value": "タイトル3",
  },
  {
    "active": false,
    "description": "説明2",
    "done": false,
    "id": 2,
    "value": "タイトル2",
  },
  {
    "active": false,
    "description": "説明1",
    "done": true,
    "id": 1,
    "value": "タイトル1",
  },
    ]);
  });


});
