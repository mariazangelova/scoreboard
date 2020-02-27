// src/components/AddPlayerForm.js
import React, { useState } from "react";

export default function AddPlayerForm(props) {
  const [name, set_name] = useState("");

  function submitPlayer(event) {
    event.preventDefault();
    props.addPlayer(name);
    set_name("");
  }

  console.log("WHAT IS IN THE PROPS OF ADDPLAYER", props.addPlayer);
  return (
    <div className="AddPlayerForm">
      <p>
        New player:{" "}
        <input
          value={name}
          onChange={event => set_name(event.target.value)}
          type="text"
          placeholder="What is your mame?"
        />{" "}
      </p>
      <button onClick={submitPlayer}>Add</button>
    </div>
  );
}
