import { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Current Count: {count}</p>
      <button
        style={{ backgroundColor: "green", color: "white", margin: "0 10px" }}
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <button
        onClick={() => setCount(count - 1)}
        style={{ backgroundColor: "red", color: "white", marginRight: "10px" }}
      >
        Decrement
      </button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
export default Counter;
