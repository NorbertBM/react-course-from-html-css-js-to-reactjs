import React, { useState } from "react";
import Button from "../utility/components/Button";
export default function NewItemForm({ onAddItem }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    onAddItem(text);
    setText("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex sm:flex-col md:flex-row gap-3"
    >
      <input
        type="text"
        placeholder="Add new item"
        className="block w-100 rounded-md border-0 shadow-md ring-gray-300 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 "
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button type="summit">Add</Button>
    </form>
  );
}
