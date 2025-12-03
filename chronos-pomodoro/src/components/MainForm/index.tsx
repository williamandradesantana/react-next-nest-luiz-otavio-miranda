import { PlayCircleIcon } from "lucide-react";

import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";

export function MainForm() {
  return (
    <form className="form" action="">
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
