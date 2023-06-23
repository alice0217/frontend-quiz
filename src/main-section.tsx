import { css } from "@emotion/css";
import { useState } from "react";

const MainSection = () => {
  const [count, setCount] = useState("");

  const handleIncrease = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const userInput = Number(count);
    if (count === "") {
      alert("Input a number.");
    } else if (isNaN(userInput)) {
      alert("Invalid input.");
    } else {
      setCount(Number(count) + 1 + "");
    }
  };

  const handleChange = (event: { target: { value: any } }) => {
    setCount(event.target.value);
  };

  return (
    <div
      className={css`
        background-color: #1a2902;
        width: 576px;
        height: 280px;
        border-radius: 16px;
        padding: 64px 96px 64px 96px;
        box-sizing: border-box;
      `}
    >
      <form
        className={css`
          width: 384px;
          height: 152px;
        `}
      >
        <div
          className={css`
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            width: 384px;
            height: 80px;
            gap: 8px;
          `}
        >
          <label
            className={css`
              color: white;
              display: block;
            `}
            htmlFor={"number-input"}
          >
            Input a number:
          </label>
          <input
            id={"number-input"}
            className={css`
              width: 384px;
              height: 48px;
              border-radius: 8px;
              border: 1px;
              padding: 0px 8px 0px 8px;
              margin-top: 0.5rem;
              gap: 15px;
              font-size: 20px;
            `}
            value={count}
            onChange={handleChange}
          />
        </div>
        <div
          className={css`
            display: flex;
            justify-content: center;
            margin-top: 1rem;
          `}
        >
          <button
            className={css`
              width: 243px;
              height: 40px;
              border-radius: 8px;
              border: 1px;
              background-color: #c1d2ae;
            `}
            onClick={handleIncrease}
          >
            Increase one
          </button>
        </div>
      </form>
    </div>
  );
};

export default MainSection;
