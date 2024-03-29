import Table from "../../table/Table";
import AddProducts from "../addProducts";
import tabledata from "../../data/tabledata.json";
import { useEffect, useState, useLayoutEffect } from "react";

export default function Products() {
  // const [datas, setData] = useState([]);
  const columns = [
    { label: "#", accessor: "id", sortable: true },
    { label: "", accessor: "image", sortable: false },
    { label: "Product", accessor: "productName", sortable: true },
    { label: "Rate", accessor: "rate", sortable: true },
    { label: "Discount", accessor: "discount", sortable: true },
    { label: "Stock", accessor: "stock", sortable: true },
    { label: "Unit", accessor: "unitType", sortable: false },
    { label: "Created Date", accessor: "date", sortable: true },
  ];
  const [urlData, setUrlData] = useState("getAllProducts");
  const [data, setdata] = useState("");
  const [img, setImg] = useState("");
  const [id, setId] = useState();
  const [add, setAdd] = useState(false);
  const [update, setUpdate] = useState(false);
  const [name, setName] = useState("");
  const [unit, setUnit] = useState("");
  const [discount, setDiscount] = useState("");
  const [stock, setStock] = useState();
  const [rate, setRate] = useState();
  const [family, setFamily] = useState("");
  const [category, setCategory] = useState("");
  const [packages, setPackages] = useState("");
  const [type, setType] = useState("");
  const [organic, setOrganic] = useState("");
  const [edible, setEdible] = useState("");

  const url = `http://localhost:4000/api/v1/${urlData}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log("data: ", json);
        setdata(json.data);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    preFilled(id);
  }, [id]);
  console.log(id);
  const preFilled = (sno) => {
    setId(sno);
    console.log(data);
    let item = data.find((entry) => entry._id === sno);
    console.log(item);
    setImg(item?.image);
    setName(item?.productName);
    setUnit(item?.unit);
    setDiscount(item?.discount);
    setStock(item?.stock);
    setRate(item?.rate);
    setFamily(item?.family);
    setPackages(item?.package);
    setType(item?.type);
    setOrganic(item?.organic);
    setEdible(item?.edible);
    setCategory(item?.category);
  };

  const toggleAdd = () => {
    setAdd(true);
  };
  const toggleUpdate = () => {
    setUpdate(true);
  };

  const close = (e) => {
    setUpdate(e);
  };

  // function ddd() {
  //   setData(tabledata.tabledata);
  // }

  // useEffect(() => {
  //   fetch("http://localhost:4000/products")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setData(data);
  //     })
  //     .catch((e) => {
  //       console.log(e.message);
  //     });
  // }, []);

  return (
    <div>
      <div className={add || update ? "dim-bg" : ""}></div>
      <h1 className="admin-title">Products</h1>
      {/* <Table /> */}

      {add ? (
        <>
          <AddProducts
            close={() => {
              setAdd(false);
            }}
            call="POST"
            // lastid={data.at(-1).id}
            url={url}
          />
        </>
      ) : (
        ""
      )}
      {update ? (
        <div>
          <AddProducts
            name={name}
            unit={unit}
            image={img}
            discount={discount}
            stock={stock}
            price={rate}
            family={family}
            category={category}
            packages={packages}
            organic={organic}
            edible={edible}
            type={type}
            id={id}
            call="PUT"
            close={close}
            url={url}
          />
        </div>
      ) : (
        ""
      )}

      <Table
        url={url}
        columns={columns}
        data={data}
        searchName="name"
        idNum="id"
        searchPlaceholder="Search by Product Name"
        preFilled={preFilled}
        add={toggleAdd}
        fileName="products"
        update={toggleUpdate}
        classN={add || update ? "table-section" : ""}
      />
    </div>
  );
}
