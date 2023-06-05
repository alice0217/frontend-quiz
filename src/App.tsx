import { css } from "@emotion/css";

const App = () => {
  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
        height: 100vh;
      `}
    >
      <div
        className={css`
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
