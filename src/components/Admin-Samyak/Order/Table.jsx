import React, { useState, useEffect } from "react";
import Entry from "./Entry";
import dataO from "./orderData";

function Table(props) {
  const [data, setData] = useState([]);
  const [order, setOrder] = useState("ASC");
  const url = `http://localhost:4007/dataO`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
        console.log(data);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  function deleteOrder(index) {
    return data.filter((dataTerm) => {
      return dataTerm.id !== index;
    });
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

  const sorting = (col) => {
    if (order === "ASC") {
      const sorted = [...data].sort((a, b) => {
        const acol = a[col].toLowerCase();
        const bcol = b[col].toLowerCase();
        return acol > bcol ? 1 : -1;
      });
      setData(sorted);
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...data].sort((a, b) => {
        const acol = a[col].toLowerCase();
        const bcol = b[col].toLowerCase();
        return acol < bcol ? 1 : -1;
      });
      setData(sorted);
      setOrder("ASC");
    }
  };

  const sortingNumb = (col) => {
    if (order === "ASC") {
      const sorted = [...data].sort((a, b) => {
        // const acol = a[col];
        // const bcol = b[col];
        // return acol > bcol ? a - b : b - a;
        return a[col] - b[col];
      });
      setData(sorted);
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...data].sort((a, b) => {
        // const acol = a[col];
        // const bcol = b[col];
        // return acol < bcol ? a - b : b - a;
        return b[col] - a[col];
      });
      setData(sorted);
      setOrder("ASC");
    }
  };

  const sortingDate = (col) => {
    const sorted = [...data].sort((a, b) => {
      const acol = new Date(a[col].date);
      const bcol = new Date(b[col].date);
      return acol - bcol;
    });
    setData(sorted);
  };

  console.log(data);
  return (
    <div className="admin-tableContainer">
      <table>
        <thead>
          <tr className="table-row">
            <th>
              #Order ID
              <button onClick={() => sortingNumb("id")}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="14"
                  fill="none"
                >
                  <path
                    fill="#737373"
                    d="M8.025 8.936 4.85 12.768V.81a.3.3 0 0 0-.6 0V12.75L1.075 8.936a.3.3 0 0 0-.462.383l3.714 4.463a.301.301 0 0 0 .231.108c.09 0 .174-.04.231-.108l3.699-4.463a.3.3 0 0 0-.463-.383Zm7.362-4.255L11.674.218a.3.3 0 0 0-.462 0L7.514 4.681a.3.3 0 0 0 .462.383l3.175-3.832V13.19a.3.3 0 1 0 .6 0V1.248l3.175 3.816a.297.297 0 0 0 .422.04.3.3 0 0 0 .04-.423Z"
                  />
                </svg>
              </button>
            </th>
            <th>
              User Name
              <button onClick={() => sorting("username")}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="14"
                  fill="none"
                >
                  <path
                    fill="#737373"
                    d="M8.025 8.936 4.85 12.768V.81a.3.3 0 0 0-.6 0V12.75L1.075 8.936a.3.3 0 0 0-.462.383l3.714 4.463a.301.301 0 0 0 .231.108c.09 0 .174-.04.231-.108l3.699-4.463a.3.3 0 0 0-.463-.383Zm7.362-4.255L11.674.218a.3.3 0 0 0-.462 0L7.514 4.681a.3.3 0 0 0 .462.383l3.175-3.832V13.19a.3.3 0 1 0 .6 0V1.248l3.175 3.816a.297.297 0 0 0 .422.04.3.3 0 0 0 .04-.423Z"
                  />
                </svg>
              </button>
            </th>
            <th>
              Date
              <button onClick={() => sortingDate("date")}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="14"
                  fill="none"
                >
                  <path
                    fill="#737373"
                    d="M8.025 8.936 4.85 12.768V.81a.3.3 0 0 0-.6 0V12.75L1.075 8.936a.3.3 0 0 0-.462.383l3.714 4.463a.301.301 0 0 0 .231.108c.09 0 .174-.04.231-.108l3.699-4.463a.3.3 0 0 0-.463-.383Zm7.362-4.255L11.674.218a.3.3 0 0 0-.462 0L7.514 4.681a.3.3 0 0 0 .462.383l3.175-3.832V13.19a.3.3 0 1 0 .6 0V1.248l3.175 3.816a.297.297 0 0 0 .422.04.3.3 0 0 0 .04-.423Z"
                  />
                </svg>
              </button>
            </th>
            <th>
              Amount
              <button onClick={() => sortingNumb("amount")}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="14"
                  fill="none"
                >
                  <path
                    fill="#737373"
                    d="M8.025 8.936 4.85 12.768V.81a.3.3 0 0 0-.6 0V12.75L1.075 8.936a.3.3 0 0 0-.462.383l3.714 4.463a.301.301 0 0 0 .231.108c.09 0 .174-.04.231-.108l3.699-4.463a.3.3 0 0 0-.463-.383Zm7.362-4.255L11.674.218a.3.3 0 0 0-.462 0L7.514 4.681a.3.3 0 0 0 .462.383l3.175-3.832V13.19a.3.3 0 1 0 .6 0V1.248l3.175 3.816a.297.297 0 0 0 .422.04.3.3 0 0 0 .04-.423Z"
                  />
                </svg>
              </button>
            </th>
            <th>
              Payment Status
              <button onClick={() => sorting("paymentS")}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="14"
                  fill="none"
                >
                  <path
                    fill="#737373"
                    d="M8.025 8.936 4.85 12.768V.81a.3.3 0 0 0-.6 0V12.75L1.075 8.936a.3.3 0 0 0-.462.383l3.714 4.463a.301.301 0 0 0 .231.108c.09 0 .174-.04.231-.108l3.699-4.463a.3.3 0 0 0-.463-.383Zm7.362-4.255L11.674.218a.3.3 0 0 0-.462 0L7.514 4.681a.3.3 0 0 0 .462.383l3.175-3.832V13.19a.3.3 0 1 0 .6 0V1.248l3.175 3.816a.297.297 0 0 0 .422.04.3.3 0 0 0 .04-.423Z"
                  />
                </svg>
              </button>
            </th>
            <th>
              Order Status
              <button onClick={() => sorting("orderS")}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="14"
                  fill="none"
                >
                  <path
                    fill="#737373"
                    d="M8.025 8.936 4.85 12.768V.81a.3.3 0 0 0-.6 0V12.75L1.075 8.936a.3.3 0 0 0-.462.383l3.714 4.463a.301.301 0 0 0 .231.108c.09 0 .174-.04.231-.108l3.699-4.463a.3.3 0 0 0-.463-.383Zm7.362-4.255L11.674.218a.3.3 0 0 0-.462 0L7.514 4.681a.3.3 0 0 0 .462.383l3.175-3.832V13.19a.3.3 0 1 0 .6 0V1.248l3.175 3.816a.297.297 0 0 0 .422.04.3.3 0 0 0 .04-.423Z"
                  />
                </svg>
              </button>
            </th>
            <th>
              Assign Rider
              <button onClick={() => sorting("riderA")}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="14"
                  fill="none"
                >
                  <path
                    fill="#737373"
                    d="M8.025 8.936 4.85 12.768V.81a.3.3 0 0 0-.6 0V12.75L1.075 8.936a.3.3 0 0 0-.462.383l3.714 4.463a.301.301 0 0 0 .231.108c.09 0 .174-.04.231-.108l3.699-4.463a.3.3 0 0 0-.463-.383Zm7.362-4.255L11.674.218a.3.3 0 0 0-.462 0L7.514 4.681a.3.3 0 0 0 .462.383l3.175-3.832V13.19a.3.3 0 1 0 .6 0V1.248l3.175 3.816a.297.297 0 0 0 .422.04.3.3 0 0 0 .04-.423Z"
                  />
                </svg>
              </button>
            </th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {data
            .filter((createEntry) => {
              return props.search.toLowerCase() === ""
                ? createEntry
                : createEntry.username.toLowerCase().includes(props.search);
            })
            ?.map(createEntry)}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
