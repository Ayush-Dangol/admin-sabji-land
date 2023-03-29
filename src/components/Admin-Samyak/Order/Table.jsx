import React from "react";
import Entry from "./Entry";
import data from "./orderData";




function Table(props) {

    function deleteOrder(index) {
        return data.filter((dataTerm) => {
            return dataTerm.id != index;
        })
    }

    function createEntry(dataTerm) {
        return (
            <Entry
                key={dataTerm.id}
                id={dataTerm.id}
                uname={dataTerm.username}
                date={dataTerm.date}
                amount={dataTerm.amount}
                pStatus={dataTerm.paymentS}
                oStatus={dataTerm.orderS}
                aRider={dataTerm.riderA}
                deleteO={deleteOrder}
                showAdd={props.showAdd}
            />
        );
    }

    return (
        <div className="table-container">
            <table>
                <thead>
                    <tr className="head-row">
                        <th>#Order ID<button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" fill="none"><path fill="#737373" d="M8.025 8.936 4.85 12.768V.81a.3.3 0 0 0-.6 0V12.75L1.075 8.936a.3.3 0 0 0-.462.383l3.714 4.463a.301.301 0 0 0 .231.108c.09 0 .174-.04.231-.108l3.699-4.463a.3.3 0 0 0-.463-.383Zm7.362-4.255L11.674.218a.3.3 0 0 0-.462 0L7.514 4.681a.3.3 0 0 0 .462.383l3.175-3.832V13.19a.3.3 0 1 0 .6 0V1.248l3.175 3.816a.297.297 0 0 0 .422.04.3.3 0 0 0 .04-.423Z" /></svg></button></th>
                        <th>User Name<button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" fill="none"><path fill="#737373" d="M8.025 8.936 4.85 12.768V.81a.3.3 0 0 0-.6 0V12.75L1.075 8.936a.3.3 0 0 0-.462.383l3.714 4.463a.301.301 0 0 0 .231.108c.09 0 .174-.04.231-.108l3.699-4.463a.3.3 0 0 0-.463-.383Zm7.362-4.255L11.674.218a.3.3 0 0 0-.462 0L7.514 4.681a.3.3 0 0 0 .462.383l3.175-3.832V13.19a.3.3 0 1 0 .6 0V1.248l3.175 3.816a.297.297 0 0 0 .422.04.3.3 0 0 0 .04-.423Z" /></svg></button></th>
                        <th>Date<button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" fill="none"><path fill="#737373" d="M8.025 8.936 4.85 12.768V.81a.3.3 0 0 0-.6 0V12.75L1.075 8.936a.3.3 0 0 0-.462.383l3.714 4.463a.301.301 0 0 0 .231.108c.09 0 .174-.04.231-.108l3.699-4.463a.3.3 0 0 0-.463-.383Zm7.362-4.255L11.674.218a.3.3 0 0 0-.462 0L7.514 4.681a.3.3 0 0 0 .462.383l3.175-3.832V13.19a.3.3 0 1 0 .6 0V1.248l3.175 3.816a.297.297 0 0 0 .422.04.3.3 0 0 0 .04-.423Z" /></svg></button></th>
                        <th>Amount<button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" fill="none"><path fill="#737373" d="M8.025 8.936 4.85 12.768V.81a.3.3 0 0 0-.6 0V12.75L1.075 8.936a.3.3 0 0 0-.462.383l3.714 4.463a.301.301 0 0 0 .231.108c.09 0 .174-.04.231-.108l3.699-4.463a.3.3 0 0 0-.463-.383Zm7.362-4.255L11.674.218a.3.3 0 0 0-.462 0L7.514 4.681a.3.3 0 0 0 .462.383l3.175-3.832V13.19a.3.3 0 1 0 .6 0V1.248l3.175 3.816a.297.297 0 0 0 .422.04.3.3 0 0 0 .04-.423Z" /></svg></button></th>
                        <th>Payment Status<button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" fill="none"><path fill="#737373" d="M8.025 8.936 4.85 12.768V.81a.3.3 0 0 0-.6 0V12.75L1.075 8.936a.3.3 0 0 0-.462.383l3.714 4.463a.301.301 0 0 0 .231.108c.09 0 .174-.04.231-.108l3.699-4.463a.3.3 0 0 0-.463-.383Zm7.362-4.255L11.674.218a.3.3 0 0 0-.462 0L7.514 4.681a.3.3 0 0 0 .462.383l3.175-3.832V13.19a.3.3 0 1 0 .6 0V1.248l3.175 3.816a.297.297 0 0 0 .422.04.3.3 0 0 0 .04-.423Z" /></svg></button></th>
                        <th>Order Status<button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" fill="none"><path fill="#737373" d="M8.025 8.936 4.85 12.768V.81a.3.3 0 0 0-.6 0V12.75L1.075 8.936a.3.3 0 0 0-.462.383l3.714 4.463a.301.301 0 0 0 .231.108c.09 0 .174-.04.231-.108l3.699-4.463a.3.3 0 0 0-.463-.383Zm7.362-4.255L11.674.218a.3.3 0 0 0-.462 0L7.514 4.681a.3.3 0 0 0 .462.383l3.175-3.832V13.19a.3.3 0 1 0 .6 0V1.248l3.175 3.816a.297.297 0 0 0 .422.04.3.3 0 0 0 .04-.423Z" /></svg></button></th>
                        <th>Assign Rider<button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" fill="none"><path fill="#737373" d="M8.025 8.936 4.85 12.768V.81a.3.3 0 0 0-.6 0V12.75L1.075 8.936a.3.3 0 0 0-.462.383l3.714 4.463a.301.301 0 0 0 .231.108c.09 0 .174-.04.231-.108l3.699-4.463a.3.3 0 0 0-.463-.383Zm7.362-4.255L11.674.218a.3.3 0 0 0-.462 0L7.514 4.681a.3.3 0 0 0 .462.383l3.175-3.832V13.19a.3.3 0 1 0 .6 0V1.248l3.175 3.816a.297.297 0 0 0 .422.04.3.3 0 0 0 .04-.423Z" /></svg></button></th>
                        <th>    </th>
                    </tr>
                </thead>
                <tbody>{data.map(createEntry)}</tbody>
            </table>
        </div>
    );
}

export default Table;