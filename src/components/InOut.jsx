import React from "react";
import "./InOut.css";

const InOut = () => {
  return (
    <div className="In-out-container white-card">
      <div className="In-out border-right">
        <h3>INCOME</h3>
        <h3 className="green-balance">$500.00</h3>
      </div>
      <div className="In-out">
        <h3>EXPENSE</h3>
        <h3 className="red-balance">$240.00</h3>
      </div>
    </div>
  );
};

export default InOut;
