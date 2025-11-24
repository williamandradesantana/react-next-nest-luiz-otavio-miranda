import { Heading } from "./components/Heading/Heading";

import "./styles/theme.css";
import "./styles/global.css";

export function App() {
  console.log("Hello!");

  return (
    <>
      <Heading attr={123} attr2="String">
        Hello World!
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
