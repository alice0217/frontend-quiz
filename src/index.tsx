/** @jsxImportSource @emotion/react */

import { Global, css } from "@emotion/react";
import emotionReset from "emotion-reset";
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Global
      styles={css`
        ${emotionReset}
      `}
    />
    <App />
  </React.StrictMode>,
);
