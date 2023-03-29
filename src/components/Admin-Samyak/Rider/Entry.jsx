import React from "react";
import ButtonT from "../ButtonToggle";

function Entry(props){
    return(
            <tr>
                <td>{props.id}</td>
                <td><img src={props.image} alt="" height={"100px"} width={"100px"} /></td>
                <td>{props.uname}</td>
                <td>{props.title}</td>
                <td>{props.contact}</td>
                <td>{props.address}</td>
                <td>{props.email}</td>
                <ButtonT />
            </tr>
    );
}

export default Entry;