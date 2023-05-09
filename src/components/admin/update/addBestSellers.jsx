import React, { useState, useEffect, useRef } from "react";
import TableHead from "../../table/TableHead";
import Search from "../search";
import Table from "../../table/Table";
import { RiDeleteBin2Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

function AddBestSellers(props) {
  const [data, setData] = useState();
  const [showdata, setShowdata] = useState();
  const [i, seti] = useState();
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    const url = `http://localhost:4000/tabledata`;
    const url2 = `http://localhost:4004/bestSeller`;
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const response2 = await fetch(url2);
        const json = await response.json();
        const json2 = await response2.json();
        setShowdata(json2);
        setData(json);
        console.log(showdata);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  const ref = useRef();
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        props.close(!props.close);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  const handleSearch = (e) => {
    setSearchQuery(e);
  };

  const handleAdd = () => {
    const date = new Date();
    const dates = String(date);
    const obj = { date: dates.slice(3, 21) };
    let jsonS;
    newData.map((data) => {
      const jsonData = Object.assign(data);
      // console.log(e);
      console.log(jsonS);

      jsonS = JSON.stringify(jsonData);
      fetch(`http://localhost:4004/bestSeller`, {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: jsonS,
      }).catch((error) => {
        console.error("Error:", error);
      });
    });
  };

  const columns = [
    { label: "#", accessor: "id", sortable: true },
    { label: "", accessor: "image", sortable: false },
    { label: "Product", accessor: "name", sortable: true },
    // { label: "Rate", accessor: "rate", sortable: true },
    // { label: "Stock", accessor: "stock", sortable: true },
    // { label: "Unit", accessor: "unit", sortable: false },
  ];

  const [finalData, setFinalData] = useState();
  useEffect(() => {
    setFinalData(data);
  }, [data]);
  const [newData, setNewData] = useState([]);
  const handleToggle = (id) => {
    seti(id);
    const newArray = finalData.find((item) => item.id === id);
    const newDataIndex = newData.findIndex((item) => item.id === id);
    if (newDataIndex !== -1) {
      const newDataArray = [...newData];
      newDataArray.splice(newDataIndex, 1);
      setNewData(newDataArray);
    } else {
      setNewData([...newData, newArray]);
    }
  };
  console.log(newData);

  const removeToggle = (id) => {
    console.log("h");
    // const newArray = finalData.find((item) => item.id === id);
    const newDataIndex = newData.findIndex((item) => item.id === id);
    const newDataArray = [...newData];
    newDataArray.splice(newDataIndex, 1);
    setNewData(newDataArray);
  };

  function BestsellerTable({ btnClick, ...props }) {
    return (
      <>
        {props.tabledata
          ?.filter((entry) => entry.name?.toLowerCase().includes(searchQuery))
          .map((entry) => {
            return (
              <tr key={entry.id}>
                {columns?.map(({ accessor }) => {
                  if (entry[accessor] === "") {
                    return <td>--</td>;
                  } else {
                    if (accessor === "image") {
                      return (
                        <td>
                          <img src={entry[accessor]} alt="" />
                        </td>
                      );
                    }
                    if (accessor === "id") {
                      return <td>{props.tabledata?.indexOf(entry) + 1}</td>;
                    } else {
                      return (
                        <>
                          <td key={accessor}>{entry[accessor]}</td>
                        </>
                      );
                    }
                  }
                })}
                <td>
                  <button
                    onClick={() => btnClick(entry.id)}
                    className={`${props.btnClass} ${
                      newData.some((dataItem) => dataItem.id === entry.id)
                        ? "bestSellerColor"
                        : ""
                    }`}
                  >
                    {props.btn}
                  </button>
                  {/* <Btn id={entry.id} data={prevData} c={a} /> */}
                </td>
              </tr>
            );
          })}
      </>
    );
  }
  return (
    <div className="add-bestseller" ref={ref}>
      <h3>Product List</h3>
      <button className="close-add" onClick={props.close}>
        <AiOutlineClose />
      </button>
      <div className="search-box">
        <Search
          totalData={finalData}
          onSearch={handleSearch}
          searchClass="new-search"
        />
        <button onClick={handleAdd} className="bestseller-add-btn">
          Add
        </button>
      </div>
      <div className={searchQuery != "" ? "bestseller-container" : ""}>
        {searchQuery != "" ? (
          <table className="react-table">
            <BestsellerTable
              tabledata={finalData}
              btnClass="BestSellerBtn"
              btnClick={handleToggle}
            />
          </table>
        ) : (
          ""
        )}
      </div>
      <div>
        {newData.length != 0 ? (
          <>
            <hr />
            <div className="bestseller-container2">
              {" "}
              <table className="react-table">
                <TableHead columns={columns} />
                <BestsellerTable
                  tabledata={newData}
                  btn={<RiDeleteBin2Line />}
                  btnClass="bestseller-remove"
                  btnClick={removeToggle}
                />{" "}
              </table>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
      {/* <div>
        <Table data={newData} columns={props.col} topclass="hide-div" />
      </div> */}
    </div>
  );
}

export default AddBestSellers;
