import React from "react";
import Fruits from "./Fruits";

// export default function FruitsList({ fruitsData }) {
//   return (
//     <div className="container container-sm bg-info p-1">
//       <h2 className="subtitle text-light">Fruits List</h2>
//       <Fruits fruitsData={fruitsData} />
//     </div>
//   );
// }
export default function FruitsList() {
  return (
    <div className="container container-sm bg-info p-1">
      <h2 className="subtitle text-light">Fruits List</h2>
      <Fruits />
    </div>
  );
}
