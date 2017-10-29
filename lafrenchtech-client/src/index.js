import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import { injectGlobal } from "styled-components";

ReactDOM.render(<App />, document.getElementById("root"));

// // Global style properties
// injectGlobal`
// @font-face {
//   font-family: 'Verdana, Geneva, sans-serif'
// }
// body {
//   margin: 0;
// }
// `;
injectGlobal`
* { box-sizing: border-box; }
body { margin: 0; }
`;
registerServiceWorker();
