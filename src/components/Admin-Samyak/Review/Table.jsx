import React from "react";
import Entry from "./Entry";
import data from "./reviewData";

function createEntry(messageTerm){
    return(
        <Entry
            key = {messageTerm.id}
            id = {messageTerm.id}
            uname = {messageTerm.username}
            date = {messageTerm.date}
            message = {messageTerm.message}
        />
    );
}

function Table(){
    return(
        <div className="table-container">
            <table>
                <tr>
                    <th>Order ID</th>
                    <th>User Name</th>
                    <th>Date</th>
                    <th style={{width: "35%"}}>Message</th>
                </tr>
                {data.map(createEntry)}
            </table>
        </div>
    );
}

export default Table;