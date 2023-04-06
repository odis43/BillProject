import React, { useState } from "react";
import Popup from "reactjs-popup";
import Bill_Card from "../Bill_Card/Bill_Card";
import "./Bill.css";

const Bill = () => {
  const [country, setCountry] = useState(0); // 0 is Canada, 1 is USA

  const canadaBills = ["Bill 1", "Bill 2", "Bill 3", "Bill 4"];
  const usaBills = ["Bill A", "Bill B", "Bill C", "Bill D"];

  const bills = country === 0 ? canadaBills : usaBills;

  // Split bills into chunks of two
  const billChunks = bills.reduce(
    (acc, bill, index) =>
      index % 2 === 0 ? [...acc, [bill]] : [...acc.slice(0, -1), [...acc.slice(-1)[0], bill]],
    []
  );

  return (
    <div className="bill">
      <h2>The Bill Project</h2>
      <div className="Buttons">
        <button onClick={() => setCountry(1)}>U.S.A</button>
        <button onClick={() => setCountry(0)}>Canada</button>
      </div>
      <div>
        <table className="bill-table">
          <thead>
            <tr>
              <th colSpan="2">Country</th>
            </tr>
          </thead>
          <tbody>
            {billChunks.map((billRow, index) => (
              <tr key={index}>
                {billRow.map((billName, index) => (
                  <td key={index}>
                    <Bill_Card name={billName} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Bill;
