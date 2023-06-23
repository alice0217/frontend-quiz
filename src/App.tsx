import { css } from "@emotion/css";
import NavigationBar from "./navigation-bar";
import MainSection from "./main-section";

const App = () => {
  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
        height: 100vh;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
      `}
    >
      <NavigationBar />
      <div
        className={css`
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #c1d2ae;
        `}
      >
        <MainSection />
      </div>

      <p
        className={css`
          text-align: center;
          background-color: #c1d2ae;
          font-size: 16px;
          padding-bottom: 1rem;
          color: #1a2902;
        `}
      >
        Copyright 2023
      </p>
    </div>
  );
};

export { App };
