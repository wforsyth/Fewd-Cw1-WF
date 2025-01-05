import React from "react";

const Checkbox = ({ isChecked, onToggle }) => {
  return (
    <div className="form-check">
      <input type="checkbox" className="form-check-input" checked={isChecked} onChange={onToggle}
      />
      <label className="form-check-label">
        Add to Personal Schedule
      </label>
    </div>
  );
};

export default Checkbox;