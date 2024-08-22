import React, { useState } from "react";
import AddWidgetForm from "../AddWidgetForm/AddWidgetForm";
import "./Header.css"

const Header = ({ addWidget }) => {
  const [showForm, setShowForm] = useState(false);

  const handleAddWidgetClick = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="header">
      <h4>CNAPP Dashboard</h4>
      <button className="add-btn" onClick={handleAddWidgetClick}>Add Widget +</button>
      {showForm && (
        <div className="addWidgetOverlay show">
        <AddWidgetForm 
          addWidget={addWidget}
          closeForm={() => setShowForm(false)}
        />
        </div>
      )}
    </div>
  );
};

export default Header;
