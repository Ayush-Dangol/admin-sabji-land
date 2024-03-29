import React from "react";

function Input(props) {
    return (
        <input className={props.class} title={props.title} accept={props.accept} type={props.type} placeholder={props.placeholder} onChange={props.onChange}></input>
    );
}

export default Input;