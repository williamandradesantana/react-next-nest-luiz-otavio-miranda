import { PlayCircleIcon } from "lucide-react";

import { useRef } from "react";

import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";

export function MainForm() {
  // const [taskName, setTaskName] = useState<string>(""); utilizar quando precisar saber os valor em tempo real (cpf)
  const taskNameInput = useRef<HTMLInputElement>(null); // não causa várias renderizações no componente

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("Deu certo");
  }

  return (
    <form onSubmit={handleCreateNewTask} className="form" action="">
      <div className="formRow">
        <DefaultInput
          id="defaultInput"
          type="text"
          labelText="Task"
          placeholder="Enter something"
          ref={taskNameInput}
          // value={taskName}
          // onChange={(e) => setTaskName(e.target.value)}
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
