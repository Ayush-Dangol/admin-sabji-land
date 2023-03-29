import React from "react";
import ButtonT from "../ButtonToggle";
import { useState } from "react";

function Entry(props) {

    const [color, setColor] = useState(props.pStatus);

    const changeClass = (e) => {
        let val = (e.target.value)
        setColor(val);
    }


    return (

        <tr>
            <td>{props.id}</td>
            <td>{props.uname}</td>
            <td>{props.date}</td>
            <td>{props.amount}</td>
            <td>
                <select onChange={changeClass} value={props.pStatus} className={color} id="paymentS" >
                    <option value={"Paid"}>Paid</option>
                    <option value={"Unpaid"}>Unpaid</option>
                    <option value={"Refunded"}>Refunded</option>
                </select>
            </td>
            <td>
                <select className="boxed" id="orderS">
                    <option value={"Delivered"}>Pending</option>
                    <option value={"InProgress"}>In Progress</option>
                    <option value={"BeingDelivered"}>Being Delivered</option>
                    <option value={"Completed"}>Completed</option>
                    <option value={"Cancelled"}>Cancelled</option>
                </select>
            </td>
            <td>
                <select className="boxed" id="riderA">
                    <option value={"Paid"}>Paid</option>
                    <option value={"Unpaid"}>Unassigned</option>
                </select>
            </td>
            <ButtonT deleteO={props.deleteO} id={props.id} showAdd={props.showAdd} />
        </tr>

    );
}

export default Entry;