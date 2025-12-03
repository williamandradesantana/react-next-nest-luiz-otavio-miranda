import { PlayCircleIcon } from "lucide-react";

import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { useTaskContext } from "../../contexts/TaskContext";

export function MainForm() {
  const { setState } = useTaskContext();

  function handleClick() {
    setState((prevState) => {
      return { ...prevState, formattedSecondsReaminig: "21:00" };
    });
  }

  return (
    <form className="form" action="">
      <button type="button" onClick={handleClick}>
        clicar
      </button>
      <div className="formRow">
        <DefaultInput
          id="defaultInput"
          type="text"
          labelText="Task"
          placeholder="Enter something"
        />
      </div>

      <div className="formRow">
        <p>Próximo intervalo é de 25min</p>
      </div>

      <div className="formRow">
        <Cycles />
      </div>

      <div className="formRow">
        <DefaultButton color="green" icon={<PlayCircleIcon />} />
      </div>
    </form>
  );
}
