import { createRoot } from "react-dom/client";
import { QueryClient } from "react-query";
import { Router } from "react-router-dom";
import { App } from "./App";

const root = createRoot(document.getElementById("root"));
const render = root.render.bind(root);

render(<App />);
