import React from "react";

export default function StockListTableHead() {
  return (
    <div className="flex justify-between items-center bg-gray-100 text-stone-900 rounded-md px-6 py-2 mb-2 font-bold">
      <h3>Symbol</h3>
      <div className="flex items-center gap-2">
        <small className="cursor-pointer text-slate-400 hover:text-slate-800">
          A-Z
        </small>
        <h3>Name</h3>
        <small className="cursor-pointer text-slate-400 hover:text-slate-800">
          Z-A
        </small>
      </div>
      <div className="flex items-center gap-2">
        <small className="cursor-pointer text-slate-400 hover:text-slate-800">
          A-Z
        </small>
        <select className="border border-gray-300 rounded-md px-2 py-1">
          <option>All Sectors</option>
          <option>...</option>
        </select>
        <small className="cursor-pointer text-slate-400 hover:text-slate-800">
          Z-A
        </small>
      </div>
      <h3>Actions</h3>
    </div>
  );
}
