import { useState, useEffect, useRef } from "react";

import "./App.css";
import TodaysDate from "./components/TodaysDate";
import StockChart from "./components/StockChart";
import AddNewStock from "./components/AddNewStock";
import StockListHeader from "./components/StockListHeader";
import StockListTable from "./components/StockListTable";
function App() {
  const [openChart, setOpenChart] = useState("NQ1!");
  const [stocks, setStocks] = useState([]);
  const [newStockSymbol, setNewStockSymbol] = useState("");
  const [newStockName, setNewStockName] = useState("");
  const [newStockSector, setNewStockSector] = useState("");

  const inputRef = useRef(null);

  const stockWidgetRef = useRef(null);

  // Load and Save Stocks list to local storage
  // Load
  useEffect(() => {
    const savedStocks = localStorage.getItem("stocksList");

    if (savedStocks) {
      setStocks(JSON.parse(savedStocks));
    }
  }, []);

  // Save

  useEffect(() => {
    if (stocks.length > 0) {
      localStorage.setItem("stocksList", JSON.stringify(stocks));
    }
  }, [stocks]);

  // Save and Load from local Database

  const saveStockListToJSON = () => {
    const data = JSON.stringify(stocks, null, 2);
    const blob = new Blob([data], { type: "application/json" });

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "stocks.json";
    a.click();
  };
  // Add new Stock to the list

  const handleAddStock = () => {
    if (
      newStockSymbol.trim() !== "" &&
      newStockName.trim() !== "" &&
      newStockSector.trim() !== ""
    ) {
      // convert symbol to uppercase

      const symbol = newStockSymbol.toLocaleUpperCase();
      // Check if stock already exists in the list
      if (stocks.some((stock) => stock.symbol === symbol)) {
        alert(`${symbol} already exists in the list!`);
        // Refocus on input
        inputRef.current.focus();
      } else {
        setStocks([
          ...stocks,
          {
            symbol,
            name: newStockName,
            sector: newStockSector,
          },
        ]);

        // Reset inputs
        setNewStockSymbol("");
        setNewStockName("");
        setNewStockSector("");
      }
    } else {
      alert("Please fill all the fields!");
    }
  };
  // Edit Stock

  const handleEditStock = (stockSymbol, newName, newSector) => {
    const updatedStocks = stocks.map((stock) => {
      if (stock.symbol === stockSymbol) {
        return {
          ...stock,
          symbol: stockSymbol,
          name: newName || stock.name,
          sector: newSector || stock.sector,
        };
      }
      return stock;
    });
    setStocks(updatedStocks);
  };

  // Remove Stock from list

  const handleRemoveStock = (stockSymbol) => {
    if (
      window.confirm(
        `Are you sure you want to remove this stock with Symbol: ${stockSymbol}`
      )
    ) {
      const updatedStocks = stocks.filter(
        (stock) => stock.symbol !== stockSymbol
      );
      setStocks(updatedStocks);
    }
  };

  // Open selected stock details and chart widget

  const openStockWidget = (symbol) => {
    stockWidgetRef.current.scrollIntoView({ behavior: "smooth" });
    setOpenChart(symbol);
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-symbol-info.js";
    script.async = true;
    script.innerHTML = `
      
  {
  "symbol":"${openChart}",
  "width": "100%",
  "locale": "en",
  "colorTheme": "light",
  "isTransparent": true
  }
    `;
    const container = document.querySelector(
      ".tradingview-widget-container__widget"
    );
    if (container) {
      container.innerHTML = "";
      container.appendChild(script);
    }
  }, [openChart]);

  return (
    <div className="container container-md mx-auto flex flex-col xl:flex-row gap-5 text-white bg-slate-900">
      <header className="flex flex-col mt-2">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold mb-4">Stock wishlist</h1>
          <TodaysDate />
        </div>
        <div
          ref={stockWidgetRef}
          className="tradingview-widget-container__widget bg-gray-100 rounded-md mb-2 max-h-80"
        ></div>
        <StockChart symbol={openChart} />
        <AddNewStock
          newStockName={newStockName}
          setNewStockName={setNewStockName}
          newStockSymbol={newStockSymbol}
          setNewStockSymbol={setNewStockSymbol}
          inputRef={inputRef}
          newStockSector={newStockSector}
          setNewStockSector={setNewStockSector}
          handleAddStock={handleAddStock}
        />
      </header>
      <main>
        {/* ADD Props to stock list header */}
        <StockListHeader
          saveStockListToJSON={saveStockListToJSON}
          setStocks={setStocks}
        />
        <StockListTable
          stocks={stocks}
          handleEditStock={handleEditStock}
          handleRemoveStock={handleRemoveStock}
          openStockWidget={openStockWidget}
        />
      </main>
    </div>
  );
}

export default App;
