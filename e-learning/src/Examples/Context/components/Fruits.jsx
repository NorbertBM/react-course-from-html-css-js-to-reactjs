import React, { useContext } from "react";
import Fruit from "./Fruit";
// export default function Fruits({ fruitsData }) {
//   return (
//     <ul>
//       {fruitsData.map((fruit) => (
//         <Fruit fruit={fruit} />
//       ))}
//     </ul>
//   );
// }
import { FruitsContext } from "../FruitsApp";
export default function Fruits() {
  const fruits = useContext(FruitsContext);

  return (
    <ul>
      {fruits.map((fruit) => (
        <Fruit fruit={fruit} />
      ))}
    </ul>
  );
}
