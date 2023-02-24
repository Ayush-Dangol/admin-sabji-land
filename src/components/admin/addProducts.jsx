import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";

// var RNFS = require("react-native-fs");
const Input = (props) => {
  return (
    <div className="input-items">
      <label htmlFor={props.id}>{props.data}</label>
      <input
        type={props.type}
        className={`add-products-input ${props.class}`}
        name={props.name}
        id={props.id}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.change}
      />
    </div>
  );
};
export default function AddProducts({
  name,
  image,
  price,
  unit,
  discount,
  stock,
  family,
  description,
  category,
  packages,
  organic,
  edible,
  type,
  id,
  close,
  call,
  lastid,
}) {
  const [first, setfirst] = useState();
  const [pname, setName] = useState();
  const [pimg, setImg] = useState("");
  const [punit, setUnit] = useState("");
  const [pdiscount, setDiscount] = useState("");
  const [pstock, setStock] = useState();
  const [prate, setRate] = useState();
  const [pcategory, setCategory] = useState("");
  const [ppackage, setPackage] = useState("");
  const [pfamily, setFamily] = useState("");
  const [ptype, setType] = useState("");
  const [porganic, setOrganic] = useState("");
  const [pedible, setEdible] = useState("");

  useEffect(() => {
    setName(name);
    setImg(image);
    setName(name);
    setUnit(unit);
    setDiscount(discount);
    setStock(stock);
    setRate(price);
    setFamily(family);
    setPackage(packages);
    setType(type);
    setOrganic(organic);
    setEdible(edible);
    setCategory(category);
    console.log(pname);
  }, [id]);

  function handleSubmit(event) {
    event.preventDefault();

    const date = new Date();
    const dates = String(date);
    console.log(dates.slice(3, 21));

    const obj = { date: dates.slice(3, 21) };
    console.log(obj);
    const data = new FormData(event.target);

    const value = Object.fromEntries(data.entries());

    const lId = { id: lastid + 1 };
    if (call === "POST") {
      const jsonData = Object.assign(value, obj, lId);

      let jsonS = JSON.stringify(jsonData);

      fetch(`http://localhost:4000/tabledata`, {
        method: { call }, // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: jsonS,
      }).catch((error) => {
        console.error("Error:", error);
      });
      console.log({ jsonS });
    } else {
      const jsonData = Object.assign(value, obj);

      let jsonS = JSON.stringify(jsonData);
      console.log(id);
      fetch(`http://localhost:4000/tabledata/${id}`, {
        method: "PUT", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: jsonS,
      }).catch((error) => {
        console.error("Error:", error);
      });
      console.log({ jsonS });
    }
  }

  return (
    <>
      <div className="add-container">
        <form className="add-product" onSubmit={handleSubmit}>
          <button className="close-add" onClick={close}>
            <AiOutlineClose />
          </button>
          <div className="add-products-left">
            <div className="product-left-item1">
              <Input
                keys="name"
                type="text"
                name="name"
                data="Name"
                placeholder="Product Name"
                value={pname}
                change={(e) => setName(e.target.value)}
              />
              {/* <label htmlFor="name">name</label>
            <input
              type="text"
              name="name"
              placeholder="Product Name"
              value={pname}
              onChange={(e) => {
                setName(e.target.value);
              }}
            /> */}
              <Input type="text" name="nepName" data="नाम" placeholder="नाम" />
              <Input
                type="number"
                name="rate"
                data="Price per unit"
                placeholder="Amount"
                value={prate}
                change={(e) => setRate(e.target.value)}
              />
              <div className="input-items">
                <label htmlFor="">Unit Type</label>
                <select
                  name="unit"
                  data="Unit type"
                  id=""
                  className="add-products-input"
                  value={punit}
                  onChange={(e) => setUnit(e.target.value)}
                >
                  <option value="KG">KG</option>
                  <option value="G">G</option>
                </select>
              </div>

              <Input
                type="text"
                name="discount"
                data="Discount"
                placeholder="Discount in % eg:(10%)"
                change={(e) => setDiscount(e.target.value)}
                value={pdiscount}
              />
              <Input
                type="number"
                name="stock"
                data="Stock"
                value={pstock}
                change={(e) => setStock(e.target.value)}
                placeholder="Stock input number (100)"
              />
              <div className="input-items">
                <label htmlFor="">Product Category</label>
                <select
                  name="category"
                  data="Product Category"
                  id=""
                  className="add-products-input"
                  value={pcategory}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="a">a</option>
                  <option value="b">b</option>
                </select>
              </div>
              <div className="input-items">
                <label htmlFor="">Product Packages</label>
                <select
                  name="package"
                  data="Product Packages"
                  id=""
                  className="add-products-input"
                  value={ppackage}
                  onChange={(e) => setPackage(e.target.value)}
                >
                  <option value="c">c</option>
                  <option value="d">d</option>
                </select>
              </div>
              <div className="input-items">
                <label htmlFor="">Product Family</label>
                <select
                  name="family"
                  data="Product Family"
                  id=""
                  className="add-products-input"
                  value={pfamily}
                  onChange={(e) => setFamily(e.target.value)}
                >
                  <option value="e">e</option>
                  <option value="f">f</option>
                </select>
              </div>
              <div className="input-items">
                <label htmlFor="">Product Type</label>
                <select
                  name="type"
                  data="Product Type"
                  id=""
                  className="add-products-input"
                  value={ptype}
                  onChange={(e) => setType(e.target.value)}
                >
                  <option value="t">t</option>
                  <option value="h">h</option>
                </select>
              </div>

              <div className="input-items">
                <label htmlFor="">Is it organic?</label>
                <div className="radio-btn">
                  <input
                    type="radio"
                    name="organic"
                    id="organicY"
                    value="Y"
                    checked={porganic === "Y" ? true : false}
                  />
                  <label htmlFor="organicY">Yes</label>
                  <input
                    type="radio"
                    name="organic"
                    id="organicN"
                    value="N"
                    checked={porganic === "N" ? true : false}
                  />
                  <label htmlFor="organicN">No</label>
                </div>
              </div>

              <div className="input-items">
                <label htmlFor="">Is it edible?</label>
                <div className="radio-btn">
                  <input
                    type="radio"
                    name="edible"
                    id="edibleY"
                    checked={pedible === "Y" ? true : false}
                  />
                  <label htmlFor="edibleY">Yes</label>
                  <input
                    type="radio"
                    name="edible"
                    id="edibleN"
                    checked={pedible === "N" ? true : false}
                  />
                  <label htmlFor="edibleN">No</label>
                </div>
              </div>
            </div>

            {/* <Input
            type="text"
            name="pFamily"
            data="Product Family"
            placeholder="Product Name"
            value={pfamily}
            change={(e) => setFamily(e.target.value)}
            class="input-item-2"
          /> */}
            <div className="input-items">
              <label htmlFor="descArea">Product Description</label>
              <textarea
                name="pDesc"
                data="Product Description"
                id="descArea"
                cols="30"
                rows="10"
                // value={description}
                className="add-products-input input-item-text topics"
              ></textarea>
            </div>
            <button onSubmit={handleSubmit} onClick={close}>
              submit
            </button>
          </div>

          <div className="add-products-right"></div>
        </form>
      </div>
    </>
  );
}
