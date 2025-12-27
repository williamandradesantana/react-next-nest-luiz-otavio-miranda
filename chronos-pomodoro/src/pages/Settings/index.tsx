import { SaveIcon } from "lucide-react";
import { Container } from "../../components/Container";
import { DefaultButton } from "../../components/DefaultButton";
import { DefaultInput } from "../../components/DefaultInput";
import { Heading } from "../../components/Heading";

import { MainTemplate } from "../../templates/MainTemplate";

export function Settings() {
  return (
    <MainTemplate>
      <Container>
        <Heading children="Configurações" />
      </Container>
      <Container>
        <p style={{ textAlign: "center" }}>
          Modifique as configurações para tempo, foco e descanso curto e
          descanso longo.
        </p>
      </Container>

      <Container>
        <form action="" className="form">
          <div className="formRow">
            <DefaultInput id="workTime" labelText="Foco" />
          </div>

          <div className="formRow">
            <DefaultInput id="shortBreakTime" labelText="Descanso curto" />
          </div>

          <div className="formRow">
            <DefaultInput id="longBreakTime" labelText="Descanso longo" />
          </div>

          <div className="formRow">
            <DefaultButton
              id="longBreakTime"
              color="green"
              icon={<SaveIcon />}
              aria-label="Salvar configurações"
              title="Salvar configurações"
            />
          </div>
        </form>
      </Container>
    </MainTemplate>
  );
}
