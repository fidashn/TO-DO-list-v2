import React, { useState } from "react";

function TodoForm() {
  const [input, setInput] = useState("");

  return (
    <form className="todo-form">
      <input
        type="text"
        placeholder="Add a to-do.."
        value={input}
        name="text"
        className="todo-input"
      />
      <button className="todo-btn">Add to-do</button>
    </form>
  );
}

export default TodoForm;
