import { PlayCircleIcon, StopCircleIcon } from "lucide-react";

import { useRef } from "react";

import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";

import type { TaskModel } from "../../models/TaskModel";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import { TaskActionsTypes } from "../../contexts/TaskContext/taskActions";
import { Tips } from "../Tips";
import { showMessage } from "../../adapters/showMessage";

export function MainForm() {
  // const [taskName, setTaskName] = useState<string>(""); utilizar quando precisar saber os valor em tempo real (cpf)
  const taskNameInput = useRef<HTMLInputElement>(null); // não causa várias renderizações no componente

  const { state, dispatch } = useTaskContext();

  // ciclos
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    showMessage.dismiss();

    if (taskNameInput.current === null) return;

    const taskName = taskNameInput.current.value.trim();

    if (!taskName) {
      showMessage.info("Digite o nome da tarefa");
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: state.config[nextCycleType],
      type: nextCycleType,
    };

    dispatch({ type: TaskActionsTypes.START_TASK, payload: newTask });
    showMessage.success("Tarefa iniciada!");
  }

  function handleInterruptTask(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    event.preventDefault();
    showMessage.dismiss();
    showMessage.error("Tarefa interrompida!");
    dispatch({ type: TaskActionsTypes.INTERRUPT_TASK });
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
          disabled={!!state.activeTask}
          // value={taskName}
          // onChange={(e) => setTaskName(e.target.value)}
        />
      </div>

      <div className="formRow">
        <Tips />
      </div>

      {state.currentCycle > 0 && (
        <div className="formRow">
          <Cycles />
        </div>
      )}

      <div className="formRow">
        {!state.activeTask && (
          <DefaultButton
            aria-label="Iniciar nova tarefa"
            title="Iniciar nova tarefa"
            type="submit"
            color="green"
            icon={<PlayCircleIcon />}
            key="button_submit"
          />
        )}

        {!!state.activeTask && (
          <DefaultButton
            color="red"
            aria-label="Parar tarefa"
            title="Parar tarefa"
            onClick={handleInterruptTask}
            type="button"
            icon={<StopCircleIcon />}
            key="button_button"
          />
        )}
      </div>
    </form>
  );
}
