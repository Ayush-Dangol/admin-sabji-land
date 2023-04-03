import React from "react";
import Input from "./Input";
import oData from "./addOrderData";
import "./addOrder.css";

function AddOrder(props) {
    return (
        <div className="pop-container" style={props.pop ? { display: "block" } : { display: "none" }}>
            <div className="product-item">
                {/* <div className="product-top"> */}
                <div className="heading">Add Order</div>
                <div className="close-btn"><button onClick={props.showAdd}><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none"><path fill="#777" d="M11 .5C5.15.5.5 5.15.5 11S5.15 21.5 11 21.5 21.5 16.85 21.5 11 16.85.5 11 .5Zm4.05 15.75L11 12.2l-4.05 4.05-1.2-1.2L9.8 11 5.75 6.95l1.2-1.2L11 9.8l4.05-4.05 1.2 1.2L12.2 11l4.05 4.05-1.2 1.2Z" /></svg></button></div>
                {/* </div> */}

                <div className="product-content">
                    <div className="left">
                        <form>
                            <label>Username</label>
                            <select value="John Cena"><option>John Cena</option></select>
                            <label>Payment Method</label>
                            <select></select>
                            <label>Delivery Status</label>
                            <select></select>
                            <label>Payment Status</label>
                            <select></select>
                            <label>Rider</label>
                            <select></select>
                            <div className="save-button"><button>Save</button></div>

                        </form>
                    </div>
                    <div className="right">
                        <label>Product</label>
                        <div className="search-add">
                            <div className="search-product"><Input type="text" placeholder="Search Product" /></div>
                            <div className="add-button"><button>Add</button></div>
                        </div>
                        <div className="product-table">
                            <table>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Items</th>
                                        <th>Description</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Sub total</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {oData.map((dataT) => {
                                        return (
                                            <tr>
                                                <td>{dataT.id}</td>
                                                <td><img src="{dataT.item}" alt="" height="100px" width="100px" /></td>
                                                <td>
                                                    <div className="desc-col">
                                                        <div>{dataT.description}</div>
                                                        <div>IN STOCK</div>
                                                        <div>Add to wishlist</div>
                                                    </div>
                                                </td>
                                                <td>Rs. {dataT.price}</td>
                                                <td>
                                                    <div className="qty-col">
                                                        <button className="mbtn">-</button>
                                                        <span>{dataT.qty}</span>
                                                        <button className="pbtn">+</button>
                                                    </div>
                                                </td>
                                                <td>Rs. {dataT.subtotal}</td>
                                                <td className="trashcan"><button><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none"><path stroke="#FF3434" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.984 6.133h18M19.984 6.133v14a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2v-14m3 0v-2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M10.984 11.133v6M14.984 11.133v6" /></svg></button></td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddOrder;