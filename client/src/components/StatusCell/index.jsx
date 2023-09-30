import React from "react";
import "./index.css";

import { STATUSES } from "../../data";

function StatusCell({ getValue, row, column, table }) {
  const { name, color } = getValue() || {};
  const { updateData } = table.options.meta;

  return (
    <div
      className="menu"
      style={{ backgroundColor: color || "transparent", color: "#1A202C" }}
    >
      <div className="menu-btn">{name ? <p>{name}</p> : null}</div>
      <div className="menu-list">
        <div
          className="menu-item"
          onClick={() => updateData(row.index, column.id, null)}
        >
          <div className="colorIcon" style={{ backgroundColor: "red" }}></div>
          None
        </div>
        {STATUSES.map((status) => (
          <div
            className="menu-item"
            onClick={() => updateData(row.index, column.id, status)}
            key={status.id}
          >
            <div
              className="colorIcon"
              style={{ backgroundColor: status.color }}
            ></div>
            {status.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default StatusCell;
