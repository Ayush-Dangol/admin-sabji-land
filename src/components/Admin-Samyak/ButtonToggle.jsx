import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

function ButtonT(props) {
  const [drop, setdrop] = useState(false);

  function show() {
    setdrop((prevValue) => !prevValue);
  }

  // window.onclick = function(event) {
  //     if (!event.target.matches('.drop')) {
  //       if(drop === true){
  //         show();
  //       }
  //     }
  // }

  function deleteClick() {
    props.deleteO(props.id);
  }

  return (
    <td className="no-border">
      <button className={`drop ${props.orderClass}`} onClick={show}>
        <BsThreeDotsVertical />
      </button>
      <div
        className="dropdown"
        style={drop ? { display: "flex" } : { display: "none" }}
      >
        <button className="drop-btn">Edit</button>
        <div className="drop-line"></div>
        <button className="drop-btn" onClick={props.showAdd}>
          View
        </button>
        <div className="drop-line"></div>
        <button className="drop-btn" onClick={deleteClick}>
          Delete
        </button>
      </div>
    </td>
  );
}

export default ButtonT;
