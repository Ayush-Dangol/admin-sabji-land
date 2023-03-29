import React from "react";

function Input(props) {
    return (
        <input class={props.class} accept={props.accept} type={props.type} placeholder={props.placeholder} onChange={props.onChange}></input>
    );
}

export default Input;