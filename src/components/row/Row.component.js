import React from "react";
import "./row.styles.scss";

export default function Row({ title, children }) {
  return (
    <div className="row">
      <div className="title">
        <h2>{title}</h2>
      </div>
      <div className="items">{children}</div>
    </div>
  );
}
