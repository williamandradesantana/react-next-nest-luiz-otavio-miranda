import { PlayCircleIcon, StopCircleIcon } from "lucide-react";

import { useRef } from "react";

import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";

import type { TaskModel } from "../../models/TaskModel";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import { formatSecondsToMinutes } from "../../utils/formatSecondsToMinutes";

export function MainForm() {
  // const [taskName, setTaskName] = useState<string>(""); utilizar quando precisar saber os valor em tempo real (cpf)
  const taskNameInput = useRef<HTMLInputElement>(null); // não causa várias renderizações no componente

  const { state, setState } = useTaskContext();

  // ciclos
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (taskNameInput.current === null) return;

    const taskName = taskNameInput.current.value.trim();

    if (!taskName) {
      alert("Digite o nome da tarefa");
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

    const secondsRemaining = newTask.duration * 60;

    setState((prevState) => {
      return {
        ...prevState,
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemaining: secondsRemaining,
        formattedSecondsReaminig: formatSecondsToMinutes(secondsRemaining),
        tasks: [...prevState.tasks, newTask],
        config: {
          ...prevState.config,
        },
      };
    });

    taskNameInput.current.value = "";
  }

  function handleInterruptTask(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    event.preventDefault();

    setState((prevState) => {
      return {
        ...prevState,
        activeTask: null,
        secondsRemaining: 0,
        formattedSecondsReaminig: "00:00",
      };
    });
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
        <p>Próximo intervalo é de 25min</p>
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
