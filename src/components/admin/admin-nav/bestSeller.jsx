import Table from "../../table/Table";
import AddProducts from "../addProducts";
import { useEffect, useState, useLayoutEffect } from "react";
import AddBestSellers from "../update/addBestSellers";

export default function BestSellers() {
  // const [datas, setData] = useState([]);
  const columns = [
    { label: "#", accessor: "id", sortable: true },
    { label: "", accessor: "image", sortable: false },
    { label: "Product", accessor: "name", sortable: true },
    { label: "Rate", accessor: "rate", sortable: true },
    { label: "Discount", accessor: "discount", sortable: true },
    { label: "Stock", accessor: "stock", sortable: true },
    { label: "Unit", accessor: "unit", sortable: false },
    { label: "Created Date", accessor: "date", sortable: true },
  ];
  const [urlData, setUrlData] = useState("tabledata");
  const [data, setdata] = useState("");
  const [img, setImg] = useState("");
  const [id, setId] = useState(1);
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

  const url = `http://localhost:4000/${urlData}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setdata(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    preFilled(id);
  }, [id]);

  const preFilled = (sno) => {
    setId(sno);
    console.log(img);
    let item = data[sno - 1];
    console.log(item);
    setImg(item?.image);
    setName(item?.name);
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

  return (
    <div>
      <div className={add || update ? "dim-bg" : ""}></div>
      <h2 className="admin-title">Best Sellers</h2>
      {/* <Table /> */}

      <AddBestSellers />
      {add ? (
        <>
          <div>
            <AddProducts
              close={() => {
                setAdd(false);
              }}
              call="POST"
              lastid={data.at(-1).id}
            />
          </div>
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
          />
        </div>
      ) : (
        ""
      )}

      <Table
        url={url}
        columns={columns}
        searchClass="searchClass"
        data={data}
        searchBtnClass="searchBtn"
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
