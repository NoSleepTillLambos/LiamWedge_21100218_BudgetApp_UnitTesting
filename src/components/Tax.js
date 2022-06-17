import React from "react";
import "../css/Tax.css";
import { useState } from "react";

function Tax({ addSalary }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addSalary(text);
    setText("");
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        {/* inputs for the first text field / users salary */}
        <input
          type="text"
          className="text-field"
          placeholder="Name"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <input type="number" className="salary" placeholder="salary" />
        <input type="submit" className="submit-btn" />
      </form>
    </>
  );
}

export default Tax;
