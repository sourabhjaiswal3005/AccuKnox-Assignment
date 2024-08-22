import React from "react";
import Category from "../Category/Category";
import "./Body.css"

const Body = ({ data, removeWidget }) => {
  return (
    <div className="body">
      {data.categories.map((category) => (
        <Category
          key={category.id}
          category={category}
          removeWidget={removeWidget}
        />
      ))}
    </div>
  );
};

export default Body;
