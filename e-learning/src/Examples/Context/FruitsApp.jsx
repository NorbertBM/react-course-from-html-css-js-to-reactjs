import React from "react";

import { fruitsData } from "./data";
import FruitsList from "./components/FruitsList";

export const FruitsContext = React.createContext();

export default function FruitsApp() {
  //   return (
  //     <div>
  //       <h1 className="title text-center">Fruits App</h1>
  //       {/* <ul>
  //         {fruitsData.map((fruit) => {
  //           return (
  //             <li key={fruit.id} className="card card-info mb-2">
  //               <h2>{fruit.name}</h2>
  //               <p>Price: ${fruit.price}</p>
  //               <p>Weight: ${fruit.weight}</p>
  //             </li>
  //           );
  //         })}
  //       </ul> */}
  //       <FruitsList fruitsData={fruitsData} />
  //     </div>
  //   );
  return (
    <FruitsContext.Provider value={fruitsData}>
      <FruitsList />
    </FruitsContext.Provider>
  );
}
