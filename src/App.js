import "./App.css";
import React, { useState } from "react";
import { marked } from "marked";
import useLocalStorage from "./hooks/useLocalStorage";

const App = () => {
  const [compiled, setCompiled] = useState('<h2 id="hello">Hello</h2>');
  const [hide, hidePreview] = useState(true);
  const [code, setCode] = useLocalStorage(
    "test",
    "## please, write your text here"
  );

  const openMD = () => {
    console.log(0);
    hidePreview(true);
  };

  const openPreview = () => {
    console.log(0);
    hidePreview(false);
  };

  const handleChange = (e) => {
    setCode(e.target.value);
    setCompiled(marked.parse(e.target.value));
  };

  return (
    <>
      <h1>MarkDown Previewer React App</h1>
      <div className="container">
        <div className="btns">
          <button onClick={openMD} className="btn">
            MarkDown
          </button>
          <button onClick={openPreview}>Preview</button>
          <button onClick={openPreview}>Docs</button>
        </div>
        {hide ? (
          <div>
            <textarea onChange={handleChange} value={code} />
          </div>
        ) : (
          <div>
            <textarea value={compiled} />
          </div>
        )}
      </div>
    </>
  );
};

export default App;
