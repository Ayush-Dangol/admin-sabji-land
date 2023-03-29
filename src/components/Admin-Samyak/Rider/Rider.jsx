import React, { useState } from "react";
import Top from "../Rider/Top";
import Table from "./Table";
import RiderAdd from "./RiderAdd";

function Employee() {
  // for changing the state of RiderAdd
  const [showAdd, setShowAdd] = useState(false);
  return (
    <div className="main-container">
      <div className="order-content">
        <Top
          title="Rider Details"
          click={() => {
            setShowAdd(true);
          }}
        />
        {showAdd ? (
          <RiderAdd
            click={() => {
              setShowAdd(false);
            }}
          />
        ) : (
          ""
        )}
        <Table />
      </div>
    </div>
  );
}

export default Employee;
