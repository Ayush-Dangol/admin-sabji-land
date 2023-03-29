import React from "react";
import Top from "../Review/Top";
import Table from "./Table";

function Reviews(){
    return(
        <div className="main-container">
            <Top 
                title="Reviews"
            />
            <Table />

        </div>
    );
}

export default Reviews;