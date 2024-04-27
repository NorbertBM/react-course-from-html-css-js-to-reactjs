import "./App.css";
import React, { useState, useEffect } from "react";
import Checklist from "./components/Checklist";
import Button from "./utility/components/Button";
import Title from "./components/Title";
// Util Function
import { generateRandomNum } from "../src/utility/func/generateRandomNum";
import Alert from "./utility/components/Alert";
import NewItemForm from "./components/NewItemForm";

import LoadData from "./components/LoadData";
import { IoSunny, IoMoon } from "react-icons/io5";
function App() {
  // Toggle Dark mode

  const [dark, setDark] = useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  const [checklist, setChecklist] = useState([
    // { id: 1, text: "item 1" },
    // { id: 2, text: "item 2" },
    // { id: 3, text: "item 3" },
  ]);

  // Alert State

  const [alert, setAlert] = useState({
    showAlert: false,
    message: "alert message",
    type: "",
  });
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

  // Hide alert
  useEffect(() => {
    alert.showAlert &&
      setTimeout(() => {
        setAlert({ ...alert, showAlert: false });
      }, 3000);
  }, [alert.showAlert]);

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
  // Check all items
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

  // Delete item form list

  const handleDeleteItem = (id, index) => {
    if (
      window.confirm(`Are you sure you want to delete item number ${index} ?`)
    ) {
      setChecklist((prevChecklist) =>
        prevChecklist.filter((item) => item.id !== id)
      );
      setAlert({
        showAlert: true,
        message: `Item number: ${index} was deleted!`,
        type: "success",
      });
    }
  };

  // Edit item text in list
  const handleEditItemText = (id, text, index) => {
    setChecklist((prevChecklist) =>
      prevChecklist.map((item) => {
        if (item.id === id) {
          return { ...item, text };
        }
        // setAlert({
        //   showAlert: true,
        //   message: `Item number: ${index} was Edited!`,
        //   type: "waring",
        // });
        return item;
      })
    );
  };

  // Add new item to the list

  const handleAddNewItem = (text) => {
    if (!text.trim()) {
      setAlert({
        showAlert: true,
        message: "Please enter a valid text",
        type: "error",
      });
      return;
    }

    const newItem = {
      id: generateRandomNum(1, 1000),
      text,
      completed: false,
      addedAt: new Date().toISOString().split("T")[0],
    };

    setChecklist((prevChecklist) => [...prevChecklist, newItem]);
    setAlert({
      showAlert: true,
      message: "Item added to the list",
      type: "success",
    });
  };

  // Save data to database

  const saveDataAsJSON = () => {
    const data = JSON.stringify(checklist);
    const timestamp = new Date().toISOString().replace(/:/g, "-");
    const filename = `data_${timestamp}.json`;
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Load new data form database

  const handleLoadData = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const data = JSON.parse(event.target.result);
      setChecklist(data);
    };
    reader.readAsText(file);

    setAlert({
      showAlert: true,
      message: "New data loaded successfully",
      type: "warning",
    });
  };
  return (
    <div className="h-screen relative bg-white text-slate-900 dark:bg-slate-800 dark:text-white">
      {/* TODO:  Title comp */}
      <Title text={"Complex checklist"} />
      <div className="container  px-2 mx-auto max-w-screen-md">
        {/* TODO:  Dark mode toggler */}
        <button
          onClick={() => darkModeHandler()}
          className="absolute top-5 right-5 dark:bg-slate-500 bg-slate-500 text-white p-2 rounded-full shadow-md hover:bg-slate-600 hover:text-white transition-all duration-200 ease-in-out"
        >
          {!dark ? <IoSunny /> : <IoMoon />}
        </button>
        {/* TODO:  Show alerts */}
        {alert.showAlert && <Alert message={alert.message} type={alert.type} />}
        {/*  TODO:  Header */}
        <header className="flex gap-5 w-full justify-between mb-16">
          <section className="flex gap-3 flex-col">
            {/* TODO:  Add new item */}
            <NewItemForm onAddItem={handleAddNewItem} />
            {/* TODO: Load List */}
            <LoadData handleLoadData={handleLoadData} />
          </section>
          {/* TODO: Actions  comp*/}
          {/* TODO: Check & uncheck button */}
          <Button
            className={uncheckedItems.length === 0 ? "danger" : "success"}
            onClick={handleCheckAll}
          >
            {uncheckedItems.length === 0 ? "Uncheck all" : "Check all"}
          </Button>
          {/* Save Data as JSON */}
          <Button onClick={saveDataAsJSON}>Save Data</Button>
        </header>
        {/* TODO: Create the checklist with loading */}
        <Checklist
          checklist={checklist}
          handleToggleCompleted={handleToggleCompleted}
          handleDeleteItem={handleDeleteItem}
          handleEditItemText={handleEditItemText}
        />
      </div>
    </div>
  );
}

export default App;
