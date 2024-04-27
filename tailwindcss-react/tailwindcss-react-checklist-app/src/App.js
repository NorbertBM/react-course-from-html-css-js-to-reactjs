import "./App.css";
import React, { useState, useEffect } from "react";
import Checklist from "./components/Checklist";
import Button from "./utility/components/Button";
import Title from "./components/Title";
// Util Function
import { generateRandomNum } from "../src/utility/func/generateRandomNum";
function App() {
  const [checklist, setChecklist] = useState([
    // { id: 1, text: "item 1" },
    // { id: 2, text: "item 2" },
    // { id: 3, text: "item 3" },
  ]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/data.json");
        const data = await response.json();
        data.forEach((item) => {
          item.id = generateRandomNum(1, 1000);
        });
        setChecklist(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    setTimeout(() => {
      fetchData();
    }, 3000);
  }, []);

  // Toggle item completed

  const handleToggleCompleted = (id) => {
    setChecklist((prevChecklist) =>
      prevChecklist.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed,
            completedAt: item.completed
              ? null
              : new Date().toISOString().split("T")[0],
          };
        }
        return item;
      })
    );
  };

  const handleCheckAll = () => {
    setChecklist((prevChecklist) =>
      prevChecklist.map((item) => {
        if (!item.completedAt) {
          return {
            ...item,
            completed: true,
            completedAt: new Date().toISOString().split("T")[0],
          };
        }
        return item;
      })
    );

    if (uncheckedItems.length === 0) {
      setChecklist((prevChecklist) =>
        prevChecklist.map((item) => {
          return { ...item, completed: false, completedAt: null };
        })
      );
    }
  };

  const uncheckedItems = checklist.filter((item) => !item.completed);
  return (
    <div className="h-screen relative bg-white text-slate-900">
      {/* TODO:  Title comp */}
      <Title text={"Complex checklist"} />
      <div className="container  px-2 mx-auto max-w-screen-md">
        {/* TODO:  Dark mode toggler */}
        {/* TODO:  Show alerts */}

        {/*  TODO:  Header */}
        <header>
          {/* TODO:  Add new item */}

          {/* TODO: Load List */}
          {/* TODO: Actions  comp*/}
          {/* TODO: Check & uncheck button */}
          <Button
            className={uncheckedItems.length === 0 ? "danger" : "success"}
            onClick={handleCheckAll}
          >
            {uncheckedItems.length === 0 ? "Uncheck all" : "Check all"}
          </Button>
          {/* Save Data as JSON */}
        </header>
        {/* TODO: Create the checklist with loading */}
        <Checklist
          checklist={checklist}
          handleToggleCompleted={handleToggleCompleted}
        />
      </div>
    </div>
  );
}

export default App;
