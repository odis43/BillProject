import React from "react";
import Popup from "reactjs-popup";
import Bill_Card from "../Bill_Card/Bill_Card";
import "./Bill.css";

const Bill = () => {
  return (
    <div className="bill">
      <h2>The Bill Project</h2>
      <div className="Buttons">
        <button>U.S.A</button>
        <button>Canada</button>
      </div>
      <div>
        <table className="bill-table">
          <div style={{ alignItems: "center" }}>
            <h3>Country</h3>
          </div>

          <tbody>
            <tr>
              <td>
                <Bill_Card name="Bill 1" />
              </td>
              <td>
              <Bill_Card name="Bill 2" />
              </td>
            </tr>
            <tr>
              <td>
              <Bill_Card name="Bill 3" />
              </td>
              <td>
              <Bill_Card name="Bill 4" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Bill;
