import { useEffect, useReducer, useState } from "react";
import { initialTaskState } from "./initialTaskState";
import { TaskContext } from "./TaskContext";

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, setState] = useState(initialTaskState);
  const [number, dispatch] = useReducer((state, action) => {
    console.log(action, state);

    switch (action) {
      case "INCREMENT":
        return state + 1;
      case "DECREMENT":
        return state - 1;
      case "RESET":
        return 0;
    }
    return state;
  }, 0);

  // useEffect(() => {
  //   console.log(state);
  // }, [state]);

  return (
    <TaskContext.Provider value={{ state, setState }}>
      {/* {children} */}
      <h1>O número é: {number}</h1>
      <button type="button" onClick={() => dispatch("INCREMENT")}>
        Incrementar
      </button>
      <button type="button" onClick={() => dispatch("DECREMENT")}>
        Decrementar
      </button>
      <button type="button" onClick={() => dispatch("RESET")}>
        Resetar
      </button>
    </TaskContext.Provider>
  );
}
