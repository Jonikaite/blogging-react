import { useEffect, useState } from "react";
import { useHref } from "react-router-dom";

export function CreateRecordPage(props) {
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const listUrl = useHref("/");

  const clear = () => {
    setName("");
    setText("");
  };

  const applyResult = (result) => {
    if (result.ok) {
      clear();
    } else {
      window.alert(
        "Įrašai be antraštės ar su pasikartojančia antrašte negali būti publikuoti: " +
          result.status
      );
    }
  };

  const createRecord = () => {
    fetch("/api/v1/records", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        text,
        registered: false,
      }),
    })
      .then(applyResult)
      .then(() => (window.location = listUrl));
  };

  useEffect(() => {
    if (name === null) {
      document.getElementById("name").style.background = "red";
    } else {
      document.getElementById("name").style.border = "black";
    }
  });

  return (
    <fieldset id="create">
      <legend>Create New Record</legend>

      <div>
        <label htmlFor="name">Antrastė:</label>
        <input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="text">Tekstas</label>
        <textarea
          id="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        <button onClick={createRecord}>Publikuoti</button>
      </div>
    </fieldset>
  );
}
