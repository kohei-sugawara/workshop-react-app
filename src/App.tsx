import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const [name, setName] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    switch (true) {
      case e.target.value === "dog":
        setName("犬です");
        break;
      case e.target.value === "cat":
        setName("猫です");
        break;
      default:
        setName("ペットを選択してね");
    }
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">changed text</p>

      {/* セレクトボックスをビューに追加 begin */}
      <label htmlFor="pet-select">Choose a pet:</label>
      <select name="pets" id="pet-select" onChange={(e) => handleChange(e)}>
        <option value="">--Please choose an option--</option>
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
      </select>
      <p>あなたの選択: {name}</p>
      {/* セレクトボックスをビューに追加 end */}
    </>
  );
}

export default App;
