import React, { useEffect, useState } from "react";
import StockListTableHead from "./StockListTableHead";
import Button from "./Button";
import { IoMdBrush, IoMdRemoveCircle } from "react-icons/io";
import Input from "./Input";

export default function StockListTable({
  stocks,
  handleEditStock,
  handleRemoveStock,
  openStockWidget,
}) {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [filteredStocks, setFilteredStocks] = useState(stocks);
  const [filtered, setFiltered] = useState({ isFiltered: false, filter: "" });
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setFilteredStocks(stocks);
  }, [stocks]);

  // Sort stocks by name and Sector

  // Sort by Name
  const sortByName = (reverse = false) => {
    const sortedStocks = [...filteredStocks].sort((a, b) =>
      reverse ? b.name.localeCompare(a.name) : a.name.localeCompare(b.name)
    );
    setFilteredStocks(sortedStocks);
  };

  //Sort by Sector
  const sortBySector = (reverse = false) => {
    const sortedStocks = [...filteredStocks].sort((a, b) =>
      reverse
        ? b.sector.localeCompare(a.sector)
        : a.sector.localeCompare(b.sector)
    );
    setFilteredStocks(sortedStocks);
  };

  // Filter by stocks by sector

  const handleSectorFilter = (selectedSector) => {
    const filteredStocks =
      selectedSector === "All Sectors"
        ? stocks
        : stocks.filter((stock) => stock.sector === selectedSector);

    setFilteredStocks(filteredStocks);
    setFiltered({
      isFiltered: selectedSector !== "All Sectors",
      filter: filteredStocks,
    });
  };

  //TODO: Search stock by name or symbol

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    const filteredStocks = stocks.filter(
      (stock) =>
        stock.symbol.toLowerCase().includes(searchTerm) ||
        stock.name.toLowerCase().includes(searchTerm)
    );

    setFilteredStocks(filteredStocks);
  };

  return (
    <section>
      <StockListTableHead
        stocks={stocks}
        sortByName={sortByName}
        sortBySector={sortBySector}
        handleSectorFilter={handleSectorFilter}
      />

      {/* TODO: Add Search */}
      <div className="my-3">
        <Input
          value={searchTerm}
          onChange={handleSearch}
          placeholder={"Search by symbol or name"}
        />
      </div>

      {/* TODO: Add Table body */}
      <ul
        style={{ minHeight: "70vh" }}
        className="container container-md overflow-y-scroll"
      >
        {filteredStocks.map((stock) => (
          <li
            key={stock.symbol}
            className={`grid grid-cols-4 gap-2 items-center bg-slate-900 hover:bg-gray-300 text-white hover:text-gray-900 rounded-md px-4 py-2 border-b-2 border-gray-800 ${
              hoveredItem === stock.symbol ? "hovered" : ""
            }`}
            onMouseEnter={() => setHoveredItem(stock.symbol)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <div className="col-span-3 flex justify-between">
              <h4
                className="font-bold course-pointer bg-teal-500 hover:bg-slate-700 text-gray-100 py-1 px-2 rounded-md cursor-pointer"
                onClick={() => openStockWidget(stock.symbol)}
              >
                {stock.symbol}
              </h4>
              <h4 className="font-bold">{stock.name}</h4>
              <small className="text-slate-500">{stock.sector}</small>
            </div>
            <div className="col-span-1 flex justify-end">
              {hoveredItem === stock.symbol && (
                <>
                  <Button
                    classes={"bg-slate-800 hover:bg-slate-700 mr-1"}
                    onClick={() => {
                      const newName = prompt("Enter new name", stock.name);
                      const newSector = prompt(
                        "Enter new sector",
                        stock.sector
                      );
                      handleEditStock(stock.symbol, newName, newSector);
                    }}
                  >
                    <IoMdBrush size={20} />
                  </Button>
                  <Button
                    classes={"bg-red-800 hover:bg-red-700"}
                    onClick={() => handleRemoveStock(stock.symbol)}
                  >
                    <IoMdRemoveCircle size={20} />
                  </Button>
                </>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
