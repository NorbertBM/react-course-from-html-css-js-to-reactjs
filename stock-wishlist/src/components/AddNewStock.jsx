import React from "react";
import Button from "./Button";
import { IoMdAddCircle } from "react-icons/io";
import Input from "./Input";
export default function AddNewStock({
  newStockSymbol,
  setNewStockSymbol,
  inputRef,
  newStockName,
  setNewStockName,
  newStockSector,
  setNewStockSector,
  handleAddStock,
}) {
  return (
    <section className="flex mb-4 sm:flex-col md:flex-row gap-2">
      <Input
        value={newStockSymbol}
        onChange={(e) => setNewStockSymbol(e.target.value.toUpperCase())}
        placeholder={"Enter stock symbol"}
        ref={inputRef}
      />
      <Input
        value={newStockName}
        onChange={(e) => setNewStockName(e.target.value)}
        placeholder={"Enter stock name"}
      />
      <Input
        value={newStockSector}
        onChange={(e) => setNewStockSector(e.target.value)}
        placeholder={"Enter stock sector"}
      />
      <Button classes="bg-teal-500 hover:bg-teal-700" onClick={handleAddStock}>
        <IoMdAddCircle size={25} />
      </Button>
    </section>
  );
}
