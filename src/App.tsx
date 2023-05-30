/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

const App = () => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        height: 100vh;
      `}
    >
      <div
        css={css`
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    </div>
  );
};

export { App };
