import React, { useState } from 'react';
import "./AddWidgetForm.css"
const AddWidgetForm = ({ addWidget, closeForm }) => {
  const [widgetName, setWidgetName] = useState("");
  const [widgetText, setWidgetText] = useState("");
  const [selectedCategoryId, setSelectedCategoryId] = useState("");

  const categories = [
    { id: 1, name: "CSPM Executive Dashboard" },
    { id: 2, name: "CWPP Dashboard" },
    { id: 3, name: "Registry Scan" }
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (widgetName && widgetText && selectedCategoryId ) {
      addWidget(parseInt(selectedCategoryId), widgetName, widgetText);
      setWidgetName("");
      setWidgetText("");
      setSelectedCategoryId("");
      closeForm();
    } else {
      console.error("Please fill in all fields and select a category.");
    }
  };

  return (
    <div className="addWidgetForm">
      <h4>Add Widget</h4>
      <select
        value={selectedCategoryId}
        onChange={(e) => setSelectedCategoryId(e.target.value)}
        required
      >
        <option value="" disabled>Select a Category</option>
        {categories.map(category => (
          <option key={category.id} value={category.id}>{category.name}</option>
        ))}
      </select>

      <form onSubmit={handleFormSubmit} className='add-widget-form'>
        <input
          type="text"
          value={widgetName}
          onChange={(e) => setWidgetName(e.target.value)}
          placeholder="Widget Name"
          required
        />
        <input
          type="text"
          value={widgetText}
          onChange={(e) => setWidgetText(e.target.value)}
          placeholder="Widget Text"
          required
        />

        <button type="submit">Add Widget</button>
        <button type="button" onClick={closeForm}>Cancel</button>
      </form>
    </div>
  );
};

export default AddWidgetForm;