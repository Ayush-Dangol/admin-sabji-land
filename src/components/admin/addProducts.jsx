import React, { useState, useEffect, useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";
import UploadImg from "../uploadImage";
import Input from "./update/input";
import axios from "axios";
// var RNFS = require("react-native-fs");
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

  const ref = useRef();
  // useEffect(() => {
  //   /**
  //    * Alert if clicked on outside of element
  //    */
  //   function handleClickOutside(event) {
  //     if (ref.current && !ref.current.contains(event.target)) {
  //       close(!close);
  //     }
  //   }
  //   // Bind the event listener
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     // Unbind the event listener on clean up
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [ref]);

  useEffect(() => {
    console.log(id);
    console.log(name);
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
    console.log(pimg);
  }, [id]);

  const setImage = (img) => {
    setImg(img);
    return pimg;
  };
  function handleSubmit(event) {
    event.preventDefault();

    const date = new Date();
    const dates = String(date);
    console.log(dates.slice(3, 21));
    const url = `http://localhost:4000/api/v1/postProduct`;

    const obj = { date: dates.slice(3, 21) };
    const data = new FormData(event.target);

    const value = Object.fromEntries(data.entries());
    const imgData = { image: pimg };
    const lId = { id: lastid + 1 };
    if (call === "POST") {
      const jsonData = Object.assign(value, obj, imgData);
      let jsonS = JSON.stringify(jsonData);

      // fetch(url, {
      //   method: "POST", // or 'PUT'
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   credentials: "include",
      //   body: jsonS,
      // }).catch((error) => {
      //   console.error("Error:", error);
      // });
      axios
        .post(url, jsonS, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      const jsonData = Object.assign(value, obj, imgData);

      let jsonS = JSON.stringify(jsonData);
      fetch(url / id, {
        method: "PUT", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: jsonS,
      })
        .then(() => {
          close(false);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }

  return (
    <div className="add-container" ref={ref}>
      <form className="add-product" onSubmit={handleSubmit}>
        <button className="close-add" onClick={close}>
          <AiOutlineClose />
        </button>
        <div className="add-products-left">
          <div className="product-left-item1">
            <Input
              keys="name"
              type="text"
              name="productName"
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
                className="add-products-input input-select"
                value={punit}
                onChange={(e) => setUnit(e.target.value)}
              >
                <option value="KG">KG</option>
                <option value="G">G</option>
              </select>
            </div>

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
                className="add-products-input input-select"
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
            {/* <Input
                type="number"
                name="stock"
                data="Stock"
                value={pstock}
                change={(e) => setStock(e.target.value)}
                placeholder="Stock input number (100)"
              /> */}

            <div className="input-items">
              <label htmlFor="">Stock</label>
              <select
                name="stock"
                data="Stock"
                id=""
                className="add-products-input input-select"
                value={pstock}
                onChange={(e) => setPackage(e.target.value)}
              >
                <option value="InStock">In Stock</option>
                <option value="Out of Stock">Out of Stock</option>
                <option value="Unavailable">Unavailable</option>
              </select>
            </div>

            {/* <div className="input-items">
                <label htmlFor="">Product Category</label>
                <select
                  name="category"
                  data="Product Category"
                  id=""
                  className="add-products-input input-select"
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
                  className="add-products-input input-select"
                  value={ppackage}
                  onChange={(e) => setPackage(e.target.value)}
                >
                  <option value="c">c</option>
                  <option value="d">d</option>
                </select>
              </div> */}
            <div className="input-items">
              <label htmlFor="">Product Family</label>
              <select
                name="family"
                data="Product Family"
                id=""
                className="add-products-input input-select"
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
                className="add-products-input input-select"
                value={ptype}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="t">t</option>
                <option value="h">h</option>
              </select>
            </div>

            <div className="products-radio-container">
              <div className="input-items">
                <label htmlFor="">Is it organic?</label>
                <div className="radio-btn">
                  <input
                    type="radio"
                    name="organic"
                    id="organicY"
                    value="Yes"
                    checked={porganic === "Yes" ? true : false}
                    // checked={porganic === "Y" ? "checked" : ""}
                    // checked={call === "PUT" && porganic === "Y" ? true : true}
                  />
                  <label htmlFor="organicY">Yes</label>
                  <input
                    type="radio"
                    name="organic"
                    id="organicN"
                    value="No"
                    checked={porganic === "No" ? true : false}
                    // checked={call === "PUT" && porganic === "N" ? true : true}

                    // checked={porganic === "N" ? true : false}
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
                    value="Yes"
                    // {...(pedible === "Y" ? (checked = true) : "")}
                  />
                  <label htmlFor="edibleY">Yes</label>
                  <input
                    type="radio"
                    name="edible"
                    id="edibleN"
                    value="No"
                    // checked={pedible === "N" ? true : false}
                  />
                  <label htmlFor="edibleN">No</label>
                </div>
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
        </div>

        <div className="add-products-right">
          <h3>Upload Images</h3>
          <UploadImg
            dimension="234*188"
            imgClass="add-product-img"
            containerClass="product-img-container"
            setMultiple={false}
            setImg={setImage}
            oldImg={pimg}
            dropClass="add-product-drop"
          />
          {console.log(setImage)}
        </div>
        <div className="product-submit-container">
          <button onSubmit={handleSubmit} className="product-submit">
            Save
          </button>

          <button onClick={close} className="product-cancel">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
