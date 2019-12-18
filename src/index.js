import React from "react";
import ReactDOM from "react-dom";
import TextField from "@material-ui/core/TextField";

import "./styles.css";

function App() {
  const [value, setValue] = React.useState("Initial value");
  const [visible, setVisible] = React.useState(false);
  function onChange({ target: { value: newValue } }) {
    setValue(newValue);
  }
  function toggle() {
    setVisible(old => !old);
  }

  return (
    <div className="App">
      <button onClick={toggle}>toggle</button>
      <br />
      <div style={{ display: visible ? "initial" : "none" }}>
        <TextField
          variant="outlined"
          value={value}
          label="Input label"
          onChange={onChange}
        />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
