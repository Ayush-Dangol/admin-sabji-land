import React, { useState } from "react";
import "../main.css";
import Top from "./Top";
import Table from "./Table";
import AddOrder from "./AddOrder";
import ViewOrder from "./OrderView";


function Order() {

    const [pop, setPop] = useState(false);
    const [vPop, setVPop] = useState(true);

    function showAdd() {
        setPop((prevValue) => !prevValue);
    }

    function showView() {
        setVPop((prevValue) => !prevValue);
    }

    return (
        <div className="main-container">
            <div className="order-content">
                <Top title="Order Details" showAdd={showAdd} />
                <Table showAdd={showView} />
            </div>
            <AddOrder pop={pop} showAdd={showAdd} />
            <ViewOrder pop={vPop} toggleV={showView} />
        </div>
    );
}

export default Order;