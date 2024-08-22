import React from 'react';
import "./Widget.css"
const Widget = ({ widget, categoryId, removeWidget }) => {
  return (
    <div className="widget">
      <h4 className='heading '>{widget.name}</h4>
      <p className='para'>{widget.text}</p>
      <button onClick={() => removeWidget(categoryId, widget.id)}>Remove</button>
    </div>
  );
};

export default Widget;