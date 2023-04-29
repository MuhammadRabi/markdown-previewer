import "./App.css";
import React, { useState } from "react";
import { marked } from "marked";
import useLocalStorage from "./hooks/useLocalStorage";

const App = () => {
  const [compiled, setCompiled] = useState('<h2 id="hello">Hello</h2>');
  // const [hidePreview, setHidePreview] = useState(true);
  const [code, setCode] = useLocalStorage(
    "test",
    "## please, write your text here"
  );

  const [activeTab, setActiveTab] = useState("code");

  const toggleTab = (tab) => {
    setActiveTab(tab);
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
          <button
            onClick={() => toggleTab("code")}
            className={`${activeTab === "code" ? "active" : " "}`}
          >
            MarkDown
          </button>
          <button
            onClick={() => toggleTab("preview")}
            className={`${activeTab === "preview" ? "active" : " "}`}
          >
            Preview
          </button>
          <button
            onClick={() => toggleTab("docs")}
            className={`${activeTab === "docs" ? "active" : " "}`}
          >
            Docs
          </button>
        </div>
        {activeTab === "code" && (
          <div>
            <textarea onChange={handleChange} value={code} />
          </div>
        )}
        {activeTab === "preview" && (
          <div>
            <textarea value={compiled} />
          </div>
        )}
        {activeTab === "docs" && (
          <div>
            <textarea value="hello! this is docs!" />
          </div>
        )}
      </div>
    </>
  );
};

export default App;
