import React from "react";

export default function LoadData({ handleLoadData }) {
  return (
    <input
      type="file"
      accept=".json"
      onChange={handleLoadData}
      className="border border-gay-300 p-2 rounded-md shadow-md"
    />
  );
}
