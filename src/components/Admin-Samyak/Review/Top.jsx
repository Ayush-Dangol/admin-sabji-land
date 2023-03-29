import React from "react";
import Input from "../Order/Input";
import { FaSearch } from 'react-icons/fa';

function Top(props) {
    return (
        <div className="top">
            <div className="title">{props.title}</div>
            <div className="sort">
                <div className="search"><div className="icon"><FaSearch /></div><div><Input type="text" placeholder="Search for order ID, customer name, order status" /></div></div>
                <div className="sort-drop"><select>
                    <option value="" disabled selected>Sort By</option>
                    <option>Price Up</option>
                </select></div>
            </div>
            <div className="paginate">1-50 of 100</div>
        </div>
    );
}

export default Top;