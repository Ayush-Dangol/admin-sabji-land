import React, { useState } from "react";
import "../main.css";
import Top from "./Top";
import Table from "./Table";
import AddOrder from "./AddOrder";
import ViewOrder from "./OrderView";
import OrderView from "./OrderView";

function Order() {
  const [pop, setPop] = useState(false);
  const [vPop, setVPop] = useState(true);

  const [search, setSearch] = useState("");

  function showAdd() {
    setPop((prevValue) => !prevValue);
  }

  function showView() {
    setVPop((prevValue) => !prevValue);
  }

  return (
    <div className="main-container">
      <div className="order-content">
        <Top title="Order Details" showAdd={showAdd} setSearch={setSearch} />
        <Table search={search} showAdd={showView} />
      </div>
      <AddOrder pop={pop} showAdd={showAdd} />
      <ViewOrder pop={vPop} toggleV={showView} />
      <hr />
      <OrderView />
    </div>
  );
}

export default Order;
