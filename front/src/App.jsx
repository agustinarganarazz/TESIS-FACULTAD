import { useState } from "react";
import "./App.css";

function App() {
  const [sumar, setSumar] = useState(0);
  return (
    <>
      <div>
        <button
          onClick={() => {
            setSumar(sumar + 1);
          }}
        >
          {sumar}
        </button>
      </div>
    </>
  );
}

export default App;
