import React, { useState } from "react";
import Header from "./Components/Header/Header";
import Body from "./Components/Body/Body";
import SearchBar from "./Components/SearchBar/SearchBar";
import "./App.css"
function App() {
  const [data, setData] = useState({
    categories: [
      {
        id: 1,
        name: "CSPM Executive Dashboard",
        widgets: [
          { id: 101, name: "Widget 1", text: "Random text for Widget 1" },
          { id: 102, name: "Widget 2", text: "Random text for Widget 2" },
        ],
      },
      {
        id: 2,
        name: "CWPP Dashboard",
        widgets: [
          { id: 201, name: "Widget 3", text: "Random text for Widget 3" },
          { id: 202, name: "Widget 4", text: "Random text for Widget 4" },
        ],
      },
      {
        id: 3,
        name: "Registry Scan",
        widgets: [
          { id: 301, name: "Widget 4", text: "Random text for Widget 4" },
        ],
      },
    ],
  });

  const addWidget = (categoryId, widgetName, widgetText) => {
    setData((prevState) => {
      const updatedCategories = prevState.categories.map((category) => {
        if (category.id === categoryId) {
          const newWidget = {
            id: Date.now(),
            name: widgetName,
            text: widgetText,
          };
          return {
            ...category,
            widgets: [...category.widgets, newWidget],
          };
        }
        return category;
      });
      return { ...prevState, categories: updatedCategories };
    });
  };

  const removeWidget = (categoryId, widgetId) => {
    setData((prevState) => {
      const updatedCategories = prevState.categories.map((category) => {
        if (category.id === categoryId) {
          return {
            ...category,
            widgets: category.widgets.filter(
              (widget) => widget.id !== widgetId
            ),
          };
        }
        return category;
      });
      return { ...prevState, categories: updatedCategories };
    });
  };

  const searchWidgets = (query) => {
    setData((prevState) => {
      const filteredCategories = prevState.categories.map((category) => {
        return {
          ...category,
          widgets: category.widgets.filter((widget) =>
            widget.name.toLowerCase().includes(query.toLowerCase())
          ),
        };
      });
      return { ...prevState, categories: filteredCategories };
    });
  };

  return (
    <div className="App">
      <Header addWidget={addWidget} />
      <SearchBar onSearch={searchWidgets} />
      <Body data={data} removeWidget={removeWidget} />
    </div>
  );
}

export default App;
