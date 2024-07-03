import { useState, useEffect } from "react";

import "./App.css";
import TodaysDate from "./components/TodaysDate";
import StockChart from "./components/StockChart";
import AddNewStock from "./components/AddNewStock";
import StockListHeader from "./components/StockListHeader";
import StockListTable from "./components/StockListTable";
function App() {
  const [openChart, setOpenChart] = useState("NQ1!");
  const [stocks, setStocks] = useState([]);
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-symbol-info.js";
    script.async = true;
    script.innerHTML = `
      
  {
  "symbol":"ES1!",
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
  }, []);

  return (
    <div className="container container-md mx-auto flex flex-col xl:flex-row gap-5 text-white bg-slate-900">
      <header className="flex flex-col mt-2">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold mb-4">Stock wishlist</h1>
          <TodaysDate />
        </div>
        <div className="tradingview-widget-container__widget bg-gray-100 rounded-md mb-2 max-h-80">
          Stock Details
        </div>
        <StockChart symbol={openChart} />
        <AddNewStock />
      </header>
      <main>
        {/* ADD Props to stock list header */}
        <StockListHeader />
        <StockListTable stocks={stocks} />
      </main>
    </div>
  );
}

export default App;
