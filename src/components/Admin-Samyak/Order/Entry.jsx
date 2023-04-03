import React from "react";
import ButtonT from "../ButtonToggle";
import { useState } from "react";

function Entry(props) {
  const [pColor, setPColor] = useState(props.pStatus);
  const [oColor, setOColor] = useState(props.oStatus);
  const [rColor, setRColor] = useState(props.aRider);

  const changeClassP = (e) => {
    let val = e.target.value;
    setPColor(val);
  };

  const changeClassO = (e) => {
    let val = e.target.value;
    setOColor(val);
  };

  const changeClassR = (e) => {
    let val = e.target.value;
    setRColor(val);
  };

  return (
    <tr key={props.id}>
      <td>{props.id}</td>
      <td>{props.uname}</td>
      <td>{props.date}</td>
      <td>{props.amount}</td>
      <td>
        <select
          onChange={changeClassP}
          value={props.pStatus}
          className={pColor}
          id="paymentS"
        >
          <option value={"Paid"}>Paid</option>
          <option value={"Unpaid"}>Unpaid</option>
          <option value={"Refunded"}>Refunded</option>
        </select>
      </td>
      <td>
        <select
          onChange={changeClassO}
          value={props.oStatus}
          className={oColor}
          id="orderS"
        >
          <option value={"Completed"}>Completed</option>
          <option value={"InProgress"}>In Progress</option>
          <option value={"BeingDelivered"}>Being Delivered</option>
          <option value={"Pending"}>Pending</option>
          <option value={"Cancelled"}>Cancelled</option>
        </select>
      </td>
      <td>
        <select
          onChange={changeClassR}
          value={props.aRider}
          className={rColor}
          id="riderA"
        >
          <option value={"Paid"}>Paid</option>
          <option value={"Unassigned"}>Unassigned</option>
        </select>
      </td>
      <ButtonT
        deleteO={props.deleteO}
        id={props.id}
        showAdd={props.showAdd}
        orderClass="order-drop"
      />
    </tr>
  );
}

export default Entry;
