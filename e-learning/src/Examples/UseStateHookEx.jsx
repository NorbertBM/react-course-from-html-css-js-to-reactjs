import { useState } from "react";

export default function UseStateHookEx() {
  const [count, setCount] = useState(0);

  let countJS = 0;
  function countInJs(e) {
    if (e.target.classList.contains("+")) {
      console.log(countJS);
      return (countJS += 1);
    } else {
      console.log(countJS);
      return (countJS -= 1);
    }
  }
  console.log(countJS);
  return (
    <div>
      <h1>UseStateHookEx</h1>
      {/* Using JS */}
      <button className="btn +" onClick={(e) => countInJs(e)}>
        +
      </button>
      <span>Your number is {countJS}</span>
      <button className="btn" onClick={(e) => countInJs(e)}>
        -
      </button>
      {/* Using useState */}
      <button className="btn +" onClick={() => setCount(count + 1)}>
        +
      </button>
      <span>Your number is {count}</span>
      <button className="btn" onClick={() => setCount(count - 2)}>
        -
      </button>
    </div>
  );
}
