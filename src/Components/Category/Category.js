import React from "react";
import Widget from "../Widget/Widget";
import "./Category.css"

const Category = ({ category, removeWidget }) => {
  return (
    <div className="category">
      <h5 className="cat-heading">{category.name}</h5>
      <div className="widget-box">
        {category.widgets.map((widget) => (
          <Widget
            
            key={widget.id}
            widget={widget}
            categoryId={category.id}
            removeWidget={removeWidget}
          />
        ))}
      </div>
    </div>
  );
};

export default Category;
