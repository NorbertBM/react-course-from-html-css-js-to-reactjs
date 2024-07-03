import React, { useState } from "react";
import StockListTableHead from "./StockListTableHead";
import Button from "./Button";
import { IoMdBrush, IoMdRemoveCircle } from "react-icons/io";

export default function StockListTable({ stocks }) {
  const [hovered, setHovered] = useState(null);
  return (
    <section>
      <StockListTableHead />
      {/* TODO: Add Search */}
      {/* TODO: Add Table body */}
      <ul
        style={{ minHeight: "70vh" }}
        className="container container-md overflow-y-scroll"
      >
        <li
          className={`grid grid-cols-4 gap-2 items-center bg-slate-900 hover:bg-gray-300 text-white hover:text-gray-900 rounded-md px-4 py-2 border-b-2 border-gray-800 `}
        >
          <div className="col-span-3 flex justify-between">
            <h4 className="font-bold course-pointer bg-teal-500 hover:bg-slate-700 text-gray-100 py-1 px-2 rounded-md">
              stock symbol
              {/* {stock.symbol} */}
            </h4>
            <h4 className="font-bold">
              Stock name
              {/* {stocks.name} */}
            </h4>
            <small className="text-slate-500">stock.sector</small>
          </div>
          <div className="col-span-1 flex justify-end">
            {hovered === stocks.symbol && (
              <>
                <Button classes={"bg-slate-800 hover:bg-slate-700 mr-1"}>
                  <IoMdBrush size={20} />
                </Button>
                <Button classes={"bg-red-800 hover:bg-red-700"}>
                  <IoMdRemoveCircle size={20} />
                </Button>
              </>
            )}
          </div>
        </li>
        {/* {stocks.map((stock) => (
          <li
            key={stock.symbol}
            className={`grid grid-cols-4 gap-2 items-center bg-slate-900 hover:bg-gray-300 text-white hover:text-gray-900 rounded-md px-4 py-2 border-b-2 border-gray-800 ${
              hoveredItem === stock.symbol ? "hovered" : ""
            }`}
            onMouseEnter={() => setHovered(stock.symbol)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="col-span-3 flex justify-between">
              <h4 className="font-bold course-pointer bg-teal-500 hover:bg-slate-700 text-gray-100 py-1 px-2 rounded-md">
                stock symbol
                {stock.symbol}
              </h4>
            </div>
          </li> 
        ))} */}
      </ul>
    </section>
  );
}
