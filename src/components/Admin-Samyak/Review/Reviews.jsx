import React from "react";
import Top from "../Review/Top";
import Table from "./Table";

function Reviews() {
    return (
        <div className="main-container">
            <div className="order-content">
                <Top title="Reviews" />
                <Table />
            </div>
        </div>
    );
}

export default Reviews;