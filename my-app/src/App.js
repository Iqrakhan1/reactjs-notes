import "./App.css";
import { useState } from "react";

function App() {
  const [value, newvalue] = useState(0);
  return (
    <div className="App">
      <div>{value}</div>
      <button onClick={() => newvalue(value + 1)}>Click me</button>
    </div>
  );
}

export default App;
