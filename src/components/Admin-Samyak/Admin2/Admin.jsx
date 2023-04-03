import React, { useState } from "react";
import Top from "./Top";
import Table from "./Table";
import AddPopUp from "./AddPopUp";
import "./admin.css";

function Admin() {

    const [adminAdd, setAdminAdd] = useState(false);

    function showAdd() {
        setAdminAdd((prevValue) => !prevValue);
    }

    return (
        <>
            <div className="main-container">
                <div className="order-content">
                    <Top title="Admin" showAdd={showAdd} />
                    <Table />
                </div>
                <AddPopUp pop={adminAdd} showAdd={showAdd} />
            </div>
        </>
    );

}

export default Admin;