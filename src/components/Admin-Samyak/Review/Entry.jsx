import React from "react";
import ButtonT from "../ButtonToggle";

function Entry(props){
    return(
            <tr>
                <td>{props.id}</td>
                <td>{props.uname}</td>
                <td>{props.date}</td>
                <td>{props.message}</td>
                <ButtonT />
            </tr>
    );
}

export default Entry;