import { useState } from "react";

import { Container } from "./components/Container";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";
import { CountDown } from "./components/CountDown";
import { DefaultInput } from "./components/DefaultInput";
import { Cycles } from "./components/Cycles";
import { DefaultButton } from "./components/DefaultButton";
import { Footer } from "./components/Footer";
import { Heading } from "./components/Heading";

import { PlayCircleIcon } from "lucide-react";

import "./styles/theme.css";
import "./styles/global.css";

export function App() {
  // const [count, setCount] = useState<number>(() => {
  //   console.log("Lazy initilization");
  //   return 0;
  // });

  const [count, setCount] = useState<number>(0);
  const handleClick = () => {
    // Pula de três em três por armazenar o estado anterior internamente
    /*
      setCount((prev) => prev + 1);
      setCount((prev) => prev + 1);
      setCount((prev) => prev + 1);
    */

    /* Executa apenas uma vez
      setCount(count + 1);
      setCount(count + 1);
      setCount(count + 1);
    */

    setCount((prev) => prev + 1);
  };
  return (
    <>
      <Heading> {count} </Heading>
      <button onClick={handleClick}>Aumentar</button>

      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
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
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="formRow">
            <Cycles />
          </div>

          <div className="formRow">
            <DefaultButton color="green" icon={<PlayCircleIcon />} />
          </div>
        </form>
      </Container>

      <Container>
        <Footer />
      </Container>
    </>
  );
}
