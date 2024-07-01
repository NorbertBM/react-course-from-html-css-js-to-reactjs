import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container container-md mx-auto flex flex-col text-white bg-slate-900">
      <h1 className="text-3xl font-bold mb-4">Title</h1>
    </div>
  );
}

export default App;
