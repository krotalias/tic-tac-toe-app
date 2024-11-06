/**
 * @file
 *
 * Summary.
 * <p>Tic tac toe.</p>
 *
 * You will build a small tic-tac-toe game during this tutorial.
 * This tutorial does not assume any existing React knowledge.
 * The techniques you’ll learn in the tutorial are fundamental to building any React app,
 * and fully understanding it will give you a deep understanding of React.
 *
 * @author Paulo Roma
 * @since 05/11/2024
 * @see <a href="https://raw.githubusercontent.com/krotalias/tic-tac-toe/main/src/index.jsx">source</a>
 * @see <a href="https://krotalias.github.io/tic-tac-toe/">link</a>
 * @see {@link https://react.dev/learn/tutorial-tic-tac-toe Tutorial: Tic-Tac-Toe}
 */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Game from "./tic-tac-toe";
import "./tic-tac-toe.css";

/**
 * Create a root to display React components inside a browser DOM node.
 * After you’ve created a root, you need to call root.render to display a React component inside of it.
 * @method createRoot
 * @memberof external:react-dom
 * @see {@link https://react.dev/reference/react-dom/client/createRoot createRoot}
 */
const root = createRoot(document.getElementById("tic-tac-toe"));

root.render(
  <StrictMode>
    <Game />
  </StrictMode>,
);
