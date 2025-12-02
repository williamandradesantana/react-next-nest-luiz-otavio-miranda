import { PlayCircleIcon } from "lucide-react";

import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";

import type { HomeProps } from "../../pages/Home";

export function MainForm({ state, setState }: HomeProps) {
  function handleClick() {
    setState((prevState) => {
      return {
        ...prevState,
        config: {
          ...prevState.config,
          workTime: 34,
        },
        formattedSecondsReaminig: "23:32",
      };
    });
  }

  return (
    <form className="form" action="">
      <div>
        <button type="button" onClick={handleClick}>
          clicar
        </button>
      </div>
      <div className="formRow">
        <DefaultInput
          id="defaultInput"
          type="text"
          labelText="Task"
          placeholder="Enter something"
        />
      </div>

      <div className="formRow">
        <p>Próximo intervalo é de {state.config.workTime}min</p>
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
