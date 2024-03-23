import React from "react";
import "./Filter.css"; // Подключаем файл со стилями

const Filter = ({ handleFilter }) => {
  return (
    <div className="filter-container">
      <input
        className="filter-input"
        onChange={handleFilter}
        type="text"
        placeholder="Search contacts..."
      />
    </div>
  );
};

export default Filter;
