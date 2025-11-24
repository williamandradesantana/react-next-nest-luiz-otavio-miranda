import { Heading } from "./components/Heading/Heading";
import { TimerIcon } from "lucide-react";

import "./styles/theme.css";
import "./styles/global.css";

export function App() {
  return (
    <>
      <Heading>
        Hello World!
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
        quisquam neque molestiae, deleniti dignissimos similique odio odit
        aliquam officiis libero in quos at non illum sint velit magni soluta
        fugiat?
      </p>
    </>
  );
}
