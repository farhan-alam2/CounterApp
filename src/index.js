import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import TodoList from "./TodoList";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    {/* <App /> */}
    <TodoList />
  </StrictMode>
);
